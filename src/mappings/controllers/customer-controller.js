'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.CUSTOMER_CONTROLLER
);

/**
 * @description Register Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const registerCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function registerCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerRegister
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function registerCustomer Controller has been end'
  });
};

/**
 * @description Login Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const loginCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function loginCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerLogin
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function loginCustomer Controller has been end'
  });
};

/**
 * @description Get All Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllCustomer Controller has been end'
  });
};

/**
 * @description Create Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createCustomer Controller has been end'
  });
};

/**
 * @description Get Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getCustomer Controller has been end'
  });
};

/**
 * @description Edit Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateCustomer Controller has been end'
  });
};

/**
 * @description Delete Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteCustomer = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteCustomer Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCustomer,
    constants.actions.MsgActionCustomerDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteCustomer Controller has been end'
  });
};

const customerController = {
  registerCustomer,
  loginCustomer,
  getAllCustomer,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
};

export default customerController;
