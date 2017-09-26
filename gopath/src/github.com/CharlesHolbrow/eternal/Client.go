package eternal

import (
	"encoding/json"
	"log"
	"time"

	"github.com/CharlesHolbrow/synk"
)

// Client implements custom handlers
type Client struct {
}

// OnConnect is called when client connects via WebSocket
func (cc Client) OnConnect(client *synk.Client) {
	log.Println("Custom Client Connected:", client.ID)
}

// OnMessage is called when the client sends a message
func (cc Client) OnMessage(client *synk.Client, method string, data []byte) {
	log.Println("Custom Client Message:", method)
	if method == "addNote" {
		anr := AddNoteRequest{}
		if err := json.Unmarshal(data, &anr); err == nil {
			anr.Time = time.Now()
			log.Printf("Got message: %v\n", anr)
		} else {
			log.Println("Error handling addNoteRequest:", err.Error())
		}

	}
}

// OnSubscribe is called with the client changes their subscription
func (cc Client) OnSubscribe(client *synk.Client, subKeys []string, objs []synk.Object) {
	log.Printf("Custom Client: Subscription add(%d) objs(%d)", len(subKeys), len(objs))
}

//AddNoteRequest represents a request from the client to add a note
type AddNoteRequest struct {
	Text   string    `json:"text"`
	Attrib string    `json:"attrib"`
	Time   time.Time `json:",omit"`
}
