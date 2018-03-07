SHELL := /bin/bash

# Go files, inclusing those in /vendor
SOURCES = $(shell find . -name \*.go)
# Go 
DEPS := Gopkg.lock Gopkg.toml

# image repository 
REPO := gcr.io/pixelaether/
# The name of the current diretory
NAME := $(shell basename $$PWD)
# Image tag
TAG := $(REPO)$(NAME):$(shell git describe)

.PHONY: image push

# Abort if there we are not on a tagged commit
image: build/$(NAME)
	(git describe || (echo "Fatal. no annotated tags" && exit 1 ))  2>/dev/null && \
	docker build -t $(NAME):$$(git describe) ./build

push: image
	if [[ `git status --porcelain` ]]; \
	then echo "working directory not clean"; \
	else \
	echo push $(TAG); \
	fi

	# if [[ ]] gcloud docker -- push &(TAG)

build/$(NAME): $(DEPS) $(SOURCES) build
	dep ensure && \
	env GOOS=linux GOARCH=amd64 go build -o build/$(NAME)

debug:
	@echo "REPO: $(REPO)"
	@echo "NAME: $(NAME)"
	@echo "TAG:  $(TAG)"
