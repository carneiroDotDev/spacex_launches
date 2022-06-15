#build with
# docker build -t server:latest .
#run with
# docker run -p 8888:8888 -t server:latest
#notes for debugging:
# docker build --no-cache -t server:latest .
# docker run -it server:latest sh
FROM mhart/alpine-node:16.4.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json index.ts .es* tsconfig.json .prettierrc ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8888
CMD [ "npm", "start" ]