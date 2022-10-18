FROM node:lts-alpine3.15

# Create directory containing source code
WORKDIR /usr/src/app
# Coppy to folder create
COPY package*.json ./
# Run install dependencies
RUN npm install

ENV APP_PORT=8080
ENV APP_HOST=localhost

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start-esm" ]