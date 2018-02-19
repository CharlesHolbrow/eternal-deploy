package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
	"github.com/garyburd/redigo/redis"
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
	fragment := eternal.NewFragment("piano:main", mutator)
	fragment.RemoveAllNotes()
	conn := synk.DialRedis()

	rSubscription := redis.PubSubConn{Conn: conn}
	err := rSubscription.Subscribe("piano")
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
					fragment.AddNote(note)
				} else {
					fragment.RemoveNote(note)
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

	// for {
	// 	n := &eternal.Note{Number: 64, Velocity: 64}
	// 	fragment.AddNote(n)
	// 	time.Sleep(time.Second)
	// 	n2 := &eternal.Note{Number: 65, Velocity: 127}
	// 	fragment.AddNote(n2)
	// 	time.Sleep(time.Second)
	// 	fragment.RemoveAllNotes()
	// 	time.Sleep(time.Second)
	// }
}
