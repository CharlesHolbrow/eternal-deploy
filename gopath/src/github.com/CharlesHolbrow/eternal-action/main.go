package main

import (
	"fmt"
	"math/rand"
	"os"
	"time"

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
	part := eternal.NewFragment("piano:main", "piano:other", mutator)
	fmt.Printf("Got %d objects\n", len(part.Notes))

	// Create a new note
	// part.AddNote(&eternal.Note{})
	note := &eternal.Note{}
	part.AddNote(note)
	fmt.Println("added:", note.String())

	// remove a random object
	if len(part.Notes) > 1 {
		for _, note := range part.Notes {
			part.Mutator.Delete(note)
			delete(part.Notes, note.TagGetID())
			break
		}
	}

	for {
		for _, n := range part.Notes {
			n.SetNumber(rand.Intn(0x1000000))
			part.Mutator.Modify(n)
			time.Sleep(time.Second)
		}
	}
}
