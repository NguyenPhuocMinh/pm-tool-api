'use strict';

import { errorCodes } from '@resources';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_COMMON.ERROR_COMMON
);

/**
 * @description Handler error common
 * @param {*} msg
 */
export const newError = (msg = '') => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function newError has been start'
    });
    const error = {};
    if (Object.prototype.hasOwnProperty.call(errorCodes, msg)) {
      error.name = msg;
      error.message = errorCodes[msg].message;
      error.description = errorCodes[msg].description;
      error.returnCode = errorCodes[msg].returnCode;
      error.statusCode = errorCodes[msg].statusCode;
    } else {
      error.name = msg;
      error.message = `Error name [${msg}] not supported`;
      error.description = errorCodes[msg].description;
      error.returnCode = 9999;
      error.statusCode = 400;
    }
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function newError has been end'
    });
    return error;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function newError has error',
      args: utils.parseError(err)
    });
    throw err;
  }
};
