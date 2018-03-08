# To export GOPATH run:
# $ source gopath.sh

export GOPATH=$(pwd)/go
export PATH=$PATH:$GOPATH/bin

echo "export GOPATH=${GOPATH}"
echo "add to \$PATH: ${GOPATH}/bin"
