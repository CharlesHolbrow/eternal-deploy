package main

import (
	"fmt"
	"time"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

func main() {
	synkConn := synk.NewConnection(":6379")

	part := eternal.NewFragment("eternal:main", synkConn)
	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))
	// voice := &eternal.Voice{
	// 	SubKey: "eternal:main",
	// }
	// synkConn.Create(voice)
	time.Sleep(30 * time.Millisecond)

	// Create a new note
	// part.AddNote(&eternal.Note{})
	// part.AddNote(&eternal.Note{})

	// remove a random object
	// for _, note := range part.Notes {
	// 	synkConn.Delete(note)
	// 	delete(part.Notes, note.Key())
	// 	break
	// }

	// for {
	// 	for _, n := range part.Notes {
	// 		fmt.Printf("Num: %d\tVel: %d\n", n.GetNumber())
	// 		n.SetNumber((n.GetNumber() + 1) % 8)
	// 		synkConn.Modify(n)
	// 		time.Sleep(time.Second)
	// 	}
	// }
}
