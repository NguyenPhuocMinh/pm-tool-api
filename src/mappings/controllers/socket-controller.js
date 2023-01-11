'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.TEST_CONTROLLER
);

/**
 * @description Get Socket Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getSocket = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getSocket Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeSocket,
    constants.actions.MsgActionGetSocket
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getSocket Controller has been end'
  });
};

/**
 * @description Post Socket Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const postSocket = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function postSocket Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeSocket,
    constants.actions.MsgActionPostSocket
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function postSocket Controller has been end'
  });
};

const socketController = {
  getSocket,
  postSocket
};

export default socketController;
