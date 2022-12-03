'use strict';

import { models } from 'mongoose';
import { includes } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.LOOKUP_BUILD
);

export const modelLookup = (schemas, type) => {
  loggerFactory.info(`FindModel has been start`);

  let model = null;

  if (includes(schemas, models[type])) {
    model = models[type];

    loggerFactory.info(`FindModel has been end with find model`, {
      args: {
        model: type
      }
    });

    return model;
  }

  loggerFactory.error(`FindModel has been end with not found model`);
  throw new Error('InvalidNameModel');
};
