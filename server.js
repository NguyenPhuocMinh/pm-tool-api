'use strict';

import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import sessionParser from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

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
// import socketAdapter from '@adapters/socket';

import { Server } from 'socket.io';

// middleware
import {
  loggerMiddleware,
  routerMiddleware,
  errorMiddleware
} from '@middleware';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_NAME_SERVER
);

const APP_PORT = profiles.APP_PORT;
const APP_HOST = profiles.APP_HOST;
const APP_DOCS_PATH = profiles.APP_DOCS_PATH;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['https://pm-tool-ui.netlify.app', 'http://localhost:3500'],
    credentials: true,
    preflightContinue: true
  }
});

const main = async () => {
  app.use(cors(options.corsOptions));
  app.use(sessionParser(options.sessionOptions));
  app.use(cookieParser());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.use(morgan(loggerMiddleware));

  /**
   * Docs
   */
  const swaggerYaml = YAML.load(
    path.resolve(__dirname, '../src/docs', 'swagger.yaml')
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

  const onlineUsers = [];

  /**
   * Socket.IO
   */
  // await socketAdapter.Init(server);
  io.on('connection', (socket) => {
    loggerFactory.debug('Socket io has been connection', {
      args: {
        socketID: socket.id
      }
    });

    const token = socket.handshake.auth.token;

    if (token !== '123') {
      socket.disconnect();
    }

    const { handshake } = socket;

    socket.on('socket_user_login', (data) => {
      const ipAddress = handshake.address;
      const userAgent = handshake.headers['user-agent'];

      socket.join('pm-tool-room');

      if (data && !onlineUsers.some((user) => user.id === data?.id)) {
        onlineUsers.unshift({
          socketID: socket.id,
          id: data?.id,
          fullName: data?.fullName,
          userAgent,
          ipAddress
        });
      }
      // send all active users to new user
      io.emit('socket_user_online', onlineUsers);
    });
  });

  server.listen(APP_PORT, APP_HOST, () => {
    loggerFactory.http(`The server is running on`, {
      args: `[http://${APP_HOST}:${APP_PORT}]`
    });
  });
};

main().catch((err) => {
  loggerFactory.error(`The server has been error`, {
    args: utils.formatErrorMsg(err)
  });
  process.exit(1);
});
