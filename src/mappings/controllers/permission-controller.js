'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.PERMISSION_CONTROLLER
);

/**
 * @description Get All Permission Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllPermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllPermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllPermission Controller has been end'
  });
};

/**
 * @description Create Permission Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createPermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createPermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createPermission Controller has been end'
  });
};

/**
 * @description Get Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getPermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getPermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getPermission Controller has been end'
  });
};

/**
 * @description Edit Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updatePermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updatePermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updatePermission Controller has been end'
  });
};

/**
 * @description Delete Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deletePermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deletePermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deletePermission Controller has been end'
  });
};

/**
 * @description Add Roles To Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRolesToPermission = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addRolesToPermission Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionAddRoles
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addRolesToPermission Controller has been end'
  });
};

const permissionController = {
  getAllPermission,
  createPermission,
  getPermission,
  updatePermission,
  deletePermission,
  addRolesToPermission
};

export default permissionController;
