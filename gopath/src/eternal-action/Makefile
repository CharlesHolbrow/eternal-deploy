# This makefile includes targets for compiling an amd64 executable from go, 
# creating a docker image, and pushing that docker image to a docker repository.
#
# You should not need to edit this file before copying it to a new directory for
# use in another project. The new project will need a `build/` direcotory with a
# dedicated `Dockerfile`.

SHELL := /bin/bash

# Image repository (inc. trailing slash)
REPO := gcr.io/pixelaether/
# The name of the current diretory. This is also the implied name of the
# executable.
NAME := $(shell basename $$PWD)
# Branch name
BRANCH := $(shell git describe)
# Docker image Image tag
TAG := $(REPO)$(NAME):$(BRANCH)

# Go files, inclusing those in /vendor
SOURCES = $(shell find . -name \*.go)
# We will depend on Gopkg files when building the executable, so that
DEPS := Gopkg.lock Gopkg.toml

.PHONY: image push

# Abort if there are no taged commits.
image: build/$(NAME)
	(git describe || (echo "Fatal. no annotated tags" && exit 1 ))  2>/dev/null && \
	docker build -t $(TAG) ./build
	@echo "Branch:   $(BRANCH)"
	@echo "Building: $(TAG)"

push: image
	if [[ `git status --porcelain` ]]; \
then echo "working directory not clean"; \
else gcloud docker -- push $(TAG); fi;

# This is the go executable.
build/$(NAME): $(DEPS) $(SOURCES)
	dep ensure && \
	env GOOS=linux GOARCH=amd64 go build -o build/$(NAME)

debug:
	@echo "REPO: $(REPO)"
	@echo "NAME: $(NAME)"
	@echo "TAG:  $(TAG)"
