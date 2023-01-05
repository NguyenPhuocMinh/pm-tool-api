'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.NOTIFY_TEMPLATE_CONTROLLER
);

/**
 * @description Create Notify Template Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllNotifyTemplate = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyTemplate Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyTemplate,
    constants.actions.MsgActionNotifyTemplateGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllNotifyTemplate Controller has been end'
  });
};

/**
 * @description Notify Update Read Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createNotifyTemplate = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createNotifyTemplate Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyTemplate,
    constants.actions.MsgActionNotifyTemplateCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createNotifyTemplate Controller has been end'
  });
};

const notifyTemplateController = {
  getAllNotifyTemplate,
  createNotifyTemplate
};

export default notifyTemplateController;
