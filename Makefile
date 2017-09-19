SHELL := /bin/bash

HOST?=eternal.media.mit.edu

PWD := $(shell pwd)
GOPATH := $(PWD)/gopath
GOCODE := $(GOPATH)/src/github.com/CharlesHolbrow
PUBLIC_DIR := ./public
ETERNAL_SOURCES := $(shell find $(GOCODE)/eternal $(GOCODE)/eternal-http $(GOCODE)/synk $(GOCODE)/eternal-action -name \*.go)

# The default target builds all the images that will be used by `docker-compose up`
# This is designed to run in production.
#
# This does not generate a tls certificate.
images: Dockerfile_main Dockerfile_synk Dockerfile_action golibs docker-compose.yml eternal-http-linux eternal-action-linux
	docker-compose build

# The prod-client and dev-client targets fully remove the public dir, and re-
# copy the contents over.
prod-client:
	cd eternal-js && npm run build:prod && cd .. && rm -rf $(PUBLIC_DIR) && cp -R eternal-js/production $(PUBLIC_DIR)

dev-client:
	cd eternal-js && npm run build:dev && cd .. && rm -rf $(PUBLIC_DIR) && cp -R eternal-js/development $(PUBLIC_DIR)

# Generate 'fullchain.pem' and 'privkey.pem' symlinks in:
# certificates/config/live/eternal.media.mit.edu/
#
# The symlinks will point to files in:
# certificates/config/archive/eternal.media.mit.edu/
#
# setting all three of the dir options allows us to run certbot not as root
# --config-dir --work-dir --logs-dir
#
# --test-cert can be used to check what happens. Fake certs will be downloaded,
# but they will not be symlinked in the live directory.
#
# This target is NOT intended to be run with sudo. Sudo causes it to run
# incorrectly.
#
# the docker nginx container must be running or this will not work
prod-certificate: certificates certbot webroot
	echo; echo "Production Certificate for $(HOST)"; echo \
	certbot certonly \
	--config-dir=certbot/config \
	--work-dir=certbot/work \
	--logs-dir=certbot/logs \
	--email=CharlesHolbrow@gmail.com --eff-email \
	--webroot -d $(HOST) \
	--webroot-path=./webroot \
	--agree-tos \
	-n && \
	cp certbot/config/live/$(HOST)/*.pem certificates && \
	docker-compose exec main nginx -s reload

# Consider using this chrome feature in development
# chrome://flags/#allow-insecure-localhost
dev-certificate: certificates
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certificates/privkey.pem -out certificates/fullchain.pem

$(GOCODE)/synk:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/synk

$(GOCODE)/pagen:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/pagen

$(GOPATH)/bin/pagen:
	cd $<; GOPATH=$(GOPATH); go get && go install

$(GOPATH)/bin/eternal-http: $(GOCODE)/eternal-http $(GOCODE)/eternal $(ETERNAL_SOURCES)
	cd $<; GOPATH=$(GOPATH); go get && go install

gotools: $(GOCODE)/synk $(GOCODE)/pagen $(GOPATH)/bin/pagen

golibs: $(GOCODE)/eternal $(GOCODE)/eternal-http $(GOCODE)/synk $(GOPATH)/bin/pagen $(GOPATH)/bin/eternal-http

eternal-http: $(GOPATH)/bin/eternal-http

eternal-http-linux: $(ETERNAL_SOURCES)
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o $@ github.com/CharlesHolbrow/eternal-http

eternal-action-linux: $(ETERNAL_SOURCES)
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o $@ github.com/CharlesHolbrow/eternal-action

certificates:
	mkdir -p certificates

certbot:
	mkdir -p certbot

webroot:
	mkdir -p webroot

.PHONY: image dev-client prod-client dev-certificate gotools golibs eternal-http

debug:
	@echo $(PWD)
	@echo $(GOCODE)
