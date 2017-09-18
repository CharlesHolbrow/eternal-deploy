package eternal

import (
	"log"

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
}

// OnSubscribe is called with the client changes their subscription
func (cc Client) OnSubscribe(client *synk.Client, subKeys []string, objs []synk.Object) {
	log.Printf("Custom Client: Subscription add(%d) objs(%d)", len(subKeys), len(objs))
}
