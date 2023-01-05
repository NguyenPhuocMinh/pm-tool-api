'use strict';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.ROUTER_MIDDLEWARE
);

const routerMiddleware = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.WARN,
    message: 'Function routerMiddleware has been start'
  });

  const toolBox = { req, res, next };
  const routerNotFoundError = commons.newError('e002');

  logger.log({
    level: constants.LOG_LEVELS.WARN,
    message: 'Function routerMiddleware has been end'
  });

  return builds.errorResponse(toolBox, routerNotFoundError);
};

export default routerMiddleware;
