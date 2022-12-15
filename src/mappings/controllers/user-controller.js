'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
const getUser = (req, res, next) => {
  loggerFactory.info(`Function getUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserGet
  );
  loggerFactory.info(`Function getUser Controller has been end`);
};

/**
 * @description Update User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUser = (req, res, next) => {
  loggerFactory.info(`Function updateUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserUpdate
  );
  loggerFactory.info(`Function updateUser Controller has been end`);
};

/**
 * @description Delete User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUser = (req, res, next) => {
  loggerFactory.info(`Function deleteUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserDelete
  );
  loggerFactory.info(`Function deleteUser Controller has been end`);
};

/**
 * @description Change Pass User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const changePassUser = (req, res, next) => {
  loggerFactory.info(`Function changePassUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserChangePass
  );
  loggerFactory.info(`Function changePassUser Controller has been end`);
};

/**
 * @description Set Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const setPassUser = (req, res, next) => {
  loggerFactory.info(`Function setPassUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserSetPass
  );
  loggerFactory.info(`Function setPassUser Controller has been end`);
};

/**
 * @description Reset Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const resetPassUser = (req, res, next) => {
  loggerFactory.info(`Function resetPassUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserResetPass
  );
  loggerFactory.info(`Function resetPassUser Controller has been end`);
};

/**
 * @description Add Role To User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRolesToUser = (req, res, next) => {
  loggerFactory.info(`Function addRolesToUser Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserAddRoles
  );
  loggerFactory.info(`Function addRolesToUser Controller has been end`);
};

const userController = {
  getAllUser,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  changePassUser,
  setPassUser,
  resetPassUser,
  addRolesToUser
};

export default userController;
