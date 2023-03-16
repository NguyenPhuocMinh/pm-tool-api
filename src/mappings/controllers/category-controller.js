'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.CATEGORY_CONTROLLER
);

/**
 * @description Get All Category Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllCategory = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllCategory Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCategory,
    constants.actions.MsgActionCategoryGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllCategory Controller has been end'
  });
};

/**
 * @description Create Category Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createCategory = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createCategory Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCategory,
    constants.actions.MsgActionCategoryCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createCategory Controller has been end'
  });
};

/**
 * @description Get Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCategory = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getCategory Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCategory,
    constants.actions.MsgActionCategoryGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getCategory Controller has been end'
  });
};

/**
 * @description Edit Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateCategory = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateCategory Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCategory,
    constants.actions.MsgActionCategoryUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateCategory Controller has been end'
  });
};

/**
 * @description Delete Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteCategory = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteCategory Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeCategory,
    constants.actions.MsgActionCategoryDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteCategory Controller has been end'
  });
};

const categoryController = {
  getAllCategory,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
};

export default categoryController;
