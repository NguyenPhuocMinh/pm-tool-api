'use strict';

import { models } from 'mongoose';
import { includes } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.LOOKUP_BUILD
);

export const modelLookup = (schemas, type) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'FindModel has been start'
  });

  let model = null;

  if (includes(schemas, models[type])) {
    model = models[type];

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'FindModel has been end with find model',
      args: {
        model: type
      }
    });

    return model;
  }

  logger.log({
    level: constants.LOG_LEVELS.ERROR,
    message: 'FindModel has been end with not found model',
    args: {
      model: type
    }
  });
  throw new Error('InvalidNameModel');
};
