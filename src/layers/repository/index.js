'use strict';

import schemaLayers from '../schema-layer';

import constants from '@constants';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
    loggerFactory.data('Function findAll has been start');

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.find(filter, projection, options).exec();

    loggerFactory.data('Function findAll has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function findAll has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findOne(filter, projection, options).exec();

    loggerFactory.data('Function findOne has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function findOne has been error', {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.data('Function get has been start');

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findById(id, projection, options).exec();

    loggerFactory.data('Function get has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function get has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.create(doc);

    loggerFactory.data('Function createOne has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function createOne has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

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
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.findByIdAndRemove(id, options).exec();

    loggerFactory.data('Function deleteID has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function deleteID has been error', {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.data('Function deleteMany has been start');

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.deleteMany(filter, options).exec();

    loggerFactory.data('Function deleteMany has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function deleteMany has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const count = await model.countDocuments(filter).exec();

    loggerFactory.data('Function count has been end');
    return count;
  } catch (err) {
    loggerFactory.error('Function count has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const data = await model.updateMany(filter, doc, options).exec();

    loggerFactory.data('Function updateMany has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function updateMany has been error', {
      args: utils.formatErrorMsg(err)
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

    const model = builds.modelLookup(schemaLayers, type);

    const data = model.bulkWrite(pipelines, options);

    loggerFactory.data('Function bulkWrite has been end');
    return data;
  } catch (err) {
    loggerFactory.error('Function bulkWrite has been error', {
      args: utils.formatErrorMsg(err)
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
