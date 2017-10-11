package main

import (
	"fmt"
	"os"
	"strings"
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
	subKey := "eternal|main"

	part := eternal.NewFragment(subKey, synkConn)
	part.Clear()

	// This app expects there to be a single 'root object' where users begin
	// their journey.
	neil := "Neil deGrasse Tyson"
	initial := &eternal.Note{
		Text:   "\"If you want to assert a truth, first make sure it's not just an opinion that you desperately want to be true.\"",
		Attrib: &neil,
		// Note that IDs may not contain a colon character, because this will
		// interfere with the object loader's type identification.
		ID: strings.Replace(subKey, ":", "|", -1),
	}

	whatFor := &eternal.Note{
		Text: "What is this for?",
	}
	whatFor.SetID("whatfor")
	initial.AddLink(whatFor.Key())
	initial.Resolve()

	// voices
	numVoices := 7
	voices := make([]*eternal.Voice, 0, numVoices)
	for i := 0; i < 7; i++ {
		voice := &eternal.Voice{
			SubKey: subKey,
		}
		voices = append(voices, voice)
		voice.SetID(fmt.Sprintf("voiceinit%d", i))

		if i == 0 {
			whatFor.AddLink(voice.Key())
			whatFor.Resolve()
		}

		if i > 0 {
			voices[i-1].AddLink(voice.Key())
			voices[i-1].Resolve()
			voice.AddLink(voices[i-1].Key())
			voice.Resolve()
		}

		if i == numVoices-1 {
			voice.AddLink("n:eternal|main")
			voice.Resolve()
			voice.AddLink(voices[0].Key())
			voice.Resolve()
		}

		voice.Lengths[0] = 4
		voice.Notes[0] = i % 8
		// Note the bug in AddLink . We myst resolve after adding
	}

	fmt.Println("Adding voices:")
	for _, voice := range voices {
		part.AddVoice(voice)
	}

	// Create the root object in Redis
	fmt.Println("Created initial values...")
	fmt.Println("Add Neil Quote error:", part.AddNote(initial))
	fmt.Println("Add What For error:", part.AddNote(whatFor))

	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))
	time.Sleep(100 * time.Millisecond)
}
