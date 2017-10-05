# Eternal

Generate some visuals, with text and musical staff notation. This is a small example of how we
could use `synk` and `synk-js` to create real-time musical experiences.

## Running In Development

It is simple to run locally without `https://` and `nginx`.

1. Make sure redis is running
1. `cd` into the root of this repository -- this ensures that eternal-http knows where to find static files
1. `go install` and run `eternal-http` and `eternal-action`. This can be simplified by exporting the `$GOPATH` var with the included script `$ source GOPATH.sh`

`eternal-http` serves on port `127.0.0.1:5000`

## Deploying To Production

### Requirements

- install git, make, go, nginx, redis-server, certbot

### Install

It is expected that this be installed at `/synk`

`git clone git@github.com:CharlesHolbrow/eternal.git /synk`

1. `go install` `eternal-action` and `eternal-http`.
    - see `source gopath.sh` for assistance
1. setup iptables for port forwarding:
    - port 3000 for http
    - port 3001 for https

Below are useful `make` targets for deploying. These are approximately the order
to install with.

- `make dev-certificate` create temporary certificate so nginx doesn't complain
- `make nginx-install` or `make nginx-install HTTPS_REDIRECT=your.host.name` To create the nginx `.conf` file, move it into place, and restart nginx.
- `make prod-certificate` create production certificates for nginx
- `make services` this will enable and restart the systemd services

The following lines can be added to `/etc/rc.local`:

``` bash
# Charles - redis recommends I disable THP
echo never > /sys/kernel/mm/transparent_hugepage/enabled
# Charles - another change for redis
sysctl -w net.core.somaxconn=65535
# Forwarding for aether in production
iptables -t nat -A PREROUTING -i ens32 -p tcp --dport 80 -j REDIRECT --to-port 3000
iptables -t nat -A PREROUTING -i ens32 -p tcp --dport 443 -j REDIRECT --to-port 3001
```

## Building eternal-js

Requirements:

- npm (used to fetch dependencies)

`$ make dev-client` or `$ make prod-client` will invoke the aether-js makefile,
and copy the result to the aether-http public folder.
