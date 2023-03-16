'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.PRODUCT_CONTROLLER
);

/**
 * @description Get All Product Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllProduct = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProduct Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProduct,
    constants.actions.MsgActionProductGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProduct Controller has been end'
  });
};

/**
 * @description Create Product Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createProduct = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createProduct Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProduct,
    constants.actions.MsgActionProductCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createProduct Controller has been end'
  });
};

/**
 * @description Get Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getProduct = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getProduct Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProduct,
    constants.actions.MsgActionProductGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getProduct Controller has been end'
  });
};

/**
 * @description Edit Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateProduct = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateProduct Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProduct,
    constants.actions.MsgActionProductUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateProduct Controller has been end'
  });
};

/**
 * @description Delete Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteProduct = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteProduct Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProduct,
    constants.actions.MsgActionProductDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteProduct Controller has been end'
  });
};

const roleController = {
  getAllProduct,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};

export default roleController;
