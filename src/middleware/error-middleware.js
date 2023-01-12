'use strict';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.ERROR_MIDDLEWARE
);

const errorMiddleware = (_err, req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.ERROR,
    message: 'Function errorMiddleware has been start'
  });

  const toolBox = { req, res, next };
  const internalServerError = commons.newError('e001');

  if (_err.stack) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function errorMiddleware has been end without error internal server',
      args: utils.parseError(_err)
    });
    console.error(_err.stack);
    internalServerError.error = _err.stack;
    return builds.errorResponse(toolBox, internalServerError);
  }

  logger.log({
    level: constants.LOG_LEVELS.ERROR,
    message: 'Function errorMiddleware has been end without error',
    args: utils.parseError(_err)
  });

  return builds.errorResponse(toolBox, _err);
};

export default errorMiddleware;
