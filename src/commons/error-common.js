'use strict';

import { errorCodes } from '@resources';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_COMMON.ERROR_COMMON
);

/**
 * @description Handler error common
 * @param {*} msg
 */
export const newError = (msg = '') => {
  try {
    loggerFactory.error(`Function newError has been start`);
    const error = {};
    if (Object.prototype.hasOwnProperty.call(errorCodes, msg)) {
      loggerFactory.error(`HasOwnProperty name in errorCodes`);
      error.name = msg;
      error.message = errorCodes[msg].message;
      error.description = errorCodes[msg].description;
      error.returnCode = errorCodes[msg].returnCode;
      error.statusCode = errorCodes[msg].statusCode;
    } else {
      loggerFactory.error(`Not hasOwnProperty message in errorCodes`);
      error.name = msg;
      error.message = `Error name [${msg}] not supported`;
      error.description = errorCodes[msg].description;
      error.returnCode = 9999;
      error.statusCode = 400;
    }
    loggerFactory.error(`Function newError end`);
    return error;
  } catch (err) {
    loggerFactory.error(`Function newError has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};
