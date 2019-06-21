FROM node:carbon
WORKDIR /usr/src/space
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]