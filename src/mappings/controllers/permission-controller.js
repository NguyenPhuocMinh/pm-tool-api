'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
  loggerFactory.info(`Function getAllPermission Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGetAll
  );
  loggerFactory.info(`Function getAllPermission Controller has been end`);
};

/**
 * @description Create Permission Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createPermission = (req, res, next) => {
  loggerFactory.info(`Function createPermission Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionCreate
  );
  loggerFactory.info(`Function createPermission Controller has been end`);
};

/**
 * @description Get Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getPermission = (req, res, next) => {
  loggerFactory.info(`Function getPermission Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGet
  );
  loggerFactory.info(`Function getPermission Controller has been end`);
};

/**
 * @description Edit Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updatePermission = (req, res, next) => {
  loggerFactory.info(`Function updatePermission Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionUpdate
  );
  loggerFactory.info(`Function updatePermission Controller has been end`);
};

/**
 * @description Delete Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deletePermission = (req, res, next) => {
  loggerFactory.info(`Function deletePermissionByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionDelete
  );
  loggerFactory.info(`Function deletePermissionByID Controller has been end`);
};

/**
 * @description Add Roles To Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRolesToPermissionByID = (req, res, next) => {
  loggerFactory.info(
    `Function addRolesToPermissionByID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionAddRoles
  );
  loggerFactory.info(
    `Function addRolesToPermissionByID Controller has been end`
  );
};

const permissionController = {
  getAllPermission,
  createPermission,
  getPermission,
  updatePermission,
  deletePermission,
  addRolesToPermissionByID
};

export default permissionController;
