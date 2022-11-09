'use strict';

import constants from '../constants';
import logUtils from '../utils/log-util';
import returnUtils from '../utils/return-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARES.TOKEN_MIDDLEWARE
);

const tokenMiddleware = (req, res, next) => {
  try {
    loggerFactory.debug(`Function tokenMiddleware has been start`);
    loggerFactory.debug(`Function tokenMiddleware has been end`);
    next();
  } catch (err) {
    loggerFactory.error(`Function tokenMiddleware has been error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

export default tokenMiddleware;
