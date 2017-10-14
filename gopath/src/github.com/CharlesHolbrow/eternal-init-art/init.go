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

	// Minsky
	minsky := &eternal.Note{
		Text: "Marvin Minsky",
		ID:   "minsky",
	}
	notes = append(notes, minsky)
	waysofthinking.AddLink(minsky.Key())

	musicMindMeaning := &eternal.Note{
		Text: "\"Why do we like music? Our culture immerses us in it for hours each day, and everyone knows how it touches our emotions, but few think of how music touches other kinds of thought. It is astonishing how little curiosity we have about so pervasive an \"environmental\" influence. What might we discover if we were to study musical thinking?",
		ID:   "mmm",
	}
	notes = append(notes, musicMindMeaning)
	minsky.AddLink(musicMindMeaning.Key())

	// Murial Cooper
	cooper := &eternal.Note{
		Text: "Muriel Cooper",
		ID:   "cooper",
	}
	notes = append(notes, cooper)
	waysofthinking.AddLink(cooper.Key())

	onCooper := &eternal.Note{
		Text: "\"Muriel was a real pioneer of a new design domain,\" says Bill Mitchell, dean of MIT's School of Architecture and Planning. \"I think she was the first graphic designer to carry out really profound explorations of the new possibilities of electronic media—things like 3-D text. She didn't just see computer-graphics technology as a new tool for handling graphic design work. She understood from the beginning that the digital world opened up a whole domain of issues and problems, and she wanted to understand these problems in a rigorous way.\"",
		ID:   "onmurial",
	}
	notes = append(notes, onCooper)
	cooper.AddLink(onCooper.Key())

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
		Text: "\"A lot of the art currently happening around the lab happens in secret. Students are so passionate about their work about that they do not tell their PIs for fear of being shut down. If there were some way to celebrate side projects or to support these efforts without detracting from students’ primary research, it could help our community to feel more like a family for those that are currently hiding.\"",
		ID:   "secret",
	}
	notes = append(notes, secret)
	present.AddLink(secret.Key())

	whatIs := &eternal.Note{
		Text: "In hindsight, we can identify the projects and professors who shaped the art culture at the media lab. It's harder to tell what arts culture is right now. What do we want 'Art' to mean?",
		ID:   "artmeaning",
	}
	notes = append(notes, whatIs)
	present.AddLink(whatIs.Key())

	noMeaning := &eternal.Note{
		Text: "The power of Art comes from its evasive definition.",
		ID:   "evasive",
	}
	whatIs.AddLink(noMeaning.Key())
	notes = append(notes, noMeaning)

	paintbrush := &eternal.Note{
		Text: "We create new tools - These tools enable new forms of art.",
		ID:   "paintbrush",
	}
	notes = append(notes, paintbrush)
	whatIs.AddLink(paintbrush.Key())

	fineart := &eternal.Note{
		Text: "Art is media that needs no explaination. Art opens our mind to new perspectives.",
		ID:   "fineart",
	}
	notes = append(notes, fineart)
	whatIs.AddLink(fineart.Key())

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

	// Art

	// Create the root object in Redis
	fmt.Println("Creating initial values...")
	for i, note := range notes {
		note.SubKey = subKey
		fmt.Println(i, note.Key(), part.AddNote(note))
	}

	fmt.Printf("Got %d Notes and %d Voices\n", len(part.Notes), len(part.Voices))
	time.Sleep(100 * time.Millisecond)
}
