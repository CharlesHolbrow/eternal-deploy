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
	sKey     string
	synkConn *synk.RedisConnection
}

// NewFragment - create a Fragment
func NewFragment(key string, synkConn *synk.RedisConnection) *Fragment {
	notes := &Fragment{
		Notes:    make(map[string]*Note),
		Voices:   make(map[string]*Voice),
		synkConn: synkConn,
		sKey:     key,
	}

	conn := synkConn.Pool.Get()
	defer conn.Close()

	synk.LoadObjects(notes, conn, []string{key})

	return notes
}

// HasNote checks if Note is in the Fragment
func (frag *Fragment) HasNote(n *Note) bool {
	fragNote, ok := frag.Notes[n.Key()]
	return ok && fragNote == n
}

// AddNote to the Fragment.
// - The note's subscription key will be set
// - The note will be given an ID if it does not have one
func (frag *Fragment) AddNote(n *Note) error {
	// Ensure that the new Note has a subscription key and ID
	n.SetID(synk.NewID().String())

	// verify that the note isn't already in the fragment
	if _, ok := frag.Notes[n.Key()]; ok {
		return fmt.Errorf("Note Already in Fragment: %s-%s", n.Key(), n.Text)
	}

	frag.Notes[n.Key()] = n

	n.SetSubKey(frag.sKey)
	frag.synkConn.Create(n)
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
