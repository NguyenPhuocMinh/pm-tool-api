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
import { permissionDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.PERMISSION_ORCHESTRATOR
);

const GetList = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function GetList has been start`);

    const { skip, limit } = configureCommon.CreateFilterPagination(req.query);
    const query = configureCommon.CreateFindQuery(req.query);
    const sort = configureCommon.CreateSortOrderQuery(req.query);

    const permissions = await database.FindAll({
      type: 'PermissionModel',
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
      type: 'PermissionModel',
      filter: query
    });

    const response = await configureCommon.ConvertDataResponseMap(permissions);

    return {
      result: {
        data: response,
        total
      },
      msg: 'PermissionGetListSuccess'
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
      throw errorCommon.BuildNewError('PermissionNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate(
      'PermissionModel',
      { slug }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = configureCommon.AttributeFilter(permission, 'create');

    const data = await database.Create({
      type: 'PermissionModel',
      doc: permission
    });

    const result = permissionDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'PermissionCreateSuccess'
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
      type: 'PermissionModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = permissionDTO(organization);

    return {
      result: {
        data: result
      },
      msg: 'PermissionGetIDSuccess'
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
      throw errorCommon.BuildNewError('PermissionIDNotFound');
    }

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('PermissionNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate(
      'PermissionModel',
      { slug, _id: { $ne: id } }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = configureCommon.AttributeFilter(permission);

    const data = await database.Update({
      type: 'PermissionModel',
      id,
      doc: permission
    });

    const result = permissionDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'PermissionEditSuccess'
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
      throw errorCommon.BuildNewError('PermissionIDNotFound');
    }

    const result = await database.Delete({
      type: 'PermissionModel',
      id
    });

    return {
      result: {
        data: result
      },
      msg: 'PermissionDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Delete has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const PermissionOrchestrator = {
  GetList,
  Create,
  GetID,
  Edit,
  Delete
};

export default PermissionOrchestrator;
