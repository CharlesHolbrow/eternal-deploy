package main

import (
	"log"
	"net/http"
	"os"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

// By default, look for redis locally at ":6379". We may specify another host by
// setting the "SYNK_REDIS_HOST" environment variable.
var redisAddr = os.Getenv("SYNK_REDIS_HOST") + ":6379"

// SYNK_ENV should be "production" or an empty string. We may add additional
// environments in the future. For now, if this is an empty string, or if it is
// not set, assume development.
var env = os.Getenv("SYNK_ENV")

func main() {
	synkConn := synk.NewConnection(redisAddr)

	wsHandler := synk.NewHandler(synkConn, eternal.ConstructContainer,
		func(client *synk.Client) synk.CustomClient {
			return eternal.Client{}
		})

	// In production we will serve the public directory with nginx. However,
	// this will still be useful in development.
	http.Handle("/", http.FileServer(http.Dir("public")))
	http.Handle("/ws", wsHandler)

	addr := "127.0.0.1:5000"
	log.Printf("Aether serving websockets with http on %s\n", addr)
	http.ListenAndServe(addr, nil)
}
