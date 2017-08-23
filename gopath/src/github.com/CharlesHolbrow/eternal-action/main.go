package main

import (
	"fmt"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
)

func main() {
	synkConn := synk.NewConnection(":6379")
	NewNote(synkConn)
}

func NewNote(synkConn *synk.RedisConnection) {
	n := eternal.Note{}

	id, err := synkConn.GetID(n.TypeKey())
	if err != nil {
		fmt.Println("Error getting ID:", err)
		return
	}

	n.SetID(id)
	n.SetSubKey("eternal:main")

	msg := synk.NewObj{Object: &n}

	rConn := synkConn.Pool.Get()
	synk.HandleMessage(msg, rConn)
	rConn.Close()
}
