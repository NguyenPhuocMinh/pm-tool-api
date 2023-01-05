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
  constants.STRUCT_ORCHESTRATORS.ROLE_ORCHESTRATOR
);

/**
 * @description Get All Role Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllRole Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const roles = await repository.findAll({
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

    const total = await repository.count({
      type: 'RoleModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(roles);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllRole Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'roleS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllRole Orchestrator has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createRole Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorRole(req.body);

    if (error) {
      throw commons.newError('roleE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('RoleModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('roleE002');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = helpers.attributeHelper(req, role, 'create');

    const data = await repository.createOne({
      type: 'RoleModel',
      doc: role
    });

    const result = transfers.roleTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createRole Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'roleS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createRole Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getRole Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('roleE003');
    }

    const role = await repository.getOne({
      type: 'RoleModel',
      id,
      projection: {
        __v: 0
      }
    });

    const result = transfers.roleTransfer(role);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getRole Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'roleS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getRole Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateRole Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('roleE003');
    }

    const error = validators.validatorRole(req.body);

    if (error) {
      throw commons.newError('roleE001');
    }

    const { name, activated } = req.body;

    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('RoleModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('roleE002');
    }

    let role = assign(req.body, {
      slug: slug
    });

    role = helpers.attributeHelper(req, role);

    if (!activated) {
      await removeRolesInUserAndPermission(id, role.updatedAt, role.updatedBy);
    }

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateRole Orchestrator has been end'
    });

    const data = await repository.updateOne({
      type: 'RoleModel',
      id,
      doc: role
    });

    const result = transfers.roleTransfer(data);

    return {
      result: {
        data: result
      },
      msg: 'roleS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateRole Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Role By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteRole Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('roleE003');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { updatedAt, updatedBy } = req.body;

    const result = await repository.deleteOne({
      type: 'RoleModel',
      id
    });

    await removeRolesInUserAndPermission(id, updatedAt, updatedBy);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteRole Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'roleS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteRole Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Users In Role Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getUsersInRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getUsersInRole Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('roleE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const query = {
      roles: {
        $elemMatch: {
          $eq: id
        }
      }
    };

    const users = await repository.findAll({
      type: 'UserModel',
      filter: query,
      projection: {
        id: 1,
        firstName: 1,
        lastName: 1,
        email: 1
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await repository.count({
      type: 'UserModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(users);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getUsersInRole Orchestrator has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'roleS006'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getUsersInRole Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Permissions In Role Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getPermissionsInRole = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getPermissionsInRole Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('roleE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const query = {
      roles: {
        $elemMatch: {
          $eq: id
        }
      }
    };

    const permissions = await repository.findAll({
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

    const total = await repository.count({
      type: 'PermissionModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(permissions);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getPermissionsInRole Orchestrator has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'roleS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getPermissionsInRole Orchestrator has been error',
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
const removeRolesInUserAndPermission = async (id, updatedAt, updatedBy) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message:
      'Function removeRolesInUserAndPermission Orchestrator has been start'
  });

  await repository.updateMany({
    type: 'UserModel',
    filter: {
      users: {
        $elemMatch: {
          $eq: id
        }
      }
    },
    doc: {
      $pull: {
        roles: id
      },
      updatedAt,
      updatedBy
    }
  });

  await repository.updateMany({
    type: 'PermissionModel',
    filter: {
      users: {
        $elemMatch: {
          $eq: id
        }
      }
    },
    doc: {
      $pull: {
        roles: id
      },
      updatedAt,
      updatedBy
    }
  });

  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeRolesInUserAndPermission Orchestrator has been end'
  });
};

const roleOrchestrator = {
  getAllRole,
  createRole,
  getRole,
  updateRole,
  deleteRole,
  getUsersInRole,
  getPermissionsInRole
};

export default roleOrchestrator;
