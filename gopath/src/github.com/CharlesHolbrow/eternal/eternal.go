package eternal

import "github.com/CharlesHolbrow/synk"

// ConstructContainer creates a container for a eternal synk Object
func ConstructContainer(typeKey string) synk.Object {
	switch typeKey {
	case "n":
		return &Note{}
	}
	return nil
}
