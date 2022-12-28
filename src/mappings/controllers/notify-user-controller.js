'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.NOTIFY_USER_CONTROLLER
);

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllNotifyUser = (req, res, next) => {
  loggerFactory.info(`Function getAllNotifyUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAll
  );
  loggerFactory.info(`Function getAllNotifyUser Controller has been end`);
};

/**
 * @description Get Detail Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getDetailNotifyUser = (req, res, next) => {
  loggerFactory.info(`Function getDetailNotifyUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetId
  );
  loggerFactory.info(`Function getDetailNotifyUser Controller has been end`);
};

/**
 * @description Get All Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllDataNotifyUser = (req, res, next) => {
  loggerFactory.info(`Function getAllDataNotifyUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAllData
  );
  loggerFactory.info(`Function getAllDataNotifyUser Controller has been end`);
};

/**
 * @description Get All Unread Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllUnReadNotifyUser = (req, res, next) => {
  loggerFactory.info(
    `Function getAllUnReadNotifyUser Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAllUnRead
  );
  loggerFactory.info(`Function getAllUnReadNotifyUser Controller has been end`);
};

/**
 * @description Read One Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const readNotifyUser = (req, res, next) => {
  loggerFactory.info(`Function readNotifyUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserRead
  );
  loggerFactory.info(`Function readNotifyUser Controller has been end`);
};

/**
 * @description Read All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const readAllNotifyUser = (req, res, next) => {
  loggerFactory.info(`Function readAllNotifyUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserReadAll
  );
  loggerFactory.info(`Function readAllNotifyUser Controller has been end`);
};

const notifyUserController = {
  getAllNotifyUser,
  getDetailNotifyUser,
  getAllDataNotifyUser,
  getAllUnReadNotifyUser,
  readNotifyUser,
  readAllNotifyUser
};

export default notifyUserController;
