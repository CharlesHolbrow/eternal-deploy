package main

import (
	"log"
	"net/http"
	"os"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

// SYNK_ENV should be "production" or an empty string. We may add additional
// environments in the future. For now, if this is an empty string, or if it is
// not set, assume development.
var env = os.Getenv("SYNK_ENV")

func main() {

	node := synk.NewNode()
	node.RegisterClientConstructor(eternal.ConstructClient)
	node.RegisterContainerConstructor(eternal.ConstructContainer)
	wsHandler := synk.NewHandler(node)

	// In production we will serve the public directory with nginx. However,
	// this will still be useful in development.
	http.Handle("/", http.FileServer(http.Dir("public")))
	http.Handle("/ws", wsHandler)

	var addr string

	if env == "" {
		addr = "127.0.0.1:5000"
	} else {
		addr = "0.0.0.0:5000"
	}

	log.Printf("Aether serving websockets with http on %s\n", addr)
	http.ListenAndServe(addr, nil)
}
