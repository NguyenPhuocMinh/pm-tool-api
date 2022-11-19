'use strict';

import { models } from 'mongoose';
import { includes } from 'lodash';

import constants from '@constants';

// core
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.LOOKUP_COMMON
);

export const buildFindModel = (schemas, type) => {
  loggerFactory.info(`BuildFindModel has been start`);

  let model = null;

  if (includes(schemas, models[type])) {
    model = models[type];

    loggerFactory.info(`BuildSuccessResponse has been end with find model`, {
      args: {
        model: type
      }
    });

    return model;
  }

  loggerFactory.error(`BuildSuccessResponse has been end with not found model`);
  throw new Error('InvalidNameModel');
};
