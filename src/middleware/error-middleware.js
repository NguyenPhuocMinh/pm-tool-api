'use strict';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.ERROR_MIDDLEWARE
);

const errorMiddleware = (_err, req, res, next) => {
  loggerFactory.error('Function errorMiddleware has been start');

  const toolBox = { req, res, next };
  const internalServerError = commons.newError('e001');

  if (_err.stack) {
    loggerFactory.error(
      'Function errorMiddleware has been end without error internal server'
    );
    console.error('error stack', _err.stack);
    return builds.errorResponse(toolBox, internalServerError);
  }

  loggerFactory.error('Function errorMiddleware has been end without error', {
    args: _err.name
  });

  return builds.errorResponse(toolBox, _err);
};

export default errorMiddleware;
