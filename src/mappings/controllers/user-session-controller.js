'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
  loggerFactory.info(
    `Function getUserTimelineSession Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionTimeline
  );
  loggerFactory.info(`Function getUserTimelineSession Controller has been end`);
};

/**
 * @description Create User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUserSession = (req, res, next) => {
  loggerFactory.info(`Function createUserSession Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionCreate
  );
  loggerFactory.info(`Function createUserSession Controller has been end`);
};

/**
 * @description Update User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUserSession = (req, res, next) => {
  loggerFactory.info(`Function updateUserSession Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionUpdate
  );
  loggerFactory.info(`Function updateUserSession Controller has been end`);
};

/**
 * @description Delete User Session By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUserSession = (req, res, next) => {
  loggerFactory.info(`Function deleteUserSession Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserSession,
    constants.actions.MsgActionUserSessionDelete
  );
  loggerFactory.info(`Function deleteUserSession Controller has been end`);
};

const userSessionController = {
  getUserTimelineSession,
  createUserSession,
  updateUserSession,
  deleteUserSession
};

export default userSessionController;
