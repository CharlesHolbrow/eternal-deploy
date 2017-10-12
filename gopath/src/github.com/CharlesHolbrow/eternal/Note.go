package eternal

import "errors"

// Note wraps a text message, and outgoing links to other text messages.
//@PA:n
type Note struct {
	ID     string `json:"id"`
	SubKey string `json:"subKey"`
	Text   string `json:"string"`
	// The Keys of paths forward.
	Links  [3]string `json:"links"`
	Attrib *string   `json:"attrib"`
	diff   noteDiff
}

// AddLink to the note. Return an error if there is no more space
func (n *Note) AddLink(newKey string) error {
	for i := range n.Links {
		if n.GetLinksElement(i) == newKey {
			return errors.New("Cannot add link to note - it already has that link")
		}
	}

	for i := range n.Links {
		if n.GetLinksElement(i) == "" {
			n.SetLinksElement(i, newKey)
			return nil
		}
	}
	return errors.New("Note does not have room for more links")
}

// RemoveLink removes the first instance of a link
func (n *Note) RemoveLink(removeKey string) error {
	for i := range n.Links {
		if n.GetLinksElement(i) == removeKey {
			n.SetLinksElement(i, "")
			return nil
		}
	}
	return errors.New("Could not reamove link: link not found")
}
