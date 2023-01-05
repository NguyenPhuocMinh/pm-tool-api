'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.HOME_CONTROLLER
);

/**
 * @description Home Page Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const homePage = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function homePage Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeHome,
    constants.actions.MsgActionHomePage
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function homePage Controller has been end'
  });
};

const homeController = {
  homePage
};

export default homeController;
