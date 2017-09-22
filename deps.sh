#!/bin/sh

# This is intended to be run as root.

apt-get update && apt-get install -y redis-server nginx
