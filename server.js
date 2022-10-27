'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

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

const APP_PORT = configs.port;
const APP_HOST = configs.host;
const APP_MONGO_URI = configs.mongoURI;

const server = async () => {
  app.use(cors());
  app.use(helmet());
  app.use(morgan(loggerMiddleware));
  app.use(bodyParser.json({ limit: '50mb' }));

  /**
   * Routers
   */
  app.use(initRouters);

  /**
   * Database
   */
  await mongoose.connect(APP_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  loggerFactory.info(`The database is running on`, {
    args: `[${APP_MONGO_URI}]`
  });

  app.listen(APP_PORT, APP_HOST, () => {
    loggerFactory.http(`The server is running on`, {
      args: `[http://${APP_HOST}:${APP_PORT}]`
    });
  });
};

server().catch((err) => {
  console.error('🚀 ~ file: server.js ~ line 60 ~ err', err);
  loggerFactory.error(`The server has been error`, {
    args: {
      name: err.name,
      message: err.message
    }
  });
});
