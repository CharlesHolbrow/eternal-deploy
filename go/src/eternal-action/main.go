package main

import (
	"encoding/json"
	"image"
	"log"
	"os"
	"time"

	"github.com/CharlesHolbrow/eternal"
	"github.com/CharlesHolbrow/synk"
	"github.com/garyburd/redigo/redis"
)

// By default, look for redis locally at ":6379". We may specify another host by
// setting the "SYNK_REDIS_HOST" environment variable.
var redisAddr = os.Getenv("SYNK_REDIS_HOST") + ":6379"

// SYNK_ENV should be "production" or an empty string. We may add additional
// environments in the future. For now, if this is an empty string, or if it is
// not set, assume development.
var env = os.Getenv("SYNK_ENV")

func main() {

	if env == "" {
		env = "development"
	}

	node := synk.NewNode()
	node.RegisterClientConstructor(eternal.ConstructClient)
	node.RegisterContainerConstructor(eternal.ConstructContainer)

	mutator := node.CreateMutator()
	fragment := eternal.NewFragment("snd:a", image.Rect(-10, -10, 11, 11), mutator)
	fragment.RemoveAllNotes()
	conn := synk.DialRedis()

	// In development, if there are only a few cells, clear them
	if env == "development" {
		if len(fragment.Cells) > 5 || env == "" {
			for _, cell := range fragment.Cells {
				fragment.RemoveCell(cell)
			}
		}
	}

	// Try to populate cells if there are none
	if len(fragment.Cells) == 0 {
		cells, err := getInitialCells()
		if err != nil {
			log.Panicln("Error trying to get initial Cells:", err.Error())
		}

		for _, cell := range cells {
			fragment.AddCell(cell)
		}
		if len(cells) > 0 {
			writeCellsJSON(cells)
		}
	}

	// Pump messages from redis to a channel
	rSubscription := redis.PubSubConn{Conn: conn}
	err := rSubscription.Subscribe("piano")
	if err != nil {
		log.Panicln("Error subscribing to piano")
	}
	fromRedis := make(chan interface{}, 10)
	go func() {
		for {
			fromRedis <- rSubscription.Receive()
		}
	}()

	ticker := time.NewTicker(time.Second * 15)

	for {
		select {
		case msg := <-fromRedis:
			switch v := msg.(type) {
			case redis.Message:
				event := &eternal.MoveCellEvent{}
				if err := json.Unmarshal(v.Data, event); err == nil {
					log.Println("Recived:", event.String())
					if cell, ok := fragment.Cells[event.ID]; ok {
						cell.SetX(event.X)
						cell.SetY(event.Y)
						mutator.Modify(cell)
					} else {
						log.Println("Failed to Unmarshall MoveCellEvent", err.Error())
					}
				} else {
					log.Printf("Got Bad MoveCellEvent message from client: %s\n", v.Data)
				}
			case redis.Subscription:
				// Redis is confirming our subscription v.Channel, v.Kind, v.Count
			case error:
				log.Println("eternal-action: Subscription receive error:", v)
				return
			}
		case <-ticker.C:
			// for repeat := 0; repeat < 5; repeat++ {
			// 	n := rand.Intn(len(fragment.Cells))
			// 	var randomCell *eternal.Cell
			// 	i := 0
			// 	for _, cell := range fragment.Cells {
			// 		if i <= n {
			// 			randomCell = cell
			// 			break
			// 		}
			// 		i++
			// 	}
			// }
		}
	}

	// for {
	// 	n := &eternal.Note{Number: 64, Velocity: 64}
	// 	fragment.AddNote(n)
	// 	time.Sleep(time.Second)
	// 	n2 := &eternal.Note{Number: 65, Velocity: 127}
	// 	fragment.AddNote(n2)
	// 	time.Sleep(time.Second)
	// 	fragment.RemoveAllNotes()
	// 	time.Sleep(time.Second)
	// }
}
