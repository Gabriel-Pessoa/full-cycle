# syntax=docker/dockerfile:1

FROM golang:1.20-alpine

# Set destination for COPY
WORKDIR /usr/src/app

COPY . . 

# Build binary
RUN GOPATH= go build -v -o /usr/local/bin/app ./cmd/main.go

# Run
CMD ["app"]
