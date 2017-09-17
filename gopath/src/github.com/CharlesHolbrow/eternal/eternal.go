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
	ID       string
	SubKey   string
	Number   int
	Velocity int
	diff     noteDiff
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
	}
	txt := fmt.Sprintf("eternal.BuildObject: unsupported typeKey '%s'", typeKey)
	return result, errors.New(txt)
}
