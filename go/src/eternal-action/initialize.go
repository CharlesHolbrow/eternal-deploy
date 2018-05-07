package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
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

func sciPitchToXPos(pitch string) (x int) {
	switch strings.ToLower(pitch) {
	case "a2":
		x = 0
	case "b2":
		x = 1
	case "c3":
		x = 2
	case "d3":
		x = 3
	case "e3":
		x = 4
	case "fs3":
		x = 5
	case "g3":
		x = 6
	case "a3":
		x = 7
	default:
		x = -2
	}
	return x
}

func cellsThirds() []*eternal.Cell {
	paths := findFilenames("sound/g-3rd")
	result := make([]*eternal.Cell, 0, len(paths))
	for _, fn := range paths {
		p, _, _ := parseThirds(fn)

		x := sciPitchToXPos(p)
		y := useFirstYForX(x, 0)
		// hue is brittle, because it depends on x, y starting from 0
		hue := (float32(x) * 0.1) + (float32(y) * .02)

		cell := &eternal.Cell{
			X:         x,
			Y:         y,
			AudioPath: fn,
			Hue:       hue,
			Class:     "g-3rd",
		}
		usePosition(cell.X, cell.Y)
		result = append(result, cell)
	}

	return result
}

func cells() []*eternal.Cell {

	guitarPaths := findFilenames("sound/g-3rd")
	lucernPaths := findFilenames("sound/l/selection/")

	getPosition := func() (x, y int) { // Is the spot available?
		for {
			x = rand.Intn(24) - 12
			y = rand.Intn(24) - 12

			ok := usePosition(x, y)
			if ok {
				return x, y
			}
		}
	}

	rand.Seed(4)

	mCells := make([]*eternal.Cell, len(guitarPaths))

	lCells := make([]*eternal.Cell, len(lucernPaths))
	for i, fn := range lucernPaths {
		x, y := getPosition()

		lCells[i] = &eternal.Cell{
			X:         x,
			Y:         y,
			AudioPath: fn,
			Hue:       rand.Float32(),
		}
	}
	// return append(mCells, lCells...)
	return mCells
}
