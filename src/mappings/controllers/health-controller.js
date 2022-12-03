'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.HEALTH_CONTROLLER
);

/**
 * @description Health Check Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const healthCheck = (req, res, next) => {
  loggerFactory.info(`Function healthCheck Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeHealth,
    constants.actions.MsgActionHealthCheck
  );
  loggerFactory.info(`Function healthCheck Controller has been end`);
};

const healthController = {
  healthCheck
};

export default healthController;
