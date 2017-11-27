package eternal

import (
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

// ConstructContainer creates a container for a eternal synk Object
func ConstructContainer(typeKey string) synk.Object {
	switch typeKey {
	case "n":
		return &Note{}
	}
	return nil
}
