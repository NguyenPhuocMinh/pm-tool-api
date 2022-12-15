'use strict';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';

// core
import loggerManager from '@core/logger';
// resource
import { R0004, R0005 } from '@resources';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.ROUTER_MIDDLEWARE
);

const routerMiddleware = (req, res, next) => {
  loggerFactory.warn(R0004);

  const toolBox = { req, res, next };
  const routerNotFoundError = commons.newError('E002');

  loggerFactory.warn(R0005);

  return builds.errorResponse(toolBox, routerNotFoundError);
};

export default routerMiddleware;
