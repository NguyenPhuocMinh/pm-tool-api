'use strict';

import express from 'express';
import configs from './configs';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' });
});

app.get('/devops', (req, res) => {
  res.send({ msg: 'Hello devops' });
});

const APP_PORT = configs.port;
const APP_HOST = configs.host;

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App listening on port http://${APP_HOST}:${APP_PORT}`);
});
