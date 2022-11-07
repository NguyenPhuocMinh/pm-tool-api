'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.ROLE_CONTROLLER
);

/**
 * @description Get All Role Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllRole = (req, res, next) => {
  loggerFactory.info(`Function getAllRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGetAll
  );
  loggerFactory.info(`Function getAllRole Controller has been end`);
};

/**
 * @description Create Role Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createRole = (req, res, next) => {
  loggerFactory.info(`Function createRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleCreate
  );
  loggerFactory.info(`Function createRole Controller has been end`);
};

/**
 * @description Get Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getRolByID = (req, res, next) => {
  loggerFactory.info(`Function getRolByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGetID
  );
  loggerFactory.info(`Function getRolByID Controller has been end`);
};

/**
 * @description Edit Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const editRoleByID = (req, res, next) => {
  loggerFactory.info(`Function editRoleByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleEdit
  );
  loggerFactory.info(`Function editRoleByID Controller has been end`);
};

/**
 * @description Delete Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteRoleByID = (req, res, next) => {
  loggerFactory.info(`Function deleteRoleByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleDelete
  );
  loggerFactory.info(`Function deleteRoleByID Controller has been end`);
};

/**
 * @description Get Permission In Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getPermissionsByRoleID = (req, res, next) => {
  loggerFactory.info(
    `Function getPermissionsByRoleID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGetPermissions
  );
  loggerFactory.info(`Function getPermissionsByRoleID Controller has been end`);
};

/**
 * @description Add Permission To Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addPermissionsToRoleByRoleID = (req, res, next) => {
  loggerFactory.info(
    `Function addPermissionsToRoleByRoleID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleAddPermissions
  );
  loggerFactory.info(
    `Function addPermissionsToRoleByRoleID Controller has been end`
  );
};

const roleController = {
  getAllRole,
  createRole,
  getRolByID,
  editRoleByID,
  deleteRoleByID,
  getPermissionsByRoleID,
  addPermissionsToRoleByRoleID
};

export default roleController;
