'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import configs from './configs';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '50mb' }));

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
