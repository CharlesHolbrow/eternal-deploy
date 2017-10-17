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
	subKey := "eternal|art"

	part := eternal.NewFragment([]string{subKey}, synkConn)
	part.Clear()

	notes := make([]*eternal.Note, 0, 50)

	// This app expects there to be a single 'root object' where users begin
	// their journey.
	initial := &eternal.Note{
		Text: "A Conversation About Art at the Media Lab",
		ID:   strings.Replace(subKey, ":", "|", -1),
	}
	notes = append(notes, initial)

	////////////////////////////////////////////////////////////
	//
	// The Past
	//
	past := &eternal.Note{
		Text: "Past",
		ID:   "past",
	}
	initial.AddLink(past.Key())
	notes = append(notes, past)

	waysofthinking := &eternal.Note{
		Text: "New media and new ways of thinking",
		ID:   "waysofthinking",
	}
	notes = append(notes, waysofthinking)
	past.AddLink(waysofthinking.Key())

	// Murial Cooper
	cooper := &eternal.Note{
		Text: "Muriel Cooper",
		ID:   "cooper",
	}
	notes = append(notes, cooper)
	waysofthinking.AddLink(cooper.Key())

	onCooper := &eternal.Note{
		Text: "\"Muriel was a real pioneer of a new design domain,\" said Bill Mitchell...",
		ID:   "onmurial",
	}
	notes = append(notes, onCooper)
	cooper.AddLink(onCooper.Key())

	onCooper2 := &eternal.Note{
		Text: "\"...I think she was the first graphic designer to carry out really profound explorations of the new possibilities of electronic media—things like 3-D text...\"",
		ID:   "onmurial2",
	}
	notes = append(notes, onCooper2)
	onCooper.AddLink(onCooper2.Key())

	onCooper3 := &eternal.Note{
		Text: "\"...She understood from the beginning that the digital world opened up a whole domain of issues and problems, and she wanted to understand these problems in a rigorous way.\"",
		ID:   "onmurial3",
	}
	notes = append(notes, onCooper3)
	onCooper2.AddLink(onCooper3.Key())

	web := &eternal.Note{
		Text: "Similarly, I think that the web opens a new world for digital media...",
		ID:   "webworld",
	}
	notes = append(notes, web)
	onCooper3.AddLink(web.Key())

	notDiscovered := &eternal.Note{
		Text: "...but that world has not yet been discovered.",
		ID:   "notdiscovered",
	}
	notes = append(notes, notDiscovered)
	web.AddLink(notDiscovered.Key())

	// Minsky
	minsky := &eternal.Note{
		Text: "Marvin Minsky",
		ID:   "minsky",
	}
	notes = append(notes, minsky)
	waysofthinking.AddLink(minsky.Key())

	musicMindMeaning := &eternal.Note{
		Text: "Marvin asked: Why do we like music?...",
		ID:   "mmm",
	}
	notes = append(notes, musicMindMeaning)
	minsky.AddLink(musicMindMeaning.Key())

	touches := &eternal.Note{
		Text: "...Our culture immerses us in it for hours each day, and everyone knows how it touches our emotions",
		ID:   "immerses",
	}
	notes = append(notes, touches)
	musicMindMeaning.AddLink(touches.Key())

	touchesThought := &eternal.Note{
		Text: "...but few think of how music touches other kinds of thought...",
		ID:   "touchesThought",
	}
	notes = append(notes, touchesThought)
	touches.AddLink(touchesThought.Key())

	pervasive := &eternal.Note{
		Text: "...It is astonishing how little curiosity we have about so pervasive an \"environmental\" influence...",
		ID:   "pervasive",
	}
	notes = append(notes, pervasive)
	touchesThought.AddLink(pervasive.Key())

	musicalThinking := &eternal.Note{
		Text: "...What might we discover if we were to study musical thinking?",
		ID:   "musicalthinking",
	}
	notes = append(notes, musicalThinking)
	pervasive.AddLink(musicalThinking.Key())

	////////////////////////////////////////////////////////////
	//
	// The Present
	//
	present := &eternal.Note{
		Text: "Present",
		ID:   "present",
	}
	initial.AddLink(present.Key())
	notes = append(notes, present)

	pipeline := &eternal.Note{
		Text: "Does the pipeline for students and faculty bias away from artistic rigor?",
		ID:   "pipeline",
	}
	notes = append(notes, pipeline)
	present.AddLink(pipeline.Key())

	secret := &eternal.Note{
		Text: "A lot of the art currently happening around the lab happens in secret.",
		ID:   "secret",
	}
	notes = append(notes, secret)
	present.AddLink(secret.Key())

	secret2 := &eternal.Note{
		Text: "Students are so passionate about their work about that they do not tell their PIs for fear of being shut down.",
		ID:   "secret2",
	}
	notes = append(notes, secret2)
	secret.AddLink(secret2.Key())

	secret3 := &eternal.Note{
		Text: "If there were some way to celebrate side projects or to support these efforts without detracting from students’ primary research, it could help our community to feel more like a family for those that are currently hiding.",
		ID:   "secret3",
	}
	notes = append(notes, secret3)
	secret2.AddLink(secret3.Key())

	whatIs := &eternal.Note{
		Text: "In hindsight, we can identify the projects and professors who shaped the art culture at the media lab.",
		ID:   "artmeaning",
	}
	notes = append(notes, whatIs)
	present.AddLink(whatIs.Key())

	harder := &eternal.Note{
		Text: "It's harder to tell what arts culture is right now. What do we want 'Art' to mean?",
		ID:   "harder",
	}
	notes = append(notes, harder)
	whatIs.AddLink(harder.Key())

	noMeaning := &eternal.Note{
		Text: "The power of Art comes from its evasive definition.",
		ID:   "evasive",
	}
	harder.AddLink(noMeaning.Key())
	notes = append(notes, noMeaning)

	paintbrush := &eternal.Note{
		Text: "We create new tools - These tools enable new forms of art.",
		ID:   "paintbrush",
	}
	notes = append(notes, paintbrush)
	harder.AddLink(paintbrush.Key())

	fineart := &eternal.Note{
		Text: "Art is media that needs no explaination. Art opens our mind to new perspectives.",
		ID:   "fineart",
	}
	notes = append(notes, fineart)
	harder.AddLink(fineart.Key())

	////////////////////////////////////////////////////////////
	//
	// The Future
	//
	future := &eternal.Note{
		Text: "Future",
		ID:   "future",
	}
	initial.AddLink(future.Key())
	notes = append(notes, future)

	howtothink := &eternal.Note{
		Text: "How to Think - A class on artistic rigor",
		ID:   "howtothink",
	}
	notes = append(notes, howtothink)
	future.AddLink(howtothink.Key())

	howtomake := &eternal.Note{
		Text: "The class \"How To Make (Almost) Anything\" has famously integrated itself into the culture of the Media Lab",
		ID:   "howtomake",
	}
	notes = append(notes, howtomake)
	howtothink.AddLink(howtomake.Key())

	// Create the root object in Redis
	fmt.Println("Creating initial values...")
	for i, note := range notes {
		note.SubKey = subKey
		fmt.Println(i, note.Key(), part.AddNote(note))
	}

	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))
	time.Sleep(100 * time.Millisecond)
}
