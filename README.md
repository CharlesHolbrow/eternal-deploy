# Eternal

This is a minimal example for running `synk` and `synk-js` in development and
production.

## Running In Development

It is simple to run locally without `https://` and `nginx`.

1. Make sure 'redis' and 'mongodb' are running
1. Run `./gopath.sh` from the repository root
1. for `eternal-ws` and `eternal-action`, do the following:
    - cd into the correct dir
    - `$ dep ensure && go install`
1. cd into eternal-static
1. `$ make prod` or `$ make dev`
1. cd into docker (so that there is a `public/` dir in working directory)
1. run `$ eternal-ws`
1. in another tab run `$ eternal-action`

## How to sable transparent huge pages

In production, consider these:

The following lines can be added to `/etc/rc.local`:

``` bash
# Charles - redis recommends I disable THP
echo never > /sys/kernel/mm/transparent_hugepage/enabled
# Charles - another change for redis
sysctl -w net.core.somaxconn=65535
```