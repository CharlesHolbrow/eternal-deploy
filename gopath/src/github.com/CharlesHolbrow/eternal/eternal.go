package eternal

import "errors"

// Voice represents a sequence of notes
//@PA:v
type Voice struct {
	ID      string    `json:"id"`
	SubKey  string    `json:"subKey"`
	Notes   [16]int   `json:"notes"`
	Lengths [16]int   `json:"lengths"`
	Links   [3]string `json:"links"`
	diff    voiceDiff
}

// AddLink to the note. Return an error if there is no more space
func (n *Voice) AddLink(newKey string) error {
	for _, key := range n.Links {
		if key == newKey {
			return errors.New("Cannot add link to note - it already has that link")
		}
	}

	for i, key := range n.Links {
		if key == "" {
			n.SetLinksElement(i, newKey)
			return nil
		}
	}
	return errors.New("Voice does not have room for more links")
}

// RemoveLink removes the first instance of a link
func (n *Voice) RemoveLink(removeKey string) error {
	for i, key := range n.Links {
		if key == removeKey {
			n.SetLinksElement(i, "")
			return nil
		}
	}
	return errors.New("Could not reamove link: link not found")
}
