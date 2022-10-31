'use strict';

import Promise from 'bluebird';
import { assign } from 'lodash';

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
        createdAt: 0,
        createdBy: 0,
        updatedAt: 0,
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

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate(
      'OrganizationModel',
      { slug }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameOrganization');
    }

    let doc = assign(req.body, {
      slug: slug
    });

    doc = configureCommon.AttributeFilter(doc, 'create');

    const data = await database.Create({
      type: 'OrganizationModel',
      doc
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
  try {
    loggerFactory.info(`Function GetID has been start`);

    return {
      result: {
        data: {}
      },
      msg: 'OrganizationCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function GetID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Edit = async (toolBox) => {
  try {
    loggerFactory.info(`Function Edit has been start`);

    return {
      result: {
        data: {}
      },
      msg: 'OrganizationCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Edit has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Delete = async (toolBox) => {
  try {
    loggerFactory.info(`Function Delete has been start`);

    return {
      result: {
        data: {}
      },
      msg: 'OrganizationCreateSuccess'
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
