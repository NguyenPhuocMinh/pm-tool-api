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
// shares
import shares from '@shares';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.CUSTOMER_ORCHESTRATOR
);

/**
 * @description Register Customer Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const registerCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function registerCustomer Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorCustomerRegister(req.body);

    if (error) {
      throw commons.newError('customerE001');
    }

    const { firstName, lastName, phoneNumber, phoneInfo } = req.body;

    const fullName = utils.formatFullName(firstName, lastName);

    const slug = helpers.slugHelper(fullName);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('CustomerModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('customerE002');
    }

    const { countryCode } = phoneInfo;

    // validate phone number
    shares.validatorPhone(phoneNumber, countryCode);

    let customer = assign(req.body, {
      slug: slug,
      phoneNumber: {
        value: phoneNumber,
        countryCode: countryCode
      }
    });

    customer = helpers.attributeHelper(req, customer, 'create');

    const data = await repository.createOne({
      type: 'CustomerModel',
      doc: customer
    });

    const result = transfers.customerTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function registerCustomer Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'customerS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function registerCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Login Customer Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const loginCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function loginCustomer Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const categories = await repository.findAll({
      type: 'CustomerModel',
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
      type: 'CustomerModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(categories);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function loginCustomer Orchestrator has been end'
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
      message: 'Function loginCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Customer Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllCustomer Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const categories = await repository.findAll({
      type: 'CustomerModel',
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
      type: 'CustomerModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(categories);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllCustomer Orchestrator has been end'
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
      message: 'Function getAllCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Customer Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createCustomer = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createCustomer Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorCustomer(req.body);

    if (error) {
      throw commons.newError('categoryE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('CustomerModel', {
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
      type: 'CustomerModel',
      doc: category
    });

    const result = transfers.categoryTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createCustomer Orchestrator has been end'
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
      message: 'Function createCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Customer By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getCustomer Orchestrator has been start'
    });

    const { id } = req.params;

    const category = await getCustomerFunc(id);

    const result = transfers.categoryTransfer(category);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getCustomer Orchestrator has been end'
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
      message: 'Function getCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Customer By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateCustomer Orchestrator has been start'
    });

    const { id } = req.params;

    const category = await getCustomerFunc(id);

    // validate inputs
    const error = validators.validatorCustomer(req.body);

    if (error) {
      throw commons.newError('categoryE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('CustomerModel', {
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
      message: 'Function updateCustomer Orchestrator has been end'
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
      message: 'Function updateCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Customer By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteCustomer = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteCustomer Orchestrator has been start'
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
      type: 'CustomerModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteCustomer Orchestrator has been end'
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
      message: 'Function deleteCustomer Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Customer Func
 * @param {*} id
 */
const getCustomerFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('categoryE003');
    }

    const category = await repository.getOne({
      type: 'CustomerModel',
      id,
      projection: {
        __v: 0
      }
    });

    return category;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getCustomerFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const customerOrchestrator = {
  registerCustomer,
  loginCustomer,
  getAllCustomer,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
};

export default customerOrchestrator;
