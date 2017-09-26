package main

import (
	"fmt"
	"math/rand"
	"os"
	"time"

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
	subKey := "eternal:main"

	part := eternal.NewFragment(subKey, synkConn)
	time.Sleep(30 * time.Millisecond)

	// If there are few voices, add one
	if len(part.Voices) < 3 {
		voice := &eternal.Voice{
			SubKey: subKey,
		}
		length := 4 // how many beats long
		for i := 0; i < length; i++ {
			voice.Lengths[i] = 1
		}
		conn := synkConn.Pool.Get()
		synk.Create(voice, conn)
		conn.Close()
		part = eternal.NewFragment(subKey, synkConn)
	}

	if len(part.Notes) == 0 {
		neil := "Neil deGrasse Tyson"
		note := &eternal.Note{
			Text:   "If you want to assert a truth, first make sure it's not just an opinion that you desperately want to be true.",
			Attrib: &neil,
		}
		err := part.AddNote(note)
		fmt.Println("Add Note error:", err)
		synkConn.Create(note)
	}

	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))

	// remove a random object
	// for _, voice := range part.Voices {
	// 	synkConn.Delete(voice)
	// 	delete(part.Notes, voice.Key())
	// 	break
	// }

	for {
		for _, v := range part.Voices {
			v.SetNotesElement(rand.Intn(4), rand.Intn(7))
			synkConn.Modify(v)
			time.Sleep(time.Second)
		}
	}
}
