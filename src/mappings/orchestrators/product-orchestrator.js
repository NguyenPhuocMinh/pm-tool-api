'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';
// transfers
import transfers from '@transfers';
// validators
import validators from '@validators';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.PRODUCT_ORCHESTRATOR
);

/**
 * @description Get All Product Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllProduct = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllProduct Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const products = await repository.findAll({
      type: 'ProductModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort,
        populate: [
          {
            path: 'category',
            select: 'id name'
          }
        ]
      }
    });

    const total = await repository.count({
      type: 'ProductModel',
      filter: query
    });

    const response = await Promise.map(
      products,
      (data) => {
        data = data.toJSON();
        const { _id, category } = data;
        return {
          id: _id,
          category: {
            id: category._id,
            name: category.name
          },
          ...data
        };
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllProduct Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'productS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllProduct Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Product Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createProduct = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createProduct Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorProduct(req.body);

    if (error) {
      throw commons.newError('productE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('ProductModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('productE002');
    }

    let product = assign(req.body, {
      slug: slug
    });

    product = helpers.attributeHelper(req, product, 'create');

    const data = await repository.createOne({
      type: 'ProductModel',
      doc: product
    });

    const result = transfers.productTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createProduct Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'productS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createProduct Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Product By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getProduct = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getProduct Orchestrator has been start'
    });

    const { id } = req.params;

    const product = await getProductFunc(id);

    const result = transfers.productTransfer(product);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getProduct Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'productS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getProduct Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Product By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateProduct = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateProduct Orchestrator has been start'
    });

    const { id } = req.params;

    const product = await getProductFunc(id);

    // validate inputs
    const error = validators.validatorProduct(req.body);

    if (error) {
      throw commons.newError('productE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('ProductModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('productE002');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const {
      image,
      description,
      price,
      discount,
      category,
      activated,
      updatedAt,
      updatedBy
    } = req.body;

    product.name = name;
    product.image = image;
    product.description = description;
    product.price = price;
    product.discount = discount;
    product.category = category;
    product.activated = activated;
    product.updatedAt = updatedAt;
    product.updatedBy = updatedBy;
    await product.save();

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateProduct Orchestrator has been end'
    });

    const result = transfers.productTransfer(product);

    return {
      result: {
        data: result.id
      },
      msg: 'productS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateProduct Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Product By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteProduct = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteProduct Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('productE003');
    }

    req.body = helpers.attributeHelper(req, req.body);

    const result = await repository.deleteOne({
      type: 'ProductModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteProduct Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'productS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteProduct Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Product Func
 * @param {*} id
 */
const getProductFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('productE003');
    }

    const product = await repository.getOne({
      type: 'ProductModel',
      id,
      projection: {
        __v: 0
      }
    });

    return product;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getProductFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const productOrchestrator = {
  getAllProduct,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};

export default productOrchestrator;
