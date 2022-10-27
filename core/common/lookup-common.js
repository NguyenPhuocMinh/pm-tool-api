'use strict';

import mongoose from 'mongoose';
import lodash from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const { models } = mongoose;
const { includes } = lodash;

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.LOOKUP_COMMON
);

const BuildFindModel = (schemas, type) => {
  loggerFactory.info(`BuildFindModel has been start`);

  let model = null;

  if (includes(schemas, models[type])) {
    model = models[type];

    loggerFactory.info(`BuildSuccessResponse has been end with find model`, {
      args: `[${model}]`
    });

    return model;
  }

  loggerFactory.error(`BuildSuccessResponse has been end with not found model`);
  throw new Error('InvalidNameModel');
};

const lookupCommon = {
  BuildFindModel
};

export default lookupCommon;
