'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
  loggerFactory.info(`Function getNotifyById Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyGet
  );
  loggerFactory.info(`Function getNotifyById Controller has been end`);
};

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllNotifyOfUser = (req, res, next) => {
  loggerFactory.info(`Function getAllNotifyOfUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyOfUserGetAll
  );
  loggerFactory.info(`Function getAllNotifyOfUser Controller has been end`);
};

/**
 * @description Notify Change Password Temporary Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notifyChangePasswordTemporary = (req, res, next) => {
  loggerFactory.info(
    `Function notifyChangePasswordTemporary Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyChangePasswordTemporary
  );
  loggerFactory.info(
    `Function notifyChangePasswordTemporary Controller has been end`
  );
};

/**
 * @description Notify Update Read Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notifyUpdateRead = (req, res, next) => {
  loggerFactory.info(`Function notifyUpdateRead Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotify,
    constants.actions.MsgActionNotifyUpdateRead
  );
  loggerFactory.info(`Function notifyUpdateRead Controller has been end`);
};

const notifyController = {
  getAllNotifyOfUser,
  getNotifyById,
  notifyChangePasswordTemporary,
  notifyUpdateRead
};

export default notifyController;
