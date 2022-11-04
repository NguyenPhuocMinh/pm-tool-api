'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.PERMISSION_CONTROLLER
);

/**
 * @description Get List Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const GetList = (req, res, next) => {
  loggerFactory.info(`Function GetList Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGetList
  );
  loggerFactory.info(`Function GetList Controller has been end`);
};

/**
 * @description Create Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const Create = (req, res, next) => {
  loggerFactory.info(`Function Create Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionCreate
  );
  loggerFactory.info(`Function Create Controller has been end`);
};

/**
 * @description GetID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const GetID = (req, res, next) => {
  loggerFactory.info(`Function GetID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionGetID
  );
  loggerFactory.info(`Function GetID Controller has been end`);
};

/**
 * @description Edit Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const Edit = (req, res, next) => {
  loggerFactory.info(`Function GetID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionEdit
  );
  loggerFactory.info(`Function Edit Controller has been end`);
};

/**
 * @description Edit Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const Delete = (req, res, next) => {
  loggerFactory.info(`Function Delete Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypePermission,
    constants.actions.MsgActionPermissionDelete
  );
  loggerFactory.info(`Function Delete Controller has been end`);
};

const PermissionController = {
  GetList,
  Create,
  GetID,
  Edit,
  Delete
};

export default PermissionController;
