'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
 * @description Sign Out Controller
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
 * @description Who Am I Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const whoami = (req, res, next) => {
  loggerFactory.info(`Function whoami Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionWhoAmI
  );
  loggerFactory.info(`Function whoami Controller has been end`);
};

/**
 * @description Refresh Token Controller
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

/**
 * @description Revoke Token Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const revokeToken = (req, res, next) => {
  loggerFactory.info(`Function refreshToken Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeAuth,
    constants.actions.MsgActionRevokeToken
  );
  loggerFactory.info(`Function refreshToken Controller has been end`);
};

const authController = {
  signIn,
  signOut,
  whoami,
  refreshToken,
  revokeToken
};

export default authController;
