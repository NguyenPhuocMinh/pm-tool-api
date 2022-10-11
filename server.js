'use strict';

import express from 'express';
import configs from './configs';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' });
});

const APP_PORT = configs.port;

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
