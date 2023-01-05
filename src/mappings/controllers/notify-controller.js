'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.NOTIFY_CONTROLLER
);

/**
 * @description Get Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getNotifyById = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getNotifyById Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getNotifyById Controller has been end'
  });
};

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllNotifyOfUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyOfUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyOfUserGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyOfUser Controller has been end'
  });
};

/**
 * @description Notify Change Password Temporary Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notifyChangePasswordTemporary = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function notifyChangePasswordTemporary Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyChangePasswordTemporary
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function notifyChangePasswordTemporary Controller has been end'
  });
};

const notifyController = {
  getAllNotifyOfUser,
  getNotifyById,
  notifyChangePasswordTemporary
};

export default notifyController;
