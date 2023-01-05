'use strict';

import schemaLayers from '../schema-layer';

import constants from '@constants';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_LAYERS.REPOSITORY_LAYER
);

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
 *      populate: [
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function findAll has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.find(filter, projection, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function findAll has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function findAll has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function findOne has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findOne(filter, projection, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function findOne has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function findOne has been error',
      args: utils.parseError(err)
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
 *         {
 *           path: 'roles',
 *           select: 'name'
 *        }
 *      ]
 *    }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findById
 * @returns
 */
const getOne = async ({ type, id, projection, options }) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function getOne has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findById(id, projection, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function getOne has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getOne has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function createOne has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.create(doc);

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function createOne has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createOne has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function updateOne has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model
      .findByIdAndUpdate(id, doc, {
        new: true,
        ...options
      })
      .exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function updateOne has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateOne has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function deleteOne has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findByIdAndRemove(id, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function deleteOne has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteOne has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

/**
 * @description Delete by id
 * @example
 * const data = await database.deleteMany({
 *    type: 'UserModel',
 *    filter: {
 *      id: 123
 *    },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-deleteMany
 * @returns
 */
const deleteMany = async ({ type, filter, options }) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function deleteMany has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.deleteMany(filter, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function deleteMany has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteMany has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function count has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const count = await model.countDocuments(filter).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function count has been end'
    });
    return count;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function count has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function updateMany has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.updateMany(filter, doc, options).exec();

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function updateMany has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateMany has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function bulkWrite has been start'
    });

    const model = builds.modelLookup(schemaLayers, type);

    const data = model.bulkWrite(pipelines, options);

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Function bulkWrite has been end'
    });
    return data;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function bulkWrite has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export default {
  findAll,
  findOne,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  deleteMany,
  count,
  updateMany,
  bulkWrite
};
