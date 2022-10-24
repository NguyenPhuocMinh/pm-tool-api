'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import loggerMiddleware from './core/middlewares/logger-middleware';
import initRouters from './src/routers';

import configs from './configs';
import constants from './core/constants';
import logUtils from './core/utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_SERVER
);

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan(loggerMiddleware));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(initRouters);

const APP_PORT = configs.port;
const APP_HOST = configs.host;

app.listen(APP_PORT, APP_HOST, () => {
  loggerFactory.http(`The server is running on`, {
    args: `[http://${APP_HOST}:${APP_PORT}]`
  });
});
