# syntax=docker/dockerfile:1

FROM node:20.11-alpine3.18
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 4000
CMD yarn dev
