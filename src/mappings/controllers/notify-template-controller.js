'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
  loggerFactory.info(`Function getAllNotifyTemplate Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyTemplate,
    constants.actions.MsgActionNotifyTemplateGetAll
  );
  loggerFactory.info(`Function getAllNotifyTemplate Controller has been end`);
};

/**
 * @description Notify Update Read Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createNotifyTemplate = (req, res, next) => {
  loggerFactory.info(`Function createNotifyTemplate Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeNotifyTemplate,
    constants.actions.MsgActionNotifyTemplateCreate
  );
  loggerFactory.info(`Function createNotifyTemplate Controller has been end`);
};

const notifyTemplateController = {
  getAllNotifyTemplate,
  createNotifyTemplate
};

export default notifyTemplateController;
