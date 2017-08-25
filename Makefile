SHELL := /bin/bash
PWD := $(shell pwd)
GOPATH := $(PWD)/gopath
GOCODE := $(GOPATH)/src/github.com/CharlesHolbrow


DEFAULT: image prod-client dev-client

$(GOCODE)/synk:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/synk

$(GOCODE)/pagen:
	cd $(GOCODE) && git clone git@github.com:CharlesHolbrow/pagen

$(GOPATH)/bin/eternal-http:
	cd $<; GOPATH=$(GOPATH); go get && go install

$(GOPATH)/bin/pagen:
	cd $<; GOPATH=$(GOPATH); go get && go install

gotools: $(GOCODE)/synk $(GOCODE)/pagen $(GOPATH)/bin/pagen

golibs:
	go get github.com/rafaeljusto/redigomock
	go get github.com/garyburd/redigo/redis
	go get github.com/gorilla/websocket

prod-client:
	cd eternal-js && npm run build:prod && cd .. && rm -f public && ln -s eternal-js/production public

dev-client:
	cd eternal-js && npm run build:dev && cd .. && rm -f public && ln -s eternal-js/development public

# Generate 'fullchain.pem' and 'privkey.pem' symlinks in:
# certificates/config/live/eternal.media.mit.edu/
#
# The symlinks will point to files in:
# certificates/config/archive/eternal.media.mit.edu/
#
# To access this certificate from a container. I would recomend mounting the
# certificates/config directory.
prod-certificate:
	sudo certbot \
	--config-dir=certificates/config \
	--work-dir=certificates/work \
	--logs-dir=certificates/logs \
	certonly \
	--email=CharlesHolbrow@gmail.com --eff-email \
	--standalone -d eternal.media.mit.edu \
	--n

# Consider using this chrome feature in development
# chrome://flags/#allow-insecure-localhost
dev-certificate:
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certificates/privkey.pem -out certificates/fullchain.pem

image: Dockerfile docker-compose.yml prod-client $(GOCODE)/synk
	docker-compose build

.PHONY: image dev-client prod-client dev-certificate gotools golibs

debug:
	@echo $(PWD)
	@echo $(GOCODE)
