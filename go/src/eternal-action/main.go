package main

import (
	"encoding/json"
	"fmt"
	"image"
	"log"
	"math/rand"
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

	node := synk.NewNode()
	node.RegisterClientConstructor(eternal.ConstructClient)
	node.RegisterContainerConstructor(eternal.ConstructContainer)

	mutator := node.CreateMutator()
	fragment := eternal.NewFragment("snd:a", image.Rect(-10, -10, 11, 11), mutator)
	fragment.RemoveAllNotes()
	conn := synk.DialRedis()

	// Make sure there is at least one Cell
	if len(fragment.Cells) > 5 {
		for _, cell := range fragment.Cells {
			fragment.RemoveCell(cell)
		}
	}
	for _, cell := range cells() {
		fragment.AddCell(cell)
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

	ticker := time.NewTicker(time.Millisecond * 4500)

	for {
		select {
		case msg := <-fromRedis:
			switch v := msg.(type) {
			case redis.Message:
				event := &eternal.NoteEvent{}
				if err := json.Unmarshal(v.Data, event); err == nil {
					fmt.Println("Recived:", event.String())
					note := &eternal.Note{
						Number:   event.N,
						Velocity: event.V,
					}
					if event.On {
						fragment.AddNote(note)
					} else {
						fragment.RemoveNote(note)
					}
				} else {
					fmt.Printf("Got Bad NoteEvent message from client: %s\n", v.Data)
				}
			case redis.Subscription:
				// Redis is confirming our subscription v.Channel, v.Kind, v.Count
			case error:
				log.Println("eternal-action: Subscription receive error:", v)
				return
			}
		case <-ticker.C:
			for repeat := 0; repeat < 5; repeat++ {
				n := rand.Intn(len(fragment.Cells))
				var randomCell *eternal.Cell
				i := 0
				for _, cell := range fragment.Cells {
					if i <= n {
						randomCell = cell
						break
					}
					i++
				}
				// randomCell.SetHue(rand.Float32())
				if rand.Intn(2) == 0 {
					randomCell.SetY(randomCell.GetY() + rand.Intn(3) - 1)
				} else {
					randomCell.SetX(randomCell.GetX() + rand.Intn(3) - 1)
				}
				if err := mutator.Modify(randomCell); err != nil {
					log.Println("error mutating cell:", randomCell.AudioPath, err.Error())
				} else {
					log.Println("mutated:", randomCell.AudioPath)
				}
			}
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
