'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

import constants from '@constants';
import { formatSlug, formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import dbManager from '@core/database';
import {
  buildNewError,
  createFilterPagination,
  createFindQuery,
  createSortOrderQuery,
  convertDataResponseMap,
  checkDuplicate,
  attributeFilter
} from '@core/common';

import { permissionDTO } from 'src/shared/dtos';

const loggerFactory = logger.createLogger(
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

    const { skip, limit } = createFilterPagination(req.query);
    const query = createFindQuery(req.query);
    const sort = createSortOrderQuery(req.query);

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

    const response = await convertDataResponseMap(permissions);

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
      args: formatErrorMessage(err)
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
      throw buildNewError('PermissionNameIsRequired');
    }

    const slug = formatSlug(name);

    // check duplicate slug
    const isDuplicate = await checkDuplicate('PermissionModel', { slug });

    if (isDuplicate) {
      throw buildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = attributeFilter(permission, 'create');

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
      args: formatErrorMessage(err)
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
      throw buildNewError('PermissionIDNotFound');
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
      args: formatErrorMessage(err)
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
      throw buildNewError('PermissionIDNotFound');
    }

    if (isEmpty(name)) {
      throw buildNewError('PermissionNameIsRequired');
    }

    const slug = formatSlug(name);
    // check duplicate slug
    const isDuplicate = await checkDuplicate('PermissionModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw buildNewError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = attributeFilter(permission);

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
      args: formatErrorMessage(err)
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
    req.body = attributeFilter(req.body);
    const { updatedAt, updatedBy } = req.body;

    if (isEmpty(id)) {
      throw buildNewError('PermissionIDNotFound');
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
      args: formatErrorMessage(err)
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

    req.body = attributeFilter(req.body);
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
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Helper
 * @param {*} id
 * @param {*} updatedAt
 * @param {*} updatedBy
 */
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
