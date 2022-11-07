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
import { permissionDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.PERMISSION_ORCHESTRATOR
);

/**
 * @description Get All Permission Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllPermission = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllPermission has been start`);

    const { skip, limit } = configureCommon.createFilterPagination(req.query);
    const query = configureCommon.createFindQuery(req.query);
    const sort = configureCommon.createSortOrderQuery(req.query);

    const permissions = await dbManager.findAll({
      type: 'PermissionModel',
      filter: query,
      projection: {
        __v: 0,
        CreatedBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await dbManager.count({
      type: 'PermissionModel',
      filter: query
    });

    const response = await configureCommon.convertDataResponseMap(permissions);

    loggerFactory.info(`Function getAllPermission has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'PermissionGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllPermission has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Permission Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createPermission = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function createPermission has been start`);

    const { name } = req.body;

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('PermissionNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate(
      'PermissionModel',
      { slug }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = configureCommon.attributeFilter(permission, 'create');

    const data = await dbManager.createOne({
      type: 'PermissionModel',
      doc: permission
    });

    const result = await permissionDTO(data);

    loggerFactory.info(`Function createPermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function createPermission has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getPermissionByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getPermissionByID has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('PermissionIDNotFound');
    }

    const permission = await dbManager.getOne({
      type: 'PermissionModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'roles',
            select: 'id name'
          }
        ]
      }
    });

    const result = await permissionDTO(permission);

    loggerFactory.info(`Function getPermissionByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getPermissionByID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Edit Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const editPermissionByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function editPermissionByID has been start`);
    const { id } = req.params;
    const { name, activated } = req.body;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('PermissionIDNotFound');
    }

    if (isEmpty(name)) {
      throw errorCommon.BuildNewError('PermissionNameIsRequired');
    }

    const slug = formatUtils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate(
      'PermissionModel',
      { slug, _id: { $ne: id } }
    );

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = configureCommon.attributeFilter(permission);

    let data = await dbManager.updateOne({
      type: 'PermissionModel',
      id,
      doc: permission,
      options: {
        populate: [
          {
            path: 'roles',
            select: '_id name'
          }
        ]
      }
    });

    if (!activated) {
      if (!isEmpty(data.roles)) {
        data = await dbManager.updateOne({
          type: 'PermissionModel',
          id,
          doc: {
            roles: []
          }
        });

        await removePermissionsInRoles(
          id,
          permission.updatedAt,
          permission.updatedBy
        );
      }
    }

    const result = await permissionDTO(data);

    loggerFactory.info(`Function editPermissionByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionEditSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function editPermissionByID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deletePermissionByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deletePermissionByID has been start`);

    const { id } = req.params;
    req.body = configureCommon.attributeFilter(req.body);
    const { updatedAt, updatedBy } = req.body;

    if (isEmpty(id)) {
      throw errorCommon.BuildNewError('PermissionIDNotFound');
    }

    const result = await dbManager.deleteOne({
      type: 'PermissionModel',
      id
    });

    await removePermissionsInRoles(id, updatedAt, updatedBy);

    loggerFactory.info(`Function deletePermissionByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function deletePermissionByID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Roles To Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addRolesToPermissionByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function addRolesToPermissionByID has been start`);

    const { id } = req.params;

    req.body = configureCommon.attributeFilter(req.body);
    const { availableRoles, assignedRoles, updatedAt, updatedBy } = req.body;

    const idsAssignedRoles = assignedRoles.map((e) => e.id);
    const idsUnAssignedRoles = availableRoles.map((e) => e.id);

    // add role to permission
    const permission = await dbManager.updateOne({
      type: 'PermissionModel',
      id,
      doc: {
        roles: idsAssignedRoles,
        updatedAt,
        updatedBy
      },
      options: {
        populate: [
          {
            path: 'roles',
            select: 'id name'
          }
        ]
      }
    });

    // add permission to role
    await dbManager.bulkWrite({
      type: 'RoleModel',
      pipelines: [
        {
          updateMany: {
            filter: {
              _id: {
                $in: idsAssignedRoles
              }
            },
            update: {
              $addToSet: {
                permissions: id
              },
              updatedAt,
              updatedBy
            }
          }
        },
        {
          updateMany: {
            filter: {
              _id: {
                $in: idsUnAssignedRoles
              }
            },
            update: {
              $pull: {
                permissions: id
              },
              updatedAt,
              updatedBy
            }
          }
        }
      ]
    });

    const result = await permissionDTO(permission);

    loggerFactory.info(`Function addRolesToPermissionByID has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionAddRolesSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function addRolesToPermissionByID has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const removePermissionsInRoles = async (id, updatedAt, updatedBy) => {
  loggerFactory.info(`Function removePermissionsInRoles has been start`);

  await dbManager.updateMany({
    type: 'RoleModel',
    filter: {
      permissions: {
        $elemMatch: {
          $eq: id
        }
      }
    },
    doc: {
      $pull: {
        permissions: id
      },
      updatedAt,
      updatedBy
    }
  });

  loggerFactory.info(`Function removePermissionsInRoles has been end`);
};

const permissionOrchestrator = {
  getAllPermission,
  createPermission,
  getPermissionByID,
  editPermissionByID,
  deletePermissionByID,
  addRolesToPermissionByID
};

export default permissionOrchestrator;
