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
  constants.STRUCT_ORCHESTRATORS.CATEGORY_ORCHESTRATOR
);

/**
 * @description Get All Category Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllCategory = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllCategory Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const categories = await repository.findAll({
      type: 'CategoryModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await repository.count({
      type: 'CategoryModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(categories);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllCategory Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'categoryS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllCategory Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Category Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createCategory = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createCategory Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorCategory(req.body);

    if (error) {
      throw commons.newError('categoryE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('CategoryModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('categoryE002');
    }

    let category = assign(req.body, {
      slug: slug
    });

    category = helpers.attributeHelper(req, category, 'create');

    const data = await repository.createOne({
      type: 'CategoryModel',
      doc: category
    });

    const result = transfers.categoryTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createCategory Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'categoryS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createCategory Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Category By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getCategory = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getCategory Orchestrator has been start'
    });

    const { id } = req.params;

    const category = await getCategoryFunc(id);

    const result = transfers.categoryTransfer(category);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getCategory Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'categoryS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getCategory Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Category By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateCategory = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateCategory Orchestrator has been start'
    });

    const { id } = req.params;

    const category = await getCategoryFunc(id);

    // validate inputs
    const error = validators.validatorCategory(req.body);

    if (error) {
      throw commons.newError('categoryE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('CategoryModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('categoryE002');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { image, activated, updatedAt, updatedBy } = req.body;

    category.name = name;
    category.image = image;
    category.activated = activated;
    category.updatedAt = updatedAt;
    category.updatedBy = updatedBy;
    await category.save();

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateCategory Orchestrator has been end'
    });

    const result = transfers.categoryTransfer(category);

    return {
      result: {
        data: result
      },
      msg: 'categoryS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateCategory Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Category By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteCategory = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteCategory Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('categoryE003');
    }

    req.body = helpers.attributeHelper(req, req.body);

    // check product assign category into db is not remove
    const categoryExistInProduct = await repository.findAll({
      type: 'ProductModel',
      filter: {
        category: id
      }
    });

    if (!isEmpty(categoryExistInProduct)) {
      throw commons.newError('categoryE004');
    }

    const result = await repository.deleteOne({
      type: 'CategoryModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteCategory Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'categoryS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteCategory Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Category Func
 * @param {*} id
 */
const getCategoryFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('categoryE003');
    }

    const category = await repository.getOne({
      type: 'CategoryModel',
      id,
      projection: {
        __v: 0
      }
    });

    return category;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getCategoryFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const categoryOrchestrator = {
  getAllCategory,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
};

export default categoryOrchestrator;
