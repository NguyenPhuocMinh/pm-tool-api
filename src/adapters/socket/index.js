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
        origin: options.allowList,
        credentials: true,
        preflightContinue: true
      },
      allowRequest: (req, callback) => {
        loggerFactory.debug('Socket io allowed request', {
          args: {
            domain: req.headers.origin
          }
        });
        const isDomainAllowed =
          options.allowList.indexOf(req.headers.origin) !== -1;
        callback(null, isDomainAllowed);
      },
      allowUpgrades: true,
      allowEIO3: true
    });

    io.on('connection', (socket) => {
      loggerFactory.debug('Socket io has been connection', {
        args: {
          socketID: socket.id
        }
      });

      socket.on('connect_error', (err) => {
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
