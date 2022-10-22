'use strict';

import express from 'express';
import morgan from 'morgan';
import configs from './configs';

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({ msg: `Hello eks with ec2 with version build ${configs.version}` });
});

app.get('/devops', (req, res) => {
  res.send({ msg: 'Hello devops' });
});

const APP_PORT = configs.port;
const APP_HOST = configs.host;

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App listening on port http://${APP_HOST}:${APP_PORT}`);
});
