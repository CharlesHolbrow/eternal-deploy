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
	synk.Tag `bson:",inline"`
	ID       string `json:"id"`
	SubKey   string `json:"subKey"`
	Number   int    `json:"number"`
	Velocity int    `json:"velocity"`
	diff     noteDiff
}

// BuildObject creates synk Objects for the eternal app
//BUG(charles): this should be removed after the refactor
func BuildObject(typeKey string, data []byte) (synk.Object, error) {
	var result synk.Object
	var err error

	switch typeKey {
	case "n":
		note := &Note{}
		err = json.Unmarshal(data, note)
		return note, err
	}
	txt := fmt.Sprintf("eternal.BuildObject: unsupported typeKey '%s'", typeKey)
	return result, errors.New(txt)
}

func ConstructContainer(typeKey string) synk.MongoObject {
	switch typeKey {
	case "n":
		return &Note{}
	}
	return nil
}
