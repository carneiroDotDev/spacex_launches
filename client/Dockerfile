#build with
# docker build -t client:latest .
#run with
# docker run -p 7777:7777 client:latest
#notes for debugging:
# docker build --no-cache -t client:latest .
# docker run -it client:latest sh
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .es* tsconfig.json .prettierrc ./

RUN npm install

#copy app
COPY . ./

EXPOSE 7777
CMD [ "npm", "start" ]