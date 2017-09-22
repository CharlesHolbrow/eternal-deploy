SHELL := /bin/bash

HOST?=eternal.media.mit.edu
HTTPS_REDIRECT?=$(HOST)

PWD := $(shell pwd)
GOPATH := $(PWD)/gopath
GOCODE := $(GOPATH)/src/github.com/CharlesHolbrow
PUBLIC_DIR := ./public
ETERNAL_SOURCES := $(shell find $(GOCODE)/eternal $(GOCODE)/eternal-http $(GOCODE)/synk $(GOCODE)/eternal-action -name \*.go)


# This is designed to run in production.
#
# This does not generate a tls certificate.
nginx/nginx.conf: nginx/nginx.template.conf
	env HTTPS_REDIRECT=${HTTPS_REDIRECT} \
	envsubst '$$HTTPS_REDIRECT' < nginx/nginx.template.conf > nginx/nginx.conf

nginx-install: nginx/nginx.conf
	sudo cp nginx/nginx.conf /etc/nginx/ && sudo nginx -s reload

# The prod-client and dev-client targets fully remove the public dir, and re-
# copy the contents over.
prod-client:
	cd eternal-js && npm run build:prod && cd .. && rm -rf $(PUBLIC_DIR) && cp -R eternal-js/production $(PUBLIC_DIR)

dev-client:
	cd eternal-js && npm run build:dev && cd .. && rm -rf $(PUBLIC_DIR) && cp -R eternal-js/development $(PUBLIC_DIR)

# Services!
services: /etc/systemd/system/synk-ws.service /etc/systemd/system/synk-sim.service

/etc/systemd/system/%.service: systemd/%.service
	sudo cp $< '$(@D)' && \
	sudo systemctl daemon-reload && \
	sudo systemctl enable '$(@F)' && \
	sudo systemctl reload '$(@F)'

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
# nginx must be running or this will not work
prod-certificate: certificates certbot webroot
	echo; echo "Production Certificate for $(HOST)"; \
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
	sudo nginx -s reload

# Consider using this chrome feature in development
# chrome://flags/#allow-insecure-localhost
dev-certificate: certificates
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certificates/privkey.pem -out certificates/fullchain.pem

$(GOCODE)/synk:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/synk

$(GOCODE)/pagen:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/pagen

$(GOPATH)/bin/pagen: $(GOCODE)/pagen
	cd $<; GOPATH=$(GOPATH); go get && go install

$(GOPATH)/bin/eternal-http: $(GOCODE)/eternal-http $(GOCODE)/eternal $(ETERNAL_SOURCES)
	cd $<; GOPATH=$(GOPATH); go get && go install

gotools: $(GOCODE)/synk $(GOCODE)/pagen $(GOPATH)/bin/pagen

golibs: $(GOCODE)/eternal $(GOCODE)/eternal-http $(GOCODE)/synk $(GOPATH)/bin/eternal-http

eternal-http: $(GOPATH)/bin/eternal-http

certificates:
	mkdir -p certificates

certbot:
	mkdir -p certbot

webroot:
	mkdir -p webroot

.PHONY: image dev-client prod-client dev-certificate gotools golibs eternal-http nginx-conf services

debug:
	@echo $(PWD)
	@echo $(GOCODE)
	@echo $(HOST)
	@echo $(HTTPS_REDIRECT)
