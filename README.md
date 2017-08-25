# Deploying Synk-Server

This repo in a minimal example of `sync` and `synk-js` in operation.

## Building eternal-js

Requirements:

- npm (used to fetch dependencies)

`$ make dev-client` or `$ make prod-client` will invoke the aether-js makefile,
and copy the result to the aether-http public folder.

## Eternal in production

### Requirements

- install docker, git, make
- install docker-compose (done separately in ubuntu)
- install certbot

To get a certificate the first time

`$ make prod-certificate`

The following lines were added to `/etc/rc.local`:

``` bash
# Charles - redis recommends I disable THP
echo never > /sys/kernel/mm/transparent_hugepage/enabled
# Charles - another change for redis
sysctl -w net.core.somaxconn=65535
# Forwarding for aether in production
iptables -t nat -A PREROUTING -i ens32 -p tcp --dport 80 -j REDIRECT --to-port 3000
iptables -t nat -A PREROUTING -i ens32 -p tcp --dport 443 -j REDIRECT --to-port 3001
```

The following is placed in /etc/systemd/system/aether.service

```
[Unit]
Description=Eternal Systemd
After=network.target docker.service
[Service]
Type=simple
WorkingDirectory=/aether-deploy
ExecStart=/usr/local/bin/docker-compose -f docker-compose.yml up
ExecStop=/usr/local/bin/docker-compose -f docker-compose.yml down
Restart=on-failure
RestartSec=30
User=charles
[Install]
WantedBy=multi-user.target
```

Then enable with

`$ systemctl enable aether`

### Run server

``` bash
$ make image
...
$ docker-compose up -d
```

## Note on building aether-http for development

It should be possible to build and run eternal-http with ssh locally. However,
this is not well tested. You can use `openssl` and `$ make dev-certificate` to
create a local certificate. The `AETHER_CERT_PATH` environment var then needs to
be set to the `certificates` directory.
