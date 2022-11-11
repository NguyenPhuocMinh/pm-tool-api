'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.USER_CONTROLLER
);

/**
 * @description Get All User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllUser = (req, res, next) => {
  loggerFactory.info(`Function getAllUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserGetAll
  );
  loggerFactory.info(`Function getAllUser Controller has been end`);
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUser = (req, res, next) => {
  loggerFactory.info(`Function createUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserCreate
  );
  loggerFactory.info(`Function createUser Controller has been end`);
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUserByID = (req, res, next) => {
  loggerFactory.info(`Function getUserByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserGetID
  );
  loggerFactory.info(`Function getUserByID Controller has been end`);
};

/**
 * @description Update User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const editUserByID = (req, res, next) => {
  loggerFactory.info(`Function editUserByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserEdit
  );
  loggerFactory.info(`Function editUserByID Controller has been end`);
};

/**
 * @description Delete User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUserByID = (req, res, next) => {
  loggerFactory.info(`Function deleteUserByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserEdit
  );
  loggerFactory.info(`Function deleteUserByID Controller has been end`);
};

/**
 * @description Change Pass User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const changePasswordUserByID = (req, res, next) => {
  loggerFactory.info(
    `Function changePasswordUserByID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserChangePass
  );
  loggerFactory.info(`Function changePasswordUserByID Controller has been end`);
};

/**
 * @description Add Role To User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRolesToUserByUserID = (req, res, next) => {
  loggerFactory.info(
    `Function addRolesToUserByUserID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserAddRoles
  );
  loggerFactory.info(`Function addRolesToUserByUserID Controller has been end`);
};

/**
 * @description Set Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const setPasswordByUserID = (req, res, next) => {
  loggerFactory.info(`Function setPasswordByUserID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserSetPass
  );
  loggerFactory.info(`Function setPasswordByUserID Controller has been end`);
};

const userController = {
  getAllUser,
  createUser,
  getUserByID,
  editUserByID,
  deleteUserByID,
  changePasswordUserByID,
  addRolesToUserByUserID,
  setPasswordByUserID
};

export default userController;
