package eternal

import (
	"github.com/CharlesHolbrow/synk"
)

// Fragment stores the contents of a subscription key
type Fragment struct {
	Notes    map[string]*Note
	sKey     string
	synkConn *synk.Synk
	Mutator  synk.Mutator
}

// NewFragment - create a Fragment
func NewFragment(key string, synkConn *synk.Synk) *Fragment {
	mSynk := &synk.MongoSynk{
		Coll:    synkConn.Mongo.Copy().DB("synk").C("objects"),
		Creator: ConstructContainer,
		RConn:   synkConn.Pool.Get(), // BUG(charles): this connection is never closed
	}

	notes := &Fragment{
		Notes:    make(map[string]*Note),
		synkConn: synkConn,
		sKey:     key,
		Mutator:  mSynk,
	}

	objects, err := mSynk.Load([]string{key})
	if err != nil {
		panic("Error initializing eternal Fragment: " + err.Error())
	}
	for _, obj := range objects {
		if obj, ok := obj.(*Note); ok {
			notes.Notes[obj.TagGetID()] = obj
		}
	}

	return notes
}

// AddNote to the Part. The note's subscription key will be set
func (frag *Fragment) AddNote(n *Note) {
	n.SetSubKey(frag.sKey) // Ensure SubKey
	frag.Mutator.Create(n) // Ensures ID
	frag.Notes[n.Key()] = n
}
