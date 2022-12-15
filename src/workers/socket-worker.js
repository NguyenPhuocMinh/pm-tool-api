'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_WORKER.SOCKET_WORKER
);

const SOCKET_ROOM = constants.SOCKET_EVENTS.SOCKET_ROOM;
const SOCKET_USER_ONLINE = constants.SOCKET_EVENTS.SOCKET_USER_ONLINE;

let onlineUsers = [];

export const handlerSocketWorkerUserLogin = async (data, { socket, io }) => {
  try {
    loggerFactory.warn('Function handlerSocketWorkerUserLogin has been start');

    const { handshake } = socket;
    const ipAddress = handshake.address;
    const userAgent = handshake.headers['user-agent'];

    socket.join(SOCKET_ROOM);

    if (!isEmpty(data) && !onlineUsers.some((user) => user.id === data?.id)) {
      onlineUsers.unshift({
        socketID: socket.id,
        id: data?.id,
        fullName: data?.fullName,
        userAgent,
        ipAddress
      });
    }
    // send all active users to new user
    io.emit(SOCKET_USER_ONLINE, onlineUsers);
    loggerFactory.warn('Function handlerSocketWorkerUserLogin has been end');
  } catch (err) {
    loggerFactory.error(
      `Function handlerSocketWorkerUserLogin has been error`,
      {
        err: utils.formatErrorMsg(err)
      }
    );
    throw err;
  }
};

export const handlerSocketWorkerUserLogout = async (data, { socket, io }) => {
  try {
    loggerFactory.warn('Function handlerSocketWorkerUserLogout has been start');

    socket.leave(SOCKET_ROOM);
    handlerWorkerSocketUserDisconnect(data?.id, io);
    loggerFactory.warn('Function handlerSocketWorkerUserLogout has been end');
  } catch (err) {
    loggerFactory.error(
      `Function handlerSocketWorkerUserLogout has been error`,
      {
        err: utils.formatErrorMsg(err)
      }
    );
    throw err;
  }
};

export const handlerWorkerSocketUserDisconnect = (id, io) => {
  onlineUsers = onlineUsers.filter((user) => user.id !== id);
  io?.emit(SOCKET_USER_ONLINE, onlineUsers);
};
