# stage 1 building
FROM node:alpine as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2 running
FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY --from=builder /usr/app/dist ./dist
COPY ormconfig.docker.js ./ormconfig.js
COPY .env .
EXPOSE 4000
CMD node dist/index.js