'use strict';

import { Server } from 'socket.io';

// conf
import { options } from '@conf';
import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// workers
import workers from '@workers';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ADAPTERS.SOCKET_ADAPTER
);

const SOCKET_USER_LOGIN = constants.SOCKET_EVENTS.SOCKET_USER_LOGIN;
const SOCKET_USER_LOGOUT = constants.SOCKET_EVENTS.SOCKET_USER_LOGOUT;

/**
 * @description Init SocketIO
 */
const Init = async (httpServer) => {
  try {
    const io = new Server(httpServer, {
      cors: {
        origin: options.allowList,
        methods: ['GET', 'POST'],
        credentials: true
      }
    });

    io.sockets.on('connection', (socket) => {
      logger.log({
        level: constants.LOG_LEVELS.DEBUG,
        message: 'Hello world im a hot socket',
        args: socket.id
      });
    });

    io.on('connection', (socket) => {
      logger.log({
        level: constants.LOG_LEVELS.DEBUG,
        message: 'Socket io has been connection',
        args: {
          socketID: socket.id
        }
      });

      socket.on('connect_error', (err) => {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: 'Socket io has been error',
          args: utils.parseError(err)
        });
        if (err && err.message === 'unauthorized event') {
          socket.disconnect();
        }
      });

      socket.on(SOCKET_USER_LOGIN, async (data) => {
        await workers.handlerSocketWorkerUserLogin(data, { socket, io });
      });

      socket.on(SOCKET_USER_LOGOUT, async (data) => {
        await workers.handlerSocketWorkerUserLogout(data, { socket, io });
      });

      socket.on('disconnect', (reason) => {
        logger.log({
          level: constants.LOG_LEVELS.WARN,
          message: 'Socket has disconnect',
          args: {
            reason
          }
        });
        workers.handlerWorkerSocketUserDisconnect();
      });
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Socket has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

const socketAdapter = {
  Init
};

export default socketAdapter;
