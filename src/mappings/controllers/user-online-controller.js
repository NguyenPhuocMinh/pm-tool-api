'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.USER_ONLINE_CONTROLLER
);

/**
 * @description Get All User Online Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllUserOnline = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUserOnline Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeUserOnline,
    constants.actions.MsgActionUserOnlineGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllUserOnline Controller has been end'
  });
};

const userOnlineController = {
  getAllUserOnline
};

export default userOnlineController;
