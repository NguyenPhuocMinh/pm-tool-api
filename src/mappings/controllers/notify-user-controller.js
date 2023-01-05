'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
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
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyUser Controller has been end'
  });
};

/**
 * @description Get Detail Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getDetailNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getDetailNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetId
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getDetailNotifyUser Controller has been end'
  });
};

/**
 * @description Get All Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllDataNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllDataNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAllData
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllDataNotifyUser Controller has been end'
  });
};

/**
 * @description Get All Unread Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllUnReadNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUnReadNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAllUnRead
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUnReadNotifyUser Controller has been end'
  });
};

/**
 * @description Read One Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const readNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function readNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserRead
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function readNotifyUser Controller has been end'
  });
};

/**
 * @description Read All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const readAllNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function readAllNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserReadAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function readAllNotifyUser Controller has been end'
  });
};

/**
 * @description Trash Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const trashNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function trashNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserTrash
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function trashNotifyUser Controller has been end'
  });
};

/**
 * @description Trash All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const trashAllNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function trashAllNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserTrashAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function trashAllNotifyUser Controller has been end'
  });
};

/**
 * @description Trash All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllDataTrashNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllDataTrashNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserGetAllDataTrash
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllDataTrashNotifyUser Controller has been end'
  });
};

/**
 * @description Roll Back Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const rollBackDataTrashNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function rollBackDataTrashNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserRollBackDataTrash
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function rollBackDataTrashNotifyUser Controller has been end'
  });
};

/**
 * @description Roll Back Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const rollBackAllDataTrashNotifyUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function rollBackAllDataTrashNotifyUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyUser,
    constants.actions.MsgActionNotifyUserRollBackAllDataTrash
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function rollBackAllDataTrashNotifyUser Controller has been end'
  });
};

const notifyUserController = {
  getAllNotifyUser,
  getDetailNotifyUser,
  getAllDataNotifyUser,
  getAllUnReadNotifyUser,
  readNotifyUser,
  readAllNotifyUser,
  trashNotifyUser,
  trashAllNotifyUser,
  getAllDataTrashNotifyUser,
  rollBackDataTrashNotifyUser,
  rollBackAllDataTrashNotifyUser
};

export default notifyUserController;
