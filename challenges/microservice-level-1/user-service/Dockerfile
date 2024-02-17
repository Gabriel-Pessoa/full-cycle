# syntax=docker/dockerfile:1

FROM node:18.16-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]
