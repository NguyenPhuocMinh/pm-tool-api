'use strict';

import mongoose from 'mongoose';
import lodash from 'lodash';
import retry from 'retry';

import models from '../models';
import lookupCommon from '../common/lookup-common';

import profiles from '../../conf/profiles';
import options from '../../conf/options';
import constants from '../../constants';
import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

const { isEmpty, map } = lodash;

const APP_MONGO_URI = profiles.APP_MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_DATABASE
);

let schemaModels;

if (!isEmpty(models)) {
  schemaModels = map(models, (doc) => {
    return mongoose.model(doc.name, doc.attributes, doc.options.collection);
  });
} else {
  schemaModels = [];
}

const Init = async () => {
  try {
    await mongoose.connect(APP_MONGO_URI, options.mongooseOptions);

    loggerFactory.info(`The database is running on`, {
      args: `[${APP_MONGO_URI}]`
    });
  } catch (err) {
    loggerFactory.error('Connect database has error', {
      args: returnUtils.returnErrorMessage(err)
    });

    const operation = retry.operation(options.retryOptions);
    operation.attempt((current) => {
      if (operation.retry(err)) {
        loggerFactory.error(
          `Unable to connect to the database. Retrying(${current})`
        );
        return err;
      }
    });
    throw err;
  }
};

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
  } catch (err) {
    loggerFactory.error('FindOne has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

const dbManager = {
  Init,
  FindOne
};

export default dbManager;
