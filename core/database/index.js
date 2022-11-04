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

/**
 * @description Find All
 * @argument {*} type
 * @argument {*} filter
 * @argument {*} projection
 * @argument {*} options
 * @example
 * const data = await database.FindAll({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 *    projection: { __v: 0 },
 *    options: {
 *      sort: sort,
 *      skip: 0,
 *      limit: 1000,
 *      populates: [
 *        {
 *          path: 'roles',
 *          select: 'name'
 *        }
 *      ]
 *    },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-find
 * @returns
 */
const FindAll = async ({ type, filter = {}, projection = {}, options }) => {
  try {
    loggerFactory.data('Function FindAll has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.find(filter, projection, options).exec();

    loggerFactory.data('Function FindAll has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function FindAll has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Create
 * @argument {*} type
 * @argument {*} data
 * @example
 * const data = await database.Create({
 *    type: 'UserModel',
 *    doc : { name: 'John Doe },
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-create
 * @returns {Object} data
 */
const Create = async ({ type, doc }) => {
  try {
    loggerFactory.data('Function Create has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.create(doc);

    loggerFactory.data('Function Create has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function Create has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Get
 * @argument {*} type
 * @argument {*} id
 * @argument {*} projection
 * @argument {*} options
 * @example
 * const data = await database.Get({
 *    type: 'UserModel',
 *    id: '123'
 *    projection: { __v: 0 },
 *    options: {
 *        populates: [
 *          {
 *          path: 'roles',
 *          select: 'name'
 *        }
 *      ]
 *    }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findById
 * @returns
 */
const Get = async ({ type, id, projection, options }) => {
  try {
    loggerFactory.data('Function Get has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.findById(id, projection, options).exec();

    loggerFactory.data('Function Get has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function Get has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Find One
 * @argument {*} type
 * @argument {*} filter
 * @argument {*} projection
 * @argument {*} options
 * @example
 * const data = await database.FindOne({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 *    projection: { __v: 0 },
 *    options: {
 *      populates: [
 *      {
 *        path: 'roles',
 *        select: 'name'
 *     }
 *    }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findOne
 * @returns {Object} data
 */
const FindOne = async ({ type, filter = {}, projection = {}, options }) => {
  try {
    loggerFactory.data('Function FindOne has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.findOne(filter, projection, options).exec();

    loggerFactory.data('Function FindOne has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function FindOne has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Count docs
 * @argument {*} type
 * @argument {*} filter
 * @example
 * const data = await database.Count({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 * })
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model-countDocuments
 * @returns
 */
const Count = async ({ type, filter = {} }) => {
  try {
    loggerFactory.data('Function Count has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const count = await model.countDocuments(filter).exec();

    loggerFactory.data('Function Count has been start');
    return count;
  } catch (err) {
    loggerFactory.error('Function Count has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Update by id
 * @argument {*} type
 * @argument {*} id
 * @argument {*} doc
 * @argument {*} options
 * @example
 * const data = await database.Update({
 *    type: 'UserModel',
 *    id: 123,
 *    docs: { name: 'John Doe },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate
 * @returns
 */
const Update = async ({ type, id, doc, options = { new: true } }) => {
  try {
    loggerFactory.data('Function Update has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.findByIdAndUpdate(id, doc, options).exec();

    loggerFactory.data('Function Update has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function Update has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Delete by id
 * @argument {*} type
 * @argument {*} id
 * @example
 * const data = await database.Delete({
 *    type: 'UserModel',
 *    id: 123,
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndRemove
 * @returns
 */
const Delete = async ({ type, id, options }) => {
  try {
    loggerFactory.data('Function Delete has been start');

    const model = lookupCommon.BuildFindModel(schemaModels, type);

    const data = await model.findByIdAndRemove(id, options).exec();

    loggerFactory.data('Function Delete has been start');
    return data;
  } catch (err) {
    loggerFactory.error('Function Delete has been error', {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

const dbManager = {
  Init,
  FindAll,
  Create,
  Get,
  FindOne,
  Count,
  Update,
  Delete
};

export default dbManager;
