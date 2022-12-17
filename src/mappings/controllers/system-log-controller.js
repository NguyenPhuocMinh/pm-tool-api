'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.SYSTEM_LOG_CONTROLLER
);

/**
 * @description Get All System Log Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllSystemLog = (req, res, next) => {
  loggerFactory.info(`Function getAllSystemLog Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeSystemLog,
    constants.actions.MsgActionSystemLogGetAll
  );
  loggerFactory.info(`Function getAllSystemLog Controller has been end`);
};

const systemLogController = {
  getAllSystemLog
};

export default systemLogController;
