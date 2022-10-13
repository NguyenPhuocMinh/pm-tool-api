FROM node:14-alpine

# Create directory containing source code
WORKDIR /usr/src/app
# Coppy to folder create
COPY package*.json ./
# Run install dependencies
RUN npm install

COPY . .

CMD [ "npm", "start-esm" ]