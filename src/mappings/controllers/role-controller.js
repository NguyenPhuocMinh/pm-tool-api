'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
const getRole = (req, res, next) => {
  loggerFactory.info(`Function getRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGet
  );
  loggerFactory.info(`Function getRole Controller has been end`);
};

/**
 * @description Edit Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateRole = (req, res, next) => {
  loggerFactory.info(`Function updateRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleUpdate
  );
  loggerFactory.info(`Function updateRole Controller has been end`);
};

/**
 * @description Delete Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteRole = (req, res, next) => {
  loggerFactory.info(`Function deleteRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleDelete
  );
  loggerFactory.info(`Function deleteRole Controller has been end`);
};

/**
 * @description Get User In Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUsersInRole = (req, res, next) => {
  loggerFactory.info(`Function getUsersInRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGetUsers
  );
  loggerFactory.info(`Function getUsersInRole Controller has been end`);
};

/**
 * @description Get Permission In Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getPermissionsInRole = (req, res, next) => {
  loggerFactory.info(`Function getPermissionsInRole Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeRole,
    constants.actions.MsgActionRoleGetPermissions
  );
  loggerFactory.info(`Function getPermissionsInRole Controller has been end`);
};

const roleController = {
  getAllRole,
  createRole,
  getRole,
  updateRole,
  deleteRole,
  getUsersInRole,
  getPermissionsInRole
};

export default roleController;
