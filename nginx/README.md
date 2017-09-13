# Nginx Configuration

This is modified mealgamation of the two configuration files that are in the
nginx:alpine docker image.

They were extracted with `docker cp` as shown below:

```
docker cp tmp-nginx-container:/etc/nginx/nginx.conf /host/path/nginx.conf
```

Note that the main `nginx.conf` file imports another nginx config file.

This technique was pulled from this [handy guide](https://docs.docker.com/samples/library/nginx/#using-environment-variables-in-nginx-configuration) which includes many other useful tips, for example how to use environment variables in a config file.
