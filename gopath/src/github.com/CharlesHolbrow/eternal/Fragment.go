package eternal

import (
	"log"

	"github.com/CharlesHolbrow/synk"
)

// Fragment stores the contents of a subscription key
type Fragment struct {
	Notes    map[string]*Note
	sKey     string
	synkConn *synk.RedisConnection
}

// NewFragment - create a Fragment
func NewFragment(key string, synkConn *synk.RedisConnection) *Fragment {
	notes := &Fragment{
		Notes:    make(map[string]*Note),
		synkConn: synkConn,
		sKey:     key,
	}

	conn := synkConn.Pool.Get()
	defer conn.Close()

	synk.LoadObjects(notes, conn, []string{key})

	return notes
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
	default:
		log.Printf("LoadObject got unhandled type: %T", obj)
	}
}

// AddNote to the Part. The note's subscription key will be set
func (frag *Fragment) AddNote(n *Note) {
	n.SetSubKey(frag.sKey)  // Ensure SubKey
	frag.synkConn.Create(n) // Ensures ID
	frag.Notes[n.Key()] = n
}
