package eternal

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"

	"github.com/CharlesHolbrow/synk"
)

// Fragment stores the contents of a subscription key
type Fragment struct {
	Notes    map[string]*Note
	Voices   map[string]*Voice
	synkConn *synk.Synk
}

// NewFragment - create a Fragment
func NewFragment(keys []string, synkConn *synk.Synk) *Fragment {
	notes := &Fragment{
		Notes:    make(map[string]*Note),
		Voices:   make(map[string]*Voice),
		synkConn: synkConn,
	}

	conn := synkConn.Pool.Get()
	defer conn.Close()

	synk.LoadObjects(notes, conn, keys)

	return notes
}

// HasNote checks if Note is in the Fragment
func (frag *Fragment) HasNote(n *Note) bool {
	fragNote, ok := frag.Notes[n.Key()]
	return ok && fragNote == n
}

// Clear deletes all content from the fragment.
func (frag *Fragment) Clear() {
	for key, voice := range frag.Voices {
		frag.synkConn.Delete(voice)
		delete(frag.Voices, key)
	}
	for key, note := range frag.Notes {
		frag.synkConn.Delete(note)
		delete(frag.Notes, key)
	}
}

// AddNote to the Fragment.
// - The note will be given an ID if it does not have one
func (frag *Fragment) AddNote(n *Note) error {
	// Ensure that the new Note has a subscription key and ID
	n.SetID(synk.NewID().String())

	if n.GetSubKey() == "" {
		return fmt.Errorf("Note has no subscription key %v", n)
	}

	// verify that the note isn't already in the fragment
	if _, ok := frag.Notes[n.Key()]; ok {
		return fmt.Errorf("Note Already in Fragment: %s-%s", n.Key(), n.Text)
	}

	frag.Notes[n.Key()] = n

	frag.synkConn.Create(n)
	return nil
}

// AddVoice to the Fragment.
// - The voice will be given an ID if it does not have one
func (frag *Fragment) AddVoice(v *Voice) error {
	// Ensure that the new Note has a subscription key and ID
	v.SetID(synk.NewID().String())

	if v.GetSubKey() == "" {
		return fmt.Errorf("Voice has no subscription key %v", v)
	}

	// verify that the note isn't already in the fragment
	if _, ok := frag.Voices[v.Key()]; ok {
		return fmt.Errorf("Voice Already in Fragment: %s", v.Key())
	}

	frag.Voices[v.Key()] = v

	frag.synkConn.Create(v)
	return nil
}

// SetParent sets a Note's parent.
// Both child and parent must be in the fragment, or this is an error
func (frag *Fragment) SetParent(child *Note, parent *Note) error {

	if !frag.HasNote(child) || !frag.HasNote(parent) {
		return errors.New("Cannot SetParent: Both notes must be in the fragment")
	}

	if err := parent.AddLink(child.Key()); err != nil {
		return err
	}

	frag.synkConn.Modify(parent)
	return nil
}

// LoadObject satisfies the ObjectLoader interface, which allows us to pass a
// Part into synk.LoadObjects()
func (frag *Fragment) LoadObject(typeKey string, bytes []byte) {
	objInterface, err := BuildObject(typeKey, bytes)
	if err != nil {
		log.Println("Error Loading Object:", err.Error())
	}

	switch obj := objInterface.(type) {
	case *Note:
		frag.Notes[obj.Key()] = obj
	case *Voice:
		frag.Voices[obj.Key()] = obj
	default:
		log.Printf("LoadObject got unsupported type: %T", obj)
	}
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

type Parent interface {
	GetSubKey() string
}
