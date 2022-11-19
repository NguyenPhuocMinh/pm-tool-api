'use strict';

import constants from '@constants';
import logger from '@core/logger';
import { errorCodes } from '@configs';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.ERROR_COMMON
);

export const buildNewError = (msg = '') => {
  try {
    loggerFactory.error(`Function BuildNewError has been start`);
    const error = {};
    if (Object.prototype.hasOwnProperty.call(errorCodes, msg)) {
      loggerFactory.error(`HasOwnProperty name in errorCodes`);
      error.name = msg;
      error.message = errorCodes[msg].message;
      error.returnCode = errorCodes[msg].returnCode;
      error.statusCode = errorCodes[msg].statusCode;
    } else {
      loggerFactory.error(`Not hasOwnProperty message in errorCodes`);
      error.name = msg;
      error.message = `Error name [${msg}] not supported`;
      error.returnCode = 9999;
      error.statusCode = 400;
    }
    loggerFactory.error(`Function BuildNewError end`);
    return error;
  } catch (err) {
    loggerFactory.error(`Function BuildNewError has error`, {
      args: err.message
    });
    throw err;
  }
};
