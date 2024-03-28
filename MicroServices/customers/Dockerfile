FROM node:16-alpine3.12
 
RUN npm install -g nodemon
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
COPY . .

CMD [ "npm", "start" ]