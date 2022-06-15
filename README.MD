## Express API + React client for fetching and displaying data from the Space X API

### Run server with:
```bash
  cd server
  docker build -t server:latest .
  docker run -p 8888:8888 -t server:latest
```

### Run client with:
```bash
  cd client
  docker build -t client:latest .
  docker run -p 7777:7777 -t client:latest
```
