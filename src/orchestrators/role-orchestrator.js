'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';
import formatUtils from '../../utils/format-util';

import errorCommon from '../../core/common/error-common';
import configureCommon from '../../core/common/configure-common';

import dbManager from '../../core/database';
import { roleDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.ROLE_ORCHESTRATOR
);

/**
 * @description Get All Role Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllRole has been start`);

    const { skip, limit } = configureCommon.createFilterPagination(req.query);
    const query = configureCommon.createFindQuery(req.query);
    const sort = configureCommon.createSortOrderQuery(req.query);

    const roles = await dbManager.findAll({
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

    const total = await dbManager.count({
      type: 'RoleModel',
      filter: query
    });

    const response = await configureCommon.convertDataResponseMap(roles);

    loggerFactory.info(`Function getAllRole has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'RoleGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllRole has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Role Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createRole = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function createRole has been start`);

    const { name } = req.body;

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('RoleNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate('RoleModel', {
      slug
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameRole');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = configureCommon.attributeFilter(role, 'create');

    const data = await dbManager.createOne({
      type: 'RoleModel',
      doc: role
    });

    const result = roleDTO(data);

    loggerFactory.info(`Function createRole has been end`);

    return {
      result: {
        data: result
      },
      msg: 'RoleCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function createRole has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getRoleByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getRoleByID Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('RoleIDNotFound');
    }

    const role = await dbManager.getOne({
      type: 'RoleModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = roleDTO(role);

    loggerFactory.info(`Function getRoleByID Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'RoleGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getRoleByID Orchestrator has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const editRoleByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function editRoleByID Orchestrator has been start`);

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
    const isDuplicate = await configureCommon.checkDuplicate('RoleModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameRole');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = configureCommon.attributeFilter(role);

    loggerFactory.info(`Function editRoleByID Orchestrator has been end`);

    const data = await dbManager.updateOne({
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
    loggerFactory.info(`Function editRoleByID Orchestrator has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteRoleByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deleteRoleByID Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('RoleIDNotFound');
    }

    const result = await dbManager.deleteOne({
      type: 'RoleModel',
      id
    });

    loggerFactory.info(`Function deleteRoleByID Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'RoleDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function deleteRoleByID Orchestrator has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Permissions By RoleID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getPermissionsByRoleID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(
      `Function getPermissionsByRoleID Orchestrator has been start`
    );
    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('RoleIDNotFound');
    }

    const { skip, limit } = configureCommon.createFilterPagination(req.query);
    const sort = configureCommon.createSortOrderQuery(req.query);

    const query = {
      roles: {
        $elemMatch: {
          $eq: id
        }
      }
    };

    const permissions = await dbManager.findAll({
      type: 'PermissionModel',
      filter: query,
      projection: {
        id: 1,
        name: 1,
        description: 1
      },
      options: {
        skip,
        limit,
        sort
      }
    });
    console.log(
      '🚀 ~ file: role-orchestrator.js ~ line 310 ~ getPermissionsByRoleID ~ permissions',
      permissions
    );

    const total = await dbManager.count({
      type: 'PermissionModel',
      filter: query
    });

    const result = await configureCommon.convertDataResponseMap(permissions);

    loggerFactory.info(
      `Function getPermissionsByRoleID Orchestrator has been end`
    );

    return {
      result: {
        data: result,
        total
      },
      msg: 'RoleGetPermissionsSuccess'
    };
  } catch (err) {
    loggerFactory.info(
      `Function getPermissionsByRoleID Orchestrator has error`,
      {
        args: returnUtils.returnErrorMessage(err)
      }
    );
    return Promise.reject(err);
  }
};

/**
 * @description Add Permissions To Roles By RoleID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addPermissionsToRoleByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(
      `Function addPermissionsToRoleByID Orchestrator has been start`
    );
    const { id: permissionID } = req.params;
    const { assignedRoles } = req.body;

    const result = await dbManager.updateMany({
      type: 'RoleModel',
      filter: {
        id: {
          $in: assignedRoles.map((e) => e.id)
        }
      },
      doc: {
        $push: {
          permissions: permissionID
        }
      }
    });

    return {
      result: {
        data: result
      },
      msg: 'RoleAddPermissionsSuccess'
    };
  } catch (err) {
    loggerFactory.info(
      `Function addPermissionsToRoleByID Orchestrator has error`,
      {
        args: returnUtils.returnErrorMessage(err)
      }
    );
    return Promise.reject(err);
  }
};

const roleOrchestrator = {
  getAllRole,
  createRole,
  getRoleByID,
  editRoleByID,
  deleteRoleByID,
  getPermissionsByRoleID,
  addPermissionsToRoleByID
};

export default roleOrchestrator;
