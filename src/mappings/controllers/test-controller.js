'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.TEST_CONTROLLER
);

/**
 * @description Test Send Queue Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const testSendQueue = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function testSendQueue Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTest,
    constants.actions.MsgActionTestSendQueue
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function testSendQueue Controller has been end'
  });
};

const testController = {
  testSendQueue
};

export default testController;
