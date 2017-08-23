# To export GOPATH run:
# $ source gopath.sh

export GOPATH=$(pwd)/gopath
export PATH=$PATH:$GOPATH/bin

echo "export GOPATH=${GOPATH}"
echo "add to \$PATH: ${GOPATH}/bin"
