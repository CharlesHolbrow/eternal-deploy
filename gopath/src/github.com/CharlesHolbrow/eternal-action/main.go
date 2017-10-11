package main

import (
	"encoding/json"
	"fmt"
	"os"
	"time"

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
	synkConn := synk.NewConnection(redisAddr)
	subKey := "eternal|main"

	part := eternal.NewFragment(subKey, synkConn)

	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))

	// remove a random object
	// for _, voice := range part.Voices {
	// 	synkConn.Delete(voice)
	// 	delete(part.Notes, voice.Key())
	// 	break
	// }

	// Remember that we must not close a connection retrieved from a pool
	// without unsubscribing from all keys.
	psc := redis.PubSubConn{Conn: synkConn.Pool.Get()}
	psc.Subscribe("test|eternal.AddNoteRequest")
	fromRedis := make(chan eternal.AddNoteRequest)

	go func() {
		for {
			switch v := psc.Receive().(type) {
			case redis.Message:
				msg := eternal.AddNoteRequest{}
				err := json.Unmarshal(v.Data, &msg)
				if err != nil {
					fmt.Printf("Got bad message from client %v\n", err)
				} else {
					fromRedis <- msg
				}
			case redis.Subscription:
				fmt.Printf("%s: %s %d\n", v.Channel, v.Kind, v.Count)
			case error:
				fmt.Printf("Error from redis subscription %s\n", v.Error())
			}
		}
	}()

	ticker := time.NewTicker(time.Second * 10)
	for {
		select {
		case <-ticker.C:
		case msg := <-fromRedis:
			var parent synk.Object
			var addLinkErr error

			newID := synk.NewID().String()
			newNote := &eternal.Note{}
			newNote.SetID(newID)
			newNote.SetText(msg.Text)

			if noteParent, ok := part.Notes[msg.Parent]; ok {
				addLinkErr = noteParent.AddLink(newNote.Key())
				parent = noteParent
			} else if voiceParent, ok := part.Voices[msg.Parent]; ok {
				addLinkErr = voiceParent.AddLink(newNote.Key())
				parent = voiceParent
			} else {
				fmt.Println("Parent Not Found:", parent)
				continue
			}

			if addLinkErr != nil {
				fmt.Println("Error Adding link to parent:", addLinkErr)
			}

			// The client did not pass a subscription key -- instead, get it
			// from the parent.
			newNote.SetSubKey(parent.GetSubKey())

			synkConn.Modify(parent)
			synkConn.Create(newNote)
			part.Notes[newNote.Key()] = newNote

			fmt.Printf("Got Msg %v\n", msg)
		}
	}
}
