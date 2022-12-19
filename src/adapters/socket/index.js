'use strict';

import { Server } from 'socket.io';

// conf
// import { profiles } from '@conf';
import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// workers
import workers from '@workers';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ADAPTERS.SOCKET_ADAPTER
);

const SOCKET_USER_LOGIN = constants.SOCKET_EVENTS.SOCKET_USER_LOGIN;
const SOCKET_USER_LOGOUT = constants.SOCKET_EVENTS.SOCKET_USER_LOGOUT;

const Init = async (httpServer) => {
  try {
    const io = new Server(httpServer, {
      cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true
      }
    });

    io.on('connection', (socket) => {
      loggerFactory.info('Socket io has been connection', {
        args: {
          socketID: socket.id
        }
      });

      socket.on(SOCKET_USER_LOGIN, async (data) => {
        await workers.handlerSocketWorkerUserLogin(data, { socket, io });
      });

      socket.on(SOCKET_USER_LOGOUT, async (data) => {
        await workers.handlerSocketWorkerUserLogout(data, { socket, io });
      });

      socket.on('disconnect', (reason) => {
        loggerFactory.warn('User has disconnect', {
          args: {
            reason
          }
        });
        workers.handlerWorkerSocketUserDisconnect();
      });
    });
  } catch (err) {
    loggerFactory.error('Connect socket has error', {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

const socketAdapter = {
  Init
};

export default socketAdapter;
