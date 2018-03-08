SHELL := /bin/bash

# Go files, inclusing those in /vendor
SOURCES = $(shell find . -name \*.go)
# Go 
DEPS := Gopkg.lock Gopkg.toml

# Image repository (inc. trailing slash)
REPO := gcr.io/pixelaether/
# The name of the current diretory
NAME := $(shell basename $$PWD)
# Branch name
BRANCH := $(shell git describe)
# Image tag
TAG := $(REPO)$(NAME):$(BRANCH)

.PHONY: image push

# Abort if there we are not on a tagged commit
image: build/$(NAME)
	(git describe || (echo "Fatal. no annotated tags" && exit 1 ))  2>/dev/null && \
	docker build -t $(TAG) ./build
	@echo "Branch:   $(BRANCH)"
	@echo "Building: $(TAG)"

push: image
	if [[ `git status --porcelain` ]]; \
then echo "working directory not clean"; \
else gcloud docker -- push $(TAG); fi;


build/$(NAME): $(DEPS) $(SOURCES) build
	dep ensure && \
	env GOOS=linux GOARCH=amd64 go build -o build/$(NAME)

debug:
	@echo "REPO: $(REPO)"
	@echo "NAME: $(NAME)"
	@echo "TAG:  $(TAG)"
