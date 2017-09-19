package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

func main() {
	synkConn := synk.NewConnection(":6379")
	subKey := "eternal:main"

	part := eternal.NewFragment(subKey, synkConn)
	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))
	time.Sleep(30 * time.Millisecond)

	// If there are no voices, add one
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
