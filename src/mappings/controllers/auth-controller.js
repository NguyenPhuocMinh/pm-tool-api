'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.AUTH_CONTROLLER
);

/**
 * @description Sign In Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const signIn = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function signIn Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionSignIn
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function signIn Controller has been end'
  });
};

/**
 * @description Sign Out Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const signOut = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function signOut Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionSignOut
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function signOut Controller has been end'
  });
};

/**
 * @description Who Am I Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const whoami = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function whoami Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionWhoAmI
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function whoami Controller has been end'
  });
};

/**
 * @description Refresh Token Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const refreshToken = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function refreshToken Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionRefreshToken
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function refreshToken Controller has been end'
  });
};

/**
 * @description Revoke Token Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const revokeToken = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function revokeToken Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionRevokeToken
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function revokeToken Controller has been end'
  });
};

const authController = {
  signIn,
  signOut,
  whoami,
  refreshToken,
  revokeToken
};

export default authController;
