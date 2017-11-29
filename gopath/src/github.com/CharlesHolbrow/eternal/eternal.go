package eternal

import (
	"github.com/CharlesHolbrow/synk"
)

// ConstructContainer creates a container for a eternal synk Object
func ConstructContainer(typeKey string) synk.Object {
	switch typeKey {
	case "n":
		return &Note{}
	}
	return nil
}

// The main purpose of this library is to export the two functions below.

// CreateMongoMutator is used in a Fragment to Load objects from a subscription
// key set, and then mutate the objects in that set.
func CreateMongoMutator(redisAddr string) synk.Mutator {
	mutator := &synk.MongoSynk{
		Coll:      synk.DialMongo().DB("synk").C("objects"),
		RedisPool: synk.DialRedis(redisAddr),
		Creator:   ConstructContainer,
	}
	return mutator
}

// CreateMongoLoader creates an initial Loader that can be Cloned. This is used
// By the web socket handler to load object that will be sent to clients.
func CreateMongoLoader(redisAddr string) synk.Loader {
	loader := &synk.MongoSynk{
		Coll:      synk.DialMongo().DB("synk").C("objects"),
		RedisPool: synk.DialRedis(redisAddr),
		Creator:   ConstructContainer,
	}
	return loader
}
