'use strict';

import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import sessionParser from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import favicon from 'serve-favicon';

// conf
import { options, profiles } from '@conf';
import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
import dbManager from '@core/database';
// routers
import routers from '@routers';
// adapters
import redisAdapter from '@adapters/redis';
import socketAdapter from '@adapters/socket';
import amqpAdapter from '@adapters/amqp';
import cronAdapter from '@adapters/cron';

// middleware
import {
  loggerMiddleware,
  routerMiddleware,
  errorMiddleware
} from '@middleware';

const logger = loggerManager(constants.APP_NAME, constants.STRUCT_NAME_SERVER);

const APP_PORT = profiles.APP_PORT;
const APP_HOST = profiles.APP_HOST;
const APP_DOCS_PATH = profiles.APP_DOCS_PATH;

const app = express();
const server = http.createServer(app);

const main = async () => {
  app.use(cors(options.corsOptions));
  app.use(sessionParser(options.sessionOptions));
  app.use(cookieParser());
  app.use(helmet());
  app.use(rateLimit(options.rateLimitOptions));
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.use(morgan(loggerMiddleware));
  app.use(favicon(path.resolve(__dirname, '../src/public', 'favicon.ico')));

  /**
   * Docs
   */
  const swaggerYaml = YAML.load(
    path.resolve(__dirname, '../src/docs', 'swagger.yaml')
  );
  app.use(APP_DOCS_PATH, swaggerUI.serve, swaggerUI.setup(swaggerYaml));

  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'The documents is running on path',
    args: APP_DOCS_PATH
  });

  /**
   * Routers
   */
  app.use(routers);

  /**
   * Router Not Found
   */
  app.use('*', routerMiddleware);

  /**
   * Error handler
   */
  app.use(errorMiddleware);

  /**
   * Database
   */
  await dbManager.Init();

  /**
   * Redis
   */
  await redisAdapter.Init();

  /**
   * Rabbit MQ
   */
  await amqpAdapter.Init();

  /**
   * Cron Job
   */
  await cronAdapter.Init();

  /**
   * Socket.IO
   */
  await socketAdapter.Init(server);

  server.listen(APP_PORT, APP_HOST, () => {
    const port = server.address().port;
    const host = server.address().address;
    logger.log({
      level: constants.LOG_LEVELS.HTTP,
      message: 'The server is running on',
      args: `[${host}:${port}]`
    });
  });
};

main().catch((err) => {
  logger.log({
    level: constants.LOG_LEVELS.ERROR,
    message: 'The server has been error',
    args: utils.parseError(err)
  });
});
