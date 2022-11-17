'use strict';

import baseController from './base-controller';

import constants from '@constants';
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
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
  loggerFactory.info(`Function signIn Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionSignIn
  );
  loggerFactory.info(`Function signIn Controller has been end`);
};

/**
 * @description Health Check Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const signOut = (req, res, next) => {
  loggerFactory.info(`Function signOut Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionSignOut
  );
  loggerFactory.info(`Function signOut Controller has been end`);
};

/**
 * @description Health Check Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const refreshToken = (req, res, next) => {
  loggerFactory.info(`Function refreshToken Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionRefreshToken
  );
  loggerFactory.info(`Function refreshToken Controller has been end`);
};

const authController = {
  signIn,
  signOut,
  refreshToken
};

export default authController;
