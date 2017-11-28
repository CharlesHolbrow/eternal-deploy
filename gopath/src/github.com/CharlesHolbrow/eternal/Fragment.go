package eternal

import (
	"github.com/CharlesHolbrow/synk"
)

// Fragment stores the contents of a subscription key
type Fragment struct {
	Notes    map[string]*Note
	sKey1    string
	sKey2    string
	synkConn *synk.Synk
	Mutator  synk.Mutator
}

// NewFragment - create a Fragment
func NewFragment(k1, k2 string, synkConn *synk.Synk) *Fragment {
	mSynk := &synk.MongoSynk{
		Coll:    synkConn.Mongo.Copy().DB("synk").C("objects"),
		Creator: ConstructContainer,
		RConn:   synkConn.Pool.Get(), // BUG(charles): this connection is never closed
	}

	notes := &Fragment{
		Notes:    make(map[string]*Note),
		synkConn: synkConn,
		sKey1:    k1,
		sKey2:    k2,
		Mutator:  mSynk,
	}

	objects, err := mSynk.Load([]string{k1, k2})
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
	// Ensure SubKey
	if n.GetSubKey() == "" {
		n.SetSubKey(frag.sKey1)
	}

	frag.Mutator.Create(n) // Ensures ID
	frag.Notes[n.TagGetID()] = n
}

func (frag *Fragment) K1() string {
	return frag.sKey1
}
func (frag *Fragment) K2() string {
	return frag.sKey2
}
