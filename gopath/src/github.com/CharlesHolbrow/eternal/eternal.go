package eternal

import (
	"encoding/json"
	"errors"
	"fmt"

	"github.com/CharlesHolbrow/synk"
)

// Note is a minimal example of a synk.Object. Note that we use pagen to
// generate the required methods.
//@PA:n
type Note struct {
	ID     string `json:"id"`
	SubKey string `json:"subKey"`
	Text   string `json:"string"`
	diff   noteDiff
}

// Voice represents a sequence of notes
//@PA:v
type Voice struct {
	ID      string  `json:"id"`
	SubKey  string  `json:"subKey"`
	Notes   [16]int `json:"notes"`
	Lengths [16]int `json:"lengths"`
	diff    voiceDiff
}

// BuildObject creates synk Objects for the eternal app
func BuildObject(typeKey string, data []byte) (synk.Object, error) {
	var result synk.Object
	var err error

	switch typeKey {
	case "n":
		note := &Note{}
		err = json.Unmarshal(data, note)
		return note, err
	case "v":
		voice := &Voice{}
		err = json.Unmarshal(data, voice)
		return voice, err
	}
	txt := fmt.Sprintf("eternal.BuildObject: unsupported typeKey '%s'", typeKey)
	return result, errors.New(txt)
}
