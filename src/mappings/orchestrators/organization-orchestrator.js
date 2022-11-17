'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

import constants from '@constants';

import logger from '@core/logger';
import dbManager from '@core/database';

import { formatUtils } from '@core/utils';
import { errorCommon, configureCommon } from '@core/common';
import { organizationDTO } from '@core/shared/dtos';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.ORGANIZATION_ORCHESTRATOR
);

const getAllOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllOrganization has been start`);

    const { skip, limit } = configureCommon.createFilterPagination(req.query);
    const query = configureCommon.createFindQuery(req.query);
    const sort = configureCommon.createSortOrderQuery(req.query);

    const organizations = await dbManager.findAll({
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

    const total = await dbManager.count({
      type: 'OrganizationModel',
      filter: query
    });

    const result = await configureCommon.convertDataResponseMap(organizations);

    loggerFactory.info(`Function getAllOrganization has been end`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'OrganizationGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllOrganization has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const createOrganization = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function createOrganization has been start`);

    const { name } = req.body;

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('OrganizationNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate(
      'OrganizationModel',
      { slug }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameOrganization');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = configureCommon.attributeFilter(organization, 'create');

    const data = await dbManager.Create({
      type: 'OrganizationModel',
      doc: organization
    });

    const result = organizationDTO(data);

    loggerFactory.info(`Function createOrganization has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function createOrganization has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const getOrganizationByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getOrganizationByID has been start`);

    const id = req.params.id;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('IDNotFound');
    }

    const organization = await dbManager.Get({
      type: 'OrganizationModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = organizationDTO(organization);

    loggerFactory.info(`Function getOrganizationByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getOrganizationByID has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const editOrganizationByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function editOrganizationByID has been start`);

    const { id } = req.params;
    const { name } = req.body;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('OrganizationIDNotFound');
    }

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('OrganizationNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate(
      'OrganizationModel',
      { slug, _id: { $ne: id } }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameOrganization');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = configureCommon.attributeFilter(organization);

    const data = await dbManager.Update({
      type: 'OrganizationModel',
      id,
      organization
    });

    const result = organizationDTO(data);

    loggerFactory.info(`Function editOrganizationByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationEditSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function editOrganizationByID has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const deleteOrganizationByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deleteOrganizationByID has been start`);
    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('OrganizationIDNotFound');
    }

    const result = await dbManager.Delete({
      type: 'OrganizationModel',
      id
    });

    loggerFactory.info(`Function deleteOrganizationByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function deleteOrganizationByID has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const organizationOrchestrator = {
  getAllOrganization,
  createOrganization,
  getOrganizationByID,
  editOrganizationByID,
  deleteOrganizationByID
};

export default organizationOrchestrator;
