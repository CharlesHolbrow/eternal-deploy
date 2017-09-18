package eternal

import (
	"log"

	"github.com/CharlesHolbrow/synk"
)

type Client struct {
}

func (cc Client) OnConnect(client *synk.Client) {
	log.Println("Custom Client Connected:", client.ID)
}

func (cc Client) OnMessage(client *synk.Client, method string, data []byte) {
	log.Println("Custom Client Message:", method)
}

func (cc Client) OnSubscribe(client *synk.Client, subKeys []string, objs []synk.Object) {
	log.Printf("Custom Client: Subscription add(%d) objs(%d)", len(subKeys), len(objs))
}
