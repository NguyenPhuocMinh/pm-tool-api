'use strict';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.ROUTER_MIDDLEWARE
);

const routerMiddleware = (req, res, next) => {
  loggerFactory.warn(`Function routerMiddleware has been start`);

  const toolBox = { req, res, next };
  const routerNotFoundError = commons.newError('RouterNotFound');

  loggerFactory.warn(`Function routerMiddleware has been end`);

  return builds.errorResponse(toolBox, routerNotFoundError);
};

export default routerMiddleware;
