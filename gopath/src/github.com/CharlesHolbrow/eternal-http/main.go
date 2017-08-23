package main

import (
	"log"
	"net"
	"net/http"
	"os"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

// By default, look for redis locally at ":6379". We may specify another host by
// setting the "AETHER_REDIS_HOST" environment variable.
var redisAddr = os.Getenv("ETERNAL_REDIS_HOST") + ":6379"

// AETHER_ENV should be "production" or an empty string. We may add additional
// environments in the future. For now, if this is an empty string, or if it is
// not set, assume development.
var env = os.Getenv("ETERNAL_ENV")

// Setting the AETHER_CERT_PATH environment variable to a non-empty string
// indicates that the following files should be found at the specified path:
// - fullchain.pem
// - privkey.pem
var eternalCertPath = os.Getenv("ETERNAL_CERT_PATH")
var certChainFilename = eternalCertPath + "/fullchain.pem"
var privKeyFilename = eternalCertPath + "/privkey.pem"

// Redirect to to https on port 3001
func redirect(w http.ResponseWriter, req *http.Request) {
	// If a port is specified, remove it so we can redirect to the new port
	host, _, err := net.SplitHostPort(req.Host)
	if err != nil {
		host = req.Host
	}

	// This is pretty hacky, BUT if we are in production, assume that we are
	// forwarding port 443 to 3001. That means that we can redirect clients to
	// the host without the port number.
	//
	// If we are not in production, then assume 443 is not forwarded to 3001
	if env != "production" {
		host = host + ":3001"
	}

	target := "https://" + host + req.URL.Path
	if len(req.URL.RawQuery) > 0 {
		target += "?" + req.URL.RawQuery
	}
	log.Printf("redirect to: %s", target)

	// The Browser caches result if we use http.StatusMovedPermanently. For now,
	// I'm using a temporary redirect, because I have not fully thought through
	// how permanent redirects would affect my development workflow.
	http.Redirect(w, req, target, http.StatusTemporaryRedirect)
}

//
type EternalClient struct {
}

func (cc EternalClient) OnConnect(client *synk.Client) {
	log.Println("Custom Client Connected:", client.ID)
}

func (cc EternalClient) OnMessage(client *synk.Client, method string, data []byte) {
	log.Println("Custom Client Message:", method)
}

func main() {

	// In production we must specify the location of TLS certificates
	if env == "production" && eternalCertPath == "" {
		log.Panicln("The ETERNAL_CERT_PATH environment variable must be set in production")
	}

	synkConn := synk.NewConnection(redisAddr)

	CustomClientConstructor := func(client *synk.Client) synk.CustomClient {
		return EternalClient{}
	}

	wsHandler := synk.NewHandler(synkConn, eternal.BuildObject, CustomClientConstructor)

	http.Handle("/", http.FileServer(http.Dir("public")))
	http.Handle("/ws", wsHandler)

	// If a certificate path was specified, serve with TLS
	if eternalCertPath != "" {
		// Redirect clients going to http
		mux := http.NewServeMux()
		mux.HandleFunc("/", redirect)
		go http.ListenAndServe("0.0.0.0:3000", mux)
		// Use TLS on websockets
		log.Printf("Serve websockets with TLS. Looking for:\n- %s\n- %s\n", certChainFilename, privKeyFilename)
		// New http server
		http.ListenAndServeTLS("0.0.0.0:3001", certChainFilename, privKeyFilename, nil)
	} else {
		log.Printf("Using http. Caution - this is unsafe for production!")
		http.ListenAndServe("0.0.0.0:3000", nil)
	}
}
