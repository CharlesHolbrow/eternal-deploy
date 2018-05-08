package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/url"
	"path"
	"strings"

	"github.com/CharlesHolbrow/eternal"
)

var thirds []string
var usedPositions = make(map[string]bool)

func usePosition(x, y int) (ok bool) {
	name := fmt.Sprintf("%d,%d", x, y)

	if usedPositions[name] {
		return false
	}

	usedPositions[name] = true
	return true
}

// find and use the first available y for a given int
func useFirstYForX(x, yCheck int) (y int) {
	for {
		if usePosition(x, yCheck) {
			return yCheck
		}
		yCheck++
	}
}

// get all the audio files in public/dir, where `dir` is the argument
func findFilenames(dir string) []string {
	files, err := ioutil.ReadDir(path.Join("./public", dir))
	if err != nil {
		log.Fatal(err)
	}
	output := make([]string, 0, len(files))
	for _, file := range files {
		cellPath := path.Join(dir, file.Name())
		// BUG(charles): this is case sensitive. It probably should not be.
		if strings.HasSuffix(cellPath, ".wav") || strings.HasSuffix(cellPath, ".mp3") {
			u := url.URL{Path: cellPath}
			output = append(output, u.String())
		}
	}
	return output
}

// The filename format for the guitar 10ths is "A2-min-001.wav". Split the
// filename into three separate parts, removing the directory if needed.
func parseThirds(filepath string) (a, b, c string) {
	_, filename := path.Split(filepath)
	dotPosition := strings.LastIndex(filename, ".")
	noExtension := filename[:dotPosition]

	parts := strings.Split(noExtension, "-")
	if len(parts) >= 1 {
		a = parts[0]
	}
	if len(parts) >= 2 {
		b = parts[1]
	}
	if len(parts) >= 3 {
		c = parts[2]
	}
	return
}

// scientific pitch notation:
// c4 = 60
// c3 = 48, d3 = 50, e3 = 52, f3 = 53, g3 = 55, a3 = 57, b3 = 49
// c2 = 36, d2 = 38, e2 = 40, f2 = 41, g2 = 43, a2 = 45, b2 = 47
func sciPitchToXPosAndMidiNumber(pitch string) (x int, note int) {
	switch strings.ToLower(pitch) {
	case "a2":
		x = 0
		note = 45
	case "b2":
		x = 1
		note = 47
	case "c3":
		x = 2
		note = 48
	case "d3":
		x = 3
		note = 50
	case "e3":
		x = 4
		note = 52
	case "fs3":
		x = 5
		note = 54
	case "g3":
		x = 6
		note = 55
	case "a3":
		x = 7
		note = 57
	default:
		x = -2
		note = -1
	}
	return x, note
}

func cellsThirds() []*eternal.Cell {
	paths := findFilenames("sound/g-3rd-mp3")
	result := make([]*eternal.Cell, 0, len(paths))
	for _, fn := range paths {
		p, _, _ := parseThirds(fn)

		x, midiNote := sciPitchToXPosAndMidiNumber(p)
		y := useFirstYForX(x, 0)
		// hue is brittle, because it depends on x, y starting from 0
		hue := (float32(x) * 0.13) + (float32(y) * .001)

		cell := &eternal.Cell{
			X:         x,
			Y:         y,
			AudioPath: fn,
			Hue:       hue,
			Class:     "g-3rd",
			MidiNote:  midiNote,
		}
		usePosition(cell.X, cell.Y)
		result = append(result, cell)
	}

	return result
}
