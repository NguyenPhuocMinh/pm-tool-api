'use strict';

import mongoose from 'mongoose';
import lodash from 'lodash';
import retry from 'retry';
import bcrypt from 'bcrypt';

import models from './models';

import constants from '@constants';
import { options, profiles } from '@conf';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import { buildFindModel, getDataJSON, attributeFilter } from '@core/common';

const { isEmpty, map } = lodash;

const APP_MONGO_URI = profiles.APP_MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const loggerFactory = logger.createLogger(
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

    const secret = getDataJSON();

    const {
      admin: { email, password }
    } = secret;

    // check admin exists
    const existsAdmin = await count({
      type: 'UserModel',
      filter: {
        email: email
      }
    });

    if (existsAdmin) {
      loggerFactory.info(`User admin has been exists in database`);
    } else {
      const hashPass = bcrypt.hashSync(password, options.bcryptOptions.salt);

      let data = {
        email,
        password: hashPass,
        firstName: 'admin',
        lastName: 'super'
      };

      data = attributeFilter(data, 'create');

      await createOne({
        type: 'UserModel',
        doc: {
          ...data,
          isAdmin: true
        }
      });

      loggerFactory.info(`User admin has been create in database`);
    }

    loggerFactory.info(`The database is running on`, {
      args: `[${APP_MONGO_URI}]`
    });
  } catch (err) {
    loggerFactory.error('Connect database has error', {
      args: formatErrorMessage(err)
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
 * @example
 * const data = await database.findAll({
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
const findAll = async ({ type, filter = {}, projection = {}, options }) => {
  try {
    loggerFactory.data('Function findAll has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.find(filter, projection, options).exec();

    loggerFactory.data('Function findAll has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function findAll has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Find One
 * @example
 * const data = await database.findOne({
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
const findOne = async ({ type, filter = {}, projection = {}, options }) => {
  try {
    loggerFactory.data('Function findOne has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.findOne(filter, projection, options).exec();

    loggerFactory.data('Function findOne has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function findOne has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Get
 * @example
 * const data = await database.getOne({
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
const getOne = async ({ type, id, projection, options }) => {
  try {
    loggerFactory.data('Function get has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.findById(id, projection, options).exec();

    loggerFactory.data('Function get has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function get has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Create
 * @example
 * const data = await database.createOne({
 *    type: 'UserModel',
 *    doc : { name: 'John Doe },
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-create
 * @returns {Object} data
 */
const createOne = async ({ type, doc }) => {
  try {
    loggerFactory.data('Function createOne has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.create(doc);

    loggerFactory.data('Function createOne has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function createOne has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Update by id
 * @example
 * const data = await database.updateOne({
 *    type: 'UserModel',
 *    id: 123,
 *    docs: { name: 'John Doe },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate
 * @returns
 */
const updateOne = async ({ type, id, doc, options }) => {
  try {
    loggerFactory.data('Function updateOne has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model
      .findByIdAndUpdate(id, doc, {
        new: true,
        ...options
      })
      .exec();

    loggerFactory.data('Function updateOne has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function updateOne has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Delete by id
 * @example
 * const data = await database.deleteOne({
 *    type: 'UserModel',
 *    id: 123,
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndRemove
 * @returns
 */
const deleteOne = async ({ type, id, options }) => {
  try {
    loggerFactory.data('Function deleteID has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.findByIdAndRemove(id, options).exec();

    loggerFactory.data('Function deleteID has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function deleteID has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Count docs
 * @example
 * const data = await database.count({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 * })
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model-countDocuments
 * @returns
 */
const count = async ({ type, filter = {} }) => {
  try {
    loggerFactory.data('Function count has been start');

    const model = buildFindModel(schemaModels, type);

    const count = await model.countDocuments(filter).exec();

    loggerFactory.data('Function count has been end');
    return count;
  } catch (err) {
    loggerFactory.error('Function count has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description Update Many
 * @example
 * const data = await database.UpdateMany({
 *    type: 'UserModel',
 *    filter: {
 *      id: 123
 *    },
 *    doc: { name: "John doe" }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-updateMany
 * @returns
 */
const updateMany = async ({ type, filter, doc, options }) => {
  try {
    loggerFactory.data('Function updateMany has been start');

    const model = buildFindModel(schemaModels, type);

    const data = await model.updateMany(filter, doc, options).exec();

    loggerFactory.data('Function updateMany has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function updateMany has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

/**
 * @description bulkWrite
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-bulkWrite
 * @returns
 */
const bulkWrite = async ({ type, pipelines = [], options }) => {
  try {
    loggerFactory.data('Function bulkWrite has been start');

    const model = buildFindModel(schemaModels, type);

    const data = model.bulkWrite(pipelines, options);

    loggerFactory.data('Function bulkWrite has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function bulkWrite has been error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

const dbManager = {
  Init,
  findAll,
  findOne,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  count,
  updateMany,
  bulkWrite
};

export default dbManager;
