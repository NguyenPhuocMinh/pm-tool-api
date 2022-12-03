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

const loggerFactory = loggerManager(
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

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const permissions = await repository.findAll({
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

    const total = await repository.count({
      type: 'PermissionModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(permissions);

    loggerFactory.info(`Function getAllPermission has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'PermissionGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllPermission has error`, {
      args: utils.formatErrorMsg(err)
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
      throw commons.newError('PermissionNameIsRequired');
    }

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('PermissionModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = helpers.attributeHelper(req, permission, 'create');

    const data = await repository.createOne({
      type: 'PermissionModel',
      doc: permission
    });

    const result = await transfers.permissionTransfer(data);

    loggerFactory.info(`Function createPermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionCreateSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function createPermission has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getPermission = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getPermission has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('PermissionIDNotFound');
    }

    const permission = await repository.getOne({
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

    const result = await transfers.permissionTransfer(permission);

    loggerFactory.info(`Function getPermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getPermission has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updatePermission = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function updatePermission has been start`);
    const { id } = req.params;
    const { name, activated } = req.body;

    if (isEmpty(id)) {
      throw commons.newError('PermissionIDNotFound');
    }

    if (isEmpty(name)) {
      throw commons.newError('PermissionNameIsRequired');
    }

    const slug = utils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('PermissionModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('DuplicateNamePermission');
    }

    let permission = assign(req.body, {
      slug: slug
    });

    permission = helpers.attributeHelper(req, permission);

    let data = await repository.updateOne({
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
        data = await repository.updateOne({
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

    const result = await transfers.permissionTransfer(data);

    loggerFactory.info(`Function updatePermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionEditSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function updatePermission has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deletePermission = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deletePermission has been start`);

    const { id } = req.params;
    req.body = helpers.attributeHelper(req, req.body);
    const { updatedAt, updatedBy } = req.body;

    if (isEmpty(id)) {
      throw commons.newError('PermissionIDNotFound');
    }

    const result = await repository.deleteOne({
      type: 'PermissionModel',
      id
    });

    await removePermissionsInRoles(id, updatedAt, updatedBy);

    loggerFactory.info(`Function deletePermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function deletePermission has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Roles To Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addRolesToPermission = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function addRolesToPermission has been start`);

    const { id } = req.params;

    req.body = helpers.attributeHelper(req, req.body);
    const { availableRoles, assignedRoles, updatedAt, updatedBy } = req.body;

    const idsAssignedRoles = assignedRoles.map((e) => e.id);
    const idsUnAssignedRoles = availableRoles.map((e) => e.id);

    // add role to permission
    const permission = await repository.updateOne({
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
    await repository.bulkWrite({
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

    const result = await transfers.permissionTransfer(permission);

    loggerFactory.info(`Function addRolesToPermission has been end`);

    return {
      result: {
        data: result
      },
      msg: 'PermissionAddRolesSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function addRolesToPermission has error`, {
      args: utils.formatErrorMsg(err)
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

  await repository.updateMany({
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
  getPermission,
  updatePermission,
  deletePermission,
  addRolesToPermission
};

export default permissionOrchestrator;
