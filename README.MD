- Express API + React client for fetching and displaying data from the Space X api.

## Run server with:
  cd server
  docker build -t server:latest .
  docker run -p 8888:8888 server:latest

## Run client with:
  cd client
  docker build -t client:latest .
  docker run -p 7777:7777 client:latest
