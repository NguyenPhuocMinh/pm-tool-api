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

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.ORGANIZATION_ORCHESTRATOR
);

/**
 * @description Get All Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllOrganization has been start`);

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const organizations = await repository.findAll({
      type: 'OrganizationModel',
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
      type: 'OrganizationModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(organizations);

    loggerFactory.info(`Function getAllOrganization has been end`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'OrganizationS001'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllOrganization has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createOrganization = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function createOrganization has been start`);

    // validate inputs
    const error = validators.validatorOrganization(req.body);

    if (error) {
      throw commons.newError('OrganizationE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('OrganizationModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('OrganizationE002');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = helpers.attributeHelper(req, organization, 'create');

    const data = await repository.createOne({
      type: 'OrganizationModel',
      doc: organization
    });

    const result = transfers.organizationTransfer(data);

    loggerFactory.info(`Function createOrganization has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationS002'
    };
  } catch (err) {
    loggerFactory.error(`Function createOrganization has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getOrganization has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('OrganizationE003');
    }

    const organization = await repository.getOne({
      type: 'OrganizationModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = transfers.organizationTransfer(organization);

    loggerFactory.info(`Function getOrganization has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationS003'
    };
  } catch (err) {
    loggerFactory.error(`Function getOrganization has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function updateOrganization has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('OrganizationE003');
    }

    // validate inputs
    const error = validators.validatorOrganization(req.body);

    if (error) {
      throw commons.newError('OrganizationE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('OrganizationModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('OrganizationE002');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = helpers.attributeHelper(req, organization);

    const data = await repository.updateOne({
      type: 'OrganizationModel',
      id,
      organization
    });

    const result = transfers.organizationTransfer(data);

    loggerFactory.info(`Function updateOrganization has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationS004'
    };
  } catch (err) {
    loggerFactory.error(`Function updateOrganization has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deleteOrganization has been start`);
    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('OrganizationE003');
    }

    const result = await repository.deleteOne({
      type: 'OrganizationModel',
      id
    });

    loggerFactory.info(`Function deleteOrganization has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationS005'
    };
  } catch (err) {
    loggerFactory.info(`Function deleteOrganization has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const organizationOrchestrator = {
  getAllOrganization,
  createOrganization,
  getOrganization,
  updateOrganization,
  deleteOrganization
};

export default organizationOrchestrator;
