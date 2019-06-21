FROM node:carbon

WORKDIR /usr/src/week-11-day-4

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]