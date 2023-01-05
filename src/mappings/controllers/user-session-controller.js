'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.USER_SESSION_CONTROLLER
);

/**
 * @description Get All User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUserTimelineSession = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getUserTimelineSession Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionTimeline
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getUserTimelineSession Controller has been end'
  });
};

/**
 * @description Create User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUserSession = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createUserSession Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createUserSession Controller has been end'
  });
};

/**
 * @description Update User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUserSession = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateUserSession Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateUserSession Controller has been end'
  });
};

/**
 * @description Delete User Session By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUserSession = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteUserSession Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteUserSession Controller has been end'
  });
};

const userSessionController = {
  getUserTimelineSession,
  createUserSession,
  updateUserSession,
  deleteUserSession
};

export default userSessionController;
