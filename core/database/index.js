'use strict';

import mongoose from 'mongoose';
import lodash from 'lodash';

import models from '../models';
import lookupCommon from '../common/lookup-common';

import constants from '../constants';
import logUtils from '../utils/log-util';

const { isEmpty, map } = lodash;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_DB_MANAGER
);

let schemaModels;

if (!isEmpty(models)) {
  schemaModels = map(models, (doc) => {
    return mongoose.model(doc.name, doc.attributes, doc.options.collection);
  });
} else {
  schemaModels = [];
}

const FindOne = async ({ type, filter = {}, projection = {}, populates }) => {
  try {
    loggerFactory.data('FindOne has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model
      .findOne(filter, projection, {
        populate: populates
      })
      .exec();
    loggerFactory.data('FindOne has been start');
    return data;
  } catch (error) {
    loggerFactory.error('');
    throw error;
  }
};

const dbManager = {
  FindOne
};

export default dbManager;
