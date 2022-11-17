'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

// conf
import options from '@conf/options';
import profiles from '@conf/profiles';

import constants from '@constants';

// core
import logger from '@core/logger';
import dbManager from '@core/database';
import { formatUtils } from '@core/utils';

// mappings
import routers from '@mappings/routers';

// middleware
import loggerMiddleware from '@middleware/logger-middleware';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_SERVER
);

const app = express();

const APP_PORT = profiles.APP_PORT;
const APP_HOST = profiles.APP_HOST;
const APP_DOCS_PATH = profiles.APP_DOCS_PATH;
const APP_SECRET_KEY = profiles.APP_SECRET_KEY;

const server = async () => {
  app.use(cors(options.corsOptions));
  app.use(helmet());
  app.use(cookieParser(APP_SECRET_KEY));
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.use(morgan(loggerMiddleware));

  /**
   * Docs
   */
  const swaggerYaml = YAML.load(
    path.resolve(__dirname, '../public/docs', 'swagger.yaml')
  );
  app.use(APP_DOCS_PATH, swaggerUI.serve, swaggerUI.setup(swaggerYaml));

  loggerFactory.info(`The documents is running on`, {
    args: `[${APP_DOCS_PATH}]`
  });

  /**
   * Routers
   */
  app.use(routers);

  /**
   * Not found
   */
  app.use('*', (req, res, next) => {
    loggerFactory.warn(`Router not found with path`, {
      args: `${req.baseUrl}`
    });
    return res.status(404).send({
      error: 'Not Found Router'
    });
  });

  /**
   * Database
   */
  await dbManager.Init();

  app.listen(APP_PORT, APP_HOST, () => {
    loggerFactory.http(`The server is running on`, {
      args: `[http://${APP_HOST}:${APP_PORT}]`
    });
  });
};

server().catch((err) => {
  loggerFactory.error(`The server has been error`, {
    args: formatUtils.formatErrorMessage(err)
  });
});
