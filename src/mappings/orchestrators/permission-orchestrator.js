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

const logger = loggerManager(
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllPermission Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllPermission Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'perS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllPermission Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createPermission Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorPermission(req.body);

    if (error) {
      throw commons.newError('perE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('PermissionModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('perE002');
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createPermission Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'perS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createPermission Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getPermission Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('perE003');
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getPermission Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'perS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getPermission Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updatePermission Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('perE003');
    }

    const error = validators.validatorPermission(req.body);

    if (error) {
      throw commons.newError('perE001');
    }

    const { name, activated } = req.body;
    const slug = utils.formatSlug(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('PermissionModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('perE002');
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updatePermission Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'perS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updatePermission Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deletePermission Orchestrator has been start'
    });

    const { id } = req.params;
    req.body = helpers.attributeHelper(req, req.body);
    const { updatedAt, updatedBy } = req.body;

    if (isEmpty(id)) {
      throw commons.newError('perE003');
    }

    const result = await repository.deleteOne({
      type: 'PermissionModel',
      id
    });

    await removePermissionsInRoles(id, updatedAt, updatedBy);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deletePermission Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'perS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deletePermission Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addRolesToPermission Orchestrator has been start'
    });

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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addRolesToPermission Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'perS006'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function addRolesToPermission has been error',
      args: utils.parseError(err)
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
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removePermissionsInRoles Orchestrator has been start'
  });

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

  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removePermissionsInRoles has been end'
  });
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
