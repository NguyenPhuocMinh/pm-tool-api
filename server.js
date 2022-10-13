'use strict';

import http from 'http';
import express from 'express';
import configs from './configs';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' });
});

const APP_PORT = configs.port;

const server = http.createServer(app);

server.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
