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
import { roleDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.ROLE_ORCHESTRATOR
);

const GetList = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function GetList has been start`);

    const { skip, limit } = configureCommon.CreateFilterPagination(req.query);
    const query = configureCommon.CreateFindQuery(req.query);
    const sort = configureCommon.CreateSortOrderQuery(req.query);

    const roles = await database.FindAll({
      type: 'RoleModel',
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
      type: 'RoleModel',
      filter: query
    });

    const response = await configureCommon.ConvertDataResponseMap(roles);

    return {
      result: {
        data: response,
        total
      },
      msg: 'RoleGetListSuccess'
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
      throw errorCommon.BuildNewError('RoleNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate('RoleModel', {
      slug
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameRole');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = configureCommon.AttributeFilter(role, 'create');

    const data = await database.Create({
      type: 'RoleModel',
      doc: role
    });

    const result = roleDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'RoleCreateSuccess'
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

    const role = await database.Get({
      type: 'RoleModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = roleDTO(role);

    return {
      result: {
        data: result
      },
      msg: 'RoleGetIDSuccess'
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
      throw errorCommon.BuildNewError('RoleIDNotFound');
    }

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('RoleNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate('RoleModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameRole');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = configureCommon.AttributeFilter(role);

    const data = await database.Update({
      type: 'RoleModel',
      id,
      doc: role
    });

    const result = roleDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'RoleEditSuccess'
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
      throw errorCommon.BuildNewError('RoleIDNotFound');
    }

    const result = await database.Delete({
      type: 'RoleModel',
      id
    });

    return {
      result: {
        data: result
      },
      msg: 'RoleDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Delete has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const RoleOrchestrator = {
  GetList,
  Create,
  GetID,
  Edit,
  Delete
};

export default RoleOrchestrator;
