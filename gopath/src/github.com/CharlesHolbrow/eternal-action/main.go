package main

import (
	"fmt"
	"log"
	"time"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

func main() {
	synkConn := synk.NewConnection(":6379")
	NewNote(synkConn)
	NewNote(synkConn)

	time.Sleep(50 * time.Millisecond)

	rConn := synkConn.Pool.Get()
	objs, err := synk.RequestObjects(rConn, []string{"eternal:main"}, eternal.BuildObject)

	if err != nil {
		log.Panicln("Error getting objects", err)
	}

	if len(objs) > 1 {
		obj := objs[0]
		synk.Delete(obj, rConn)
		objs = objs[1:]
	}

	for i := 0; i < 999; i++ {
		obj := objs[i%len(objs)]
		if n, ok := obj.(*eternal.Note); ok {
			fmt.Printf("Num: %d\tVel: %d\tSubKey: %s\n", n.GetNumber(), n.GetVelocity(), n.GetSubKey())
			n.SetNumber((n.GetNumber() + 1) % 127)
			synk.HandleMessage(synk.ModObj{Object: n}, rConn)
		}
		time.Sleep(time.Second)
	}
}

// NewNote creates and 'synks' a new Note object
func NewNote(synkConn *synk.RedisConnection) {
	n := &eternal.Note{SubKey: "eternal:main"}
	synkConn.Create(n)
}
