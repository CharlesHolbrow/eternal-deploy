# This makefile was modified. It does not attempt to compile go

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

.PHONY: image push prod dev

# Abort if there are no taged commits.
image:
	(git describe || (echo "Fatal. no annotated tags" && exit 1 ))  2>/dev/null && \
	docker build -t $(TAG) ./docker
	@echo "Branch:   $(BRANCH)"
	@echo "Building: $(TAG)"

push: image
	if [[ `git status --porcelain` ]]; \
then echo "working directory not clean"; \
else gcloud docker -- push $(TAG); fi;

force-push: image
	docker push $(TAG)

prod:
	npm run build:prod

dev:
	npm run build:dev

debug:
	@echo "REPO: $(REPO)"
	@echo "NAME: $(NAME)"
	@echo "TAG:  $(TAG)"
