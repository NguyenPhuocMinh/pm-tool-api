'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.CONFIG_CONTROLLER
);

/**
 * @description Get Config Data Json Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getDataConfigJson = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getDataConfigJson Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeConfig,
    constants.actions.MsgActionGetDataConfigJson
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getDataConfigJson Controller has been end'
  });
};

const configController = {
  getDataConfigJson
};

export default configController;
