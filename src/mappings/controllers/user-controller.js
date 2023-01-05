'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
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
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUser Controller has been end'
  });
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createUser Controller has been end'
  });
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getUser Controller has been end'
  });
};

/**
 * @description Update User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateUser Controller has been end'
  });
};

/**
 * @description Delete User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteUser Controller has been end'
  });
};

/**
 * @description Change Pass User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const changePassUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function changePassUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserChangePass
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function changePassUser Controller has been end'
  });
};

/**
 * @description Set Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const setPassUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function setPassUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserSetPass
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function setPassUser Controller has been end'
  });
};

/**
 * @description Reset Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const resetPassUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function resetPassUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserResetPass
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function resetPassUser Controller has been end'
  });
};

/**
 * @description Add Role To User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addRolesToUser = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addRolesToUser Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUser,
    constants.actions.MsgActionUserAddRoles
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addRolesToUser Controller has been end'
  });
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
