package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"strings"
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
	time.Sleep(30 * time.Millisecond)

	// If there are few voices, add one
	if len(part.Voices) < 3 {
		voice := &eternal.Voice{
			SubKey: subKey,
		}
		voice.SetLinksElement(0, "n:eternal|main")
		length := 4 // how many beats long
		for i := 0; i < length; i++ {
			voice.Lengths[i] = 1
		}
		conn := synkConn.Pool.Get()
		synk.Create(voice, conn)
		conn.Close()
		part = eternal.NewFragment(subKey, synkConn)
	}

	// This app expects there to be a single 'root object' where users begin
	// their journey.
	neil := "Neil deGrasse Tyson"
	initial := &eternal.Note{
		Text:   "If you want to assert a truth, first make sure it's not just an opinion that you desperately want to be true.",
		Attrib: &neil,
		// Note that IDs may not contain a colon character, because this will
		// interfere with the object loader's type identification.
		ID: strings.Replace(subKey, ":", "|", -1),
	}
	// Create the root object in Redis if it was not found.
	if _, found := part.Notes[initial.Key()]; !found {
		fmt.Println("Created initial value:...")
		err := part.AddNote(initial)
		fmt.Println("Add Note error:", err)
	}

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
			for _, v := range part.Voices {
				v.SetNotesElement(rand.Intn(4), rand.Intn(7))
				synkConn.Modify(v)
			}
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
