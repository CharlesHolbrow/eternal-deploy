FROM golang:1.8

EXPOSE 3000 3001

COPY gopath/src src

RUN cd src/github.com/CharlesHolbrow/eternal-http && \
    go get && \
    useradd --shell /bin/bash chaz

USER chaz

CMD cd src/github.com/CharlesHolbrow/eternal-http; /go/bin/eternal-http
