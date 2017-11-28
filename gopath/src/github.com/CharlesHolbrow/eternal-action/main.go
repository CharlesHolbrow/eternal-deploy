package main

import (
	"fmt"
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

	part := eternal.NewFragment("eternal:main", "eternal:other", synkConn)
	fmt.Printf("Got %d objects\n", len(part.Notes))

	// Create a new note
	// part.AddNote(&eternal.Note{})
	note := &eternal.Note{}
	part.AddNote(note)
	fmt.Println("added:", note.String())

	// remove a random object
	if len(part.Notes) > 3 {
		for _, note := range part.Notes {
			part.Mutator.Delete(note)
			delete(part.Notes, note.TagGetID())
			break
		}
	}

	time.Sleep(time.Second * 3)

	fmt.Println("Moving to second...")
	note.SetSubKey(part.K2())
	part.Mutator.Modify(note)

	time.Sleep(time.Second * 3)

	fmt.Println("Moving to unused...")
	note.SetSubKey("eternal:unused")
	part.Mutator.Modify(note)

	time.Sleep(time.Second * 3)

	fmt.Println("Moving back to original...")
	note.SetSubKey(part.K1())
	part.Mutator.Modify(note)

	time.Sleep(time.Second * 3)

	for {
		for _, n := range part.Notes {
			fmt.Printf("Num: %d\tVel: %d\n", n.GetNumber(), n.GetVelocity())
			n.SetNumber((n.GetNumber() + 1) % 128)
			part.Mutator.Modify(n)
			time.Sleep(time.Second)
		}
	}
}
