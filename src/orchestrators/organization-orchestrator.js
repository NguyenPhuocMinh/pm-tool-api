'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';
import formatUtils from '../../utils/format-util';

import errorCommon from '../../core/common/error-common';
import configureCommon from '../../core/common/configure-common';

import database from '../../core/database';
import { organizationDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.ORGANIZATION_ORCHESTRATOR
);

const GetList = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function GetList has been start`);

    const { skip, limit } = configureCommon.CreateFilterPagination(req.query);
    const query = configureCommon.CreateFindQuery(req.query);
    const sort = configureCommon.CreateSortOrderQuery(req.query);

    const organizations = await database.FindAll({
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

    const total = await database.Count({
      type: 'OrganizationModel',
      filter: query
    });

    const response = await configureCommon.ConvertDataResponseMap(
      organizations
    );

    return {
      result: {
        data: response,
        total
      },
      msg: 'OrganizationGetListSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function GetList has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Create = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function Create has been start`);

    const { name } = req.body;

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('OrganizationNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate(
      'OrganizationModel',
      { slug }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameOrganization');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = configureCommon.AttributeFilter(organization, 'create');

    const data = await database.Create({
      type: 'OrganizationModel',
      doc: organization
    });

    const result = organizationDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Create has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const GetID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function GetID has been start`);

    const id = req.params.id;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('IDNotFound');
    }

    const organization = await database.Get({
      type: 'OrganizationModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = organizationDTO(organization);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function GetID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Edit = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function Edit has been start`);
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
    const isDuplicate = await configureCommon.CheckDuplicate(
      'OrganizationModel',
      { slug, _id: { $ne: id } }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameOrganization');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = configureCommon.AttributeFilter(organization);

    const data = await database.Update({
      type: 'OrganizationModel',
      id,
      organization
    });

    const result = organizationDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'OrganizationEditSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Edit has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Delete = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function Delete has been start`);
    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('OrganizationIDNotFound');
    }

    const result = await database.Delete({
      type: 'OrganizationModel',
      id
    });

    return {
      result: {
        data: result
      },
      msg: 'OrganizationDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Delete has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const OrganizationOrchestrator = {
  GetList,
  Create,
  GetID,
  Edit,
  Delete
};

export default OrganizationOrchestrator;
