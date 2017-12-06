package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/garyburd/redigo/redis"

	"github.com/CharlesHolbrow/eternal"
)

// By default, look for redis locally at ":6379". We may specify another host by
// setting the "SYNK_REDIS_HOST" environment variable.
var redisAddr = os.Getenv("SYNK_REDIS_HOST") + ":6379"

// SYNK_ENV should be "production" or an empty string. We may add additional
// environments in the future. For now, if this is an empty string, or if it is
// not set, assume development.
var env = os.Getenv("SYNK_ENV")

func main() {

	node := eternal.NewNode()
	mutator := node.CreateMutator()
	part := eternal.NewFragment("piano:main", mutator)

	part.RemoveAllNotes()

	// get a redis connection and subscribe
	rConn, err := redis.Dial("tcp", redisAddr)
	if err != nil {
		log.Panicln("error connecting to redis:", err)
	}
	rSubscription := redis.PubSubConn{Conn: rConn}
	err = rSubscription.Subscribe("piano")
	if err != nil {
		log.Panicln("Error subscribing to piano")
	}

	for {
		switch v := rSubscription.Receive().(type) {
		case redis.Message:
			event := &eternal.NoteEvent{}
			if err := json.Unmarshal(v.Data, event); err == nil {
				fmt.Println("Recived:", event.String())
				note := &eternal.Note{
					Number:   event.N,
					Velocity: event.V,
				}
				if event.On {
					part.AddNote(note)
				} else {
					part.RemoveNote(note)
				}
			} else {
				fmt.Printf("Got Bad NoteEvent message from client: %s\n", v.Data)
			}
		case redis.Subscription:
			// Redis is confirming our subscription v.Channel, v.Kind, v.Count
		case error:
			log.Println("eternal-action: Subscription receive error:", v)
			return
		}
	}
}
