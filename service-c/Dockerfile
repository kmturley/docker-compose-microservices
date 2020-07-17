FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 8080
CMD [ "npm", "start"]
