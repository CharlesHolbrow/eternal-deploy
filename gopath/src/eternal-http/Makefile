SOURCES = $(shell find . -name \*.go)
DEPS := Gopkg.lock Gopkg.toml

# We will name a bunch of things after the directory
NAME := $(shell basename $$PWD)

# Abort if there we are not on a tagged commit
docker:
	(git describe || (echo "Fatal. no annotated tags" && exit 1 ))  2>/dev/null && \
	docker build -t $(NAME):$$(git describe) build

build/$(NAME): $(DEPS) $(SOURCES) build
	dep ensure && \
	env GOOS=linux GOARCH=amd64 go build -o build/$(NAME)

build:
	mkdir -p build

debug:
	@echo DEPS: $(DEPS)
	@echo DIR:  $(DIR)