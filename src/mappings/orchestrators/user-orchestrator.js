'use strict';

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import { assign, isEmpty } from 'lodash';

import constants from '@constants';
import { options } from '@conf';
import { formatSlug, formatFullName, formatErrorMessage } from '@utils';

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

import { userDTO } from '@shared/dtos';

import {
  validateUserCreate,
  validateUserUpdate,
  validateUserChangePass,
  validateUserSetPass
} from '@helpers';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.USER_ORCHESTRATOR
);

/**
 * @description Get All User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllUser has been start`);

    const { skip, limit } = createFilterPagination(req.query);
    const query = createFindQuery(req.query, ['email'], [{ isAdmin: false }]);
    const sort = createSortOrderQuery(req.query);

    const users = await dbManager.findAll({
      type: 'UserModel',
      filter: query,
      projection: {
        firstName: 1,
        lastName: 1,
        email: 1,
        isAdmin: 1,
        createdAt: 1,
        updatedAt: 1
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await dbManager.count({
      type: 'UserModel',
      filter: query
    });

    const response = await convertDataResponseMap(users);

    loggerFactory.info(`Function getAllUser has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'UserGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllUser has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createUser = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function createUser has been start`);

    const { firstName, lastName, email } = req.body;
    // validate inputs
    validateUserCreate(req.body);

    const fullName = formatFullName(firstName, lastName);
    const slug = formatSlug(fullName);

    // check duplicate slug
    const isDuplicate = await checkDuplicate('UserModel', {
      $or: [{ email }, { slug }]
    });

    if (isDuplicate) {
      throw buildNewError('DuplicateEmailUser');
    }

    let user = assign(req.body, {
      slug: slug
    });

    user = attributeFilter(user, 'create');

    // default password
    const hashDefaultPassword = bcrypt.hashSync(
      constants.DEFAULT_PASSWORD,
      options.bcryptOptions.salt
    );
    user.password = hashDefaultPassword;
    user.passwordConfirm = hashDefaultPassword;

    const data = await dbManager.createOne({
      type: 'UserModel',
      doc: user
    });

    const result = await userDTO(data);

    loggerFactory.info(`Function createUser has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function createUser has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getUserByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getUserByID Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    const user = await dbManager.getOne({
      type: 'UserModel',
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

    const result = await userDTO(user);

    loggerFactory.info(`Function getUserByID Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getUserByID Orchestrator has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const editUserByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function editUserByID Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    // validate inputs
    validateUserUpdate(req.body);

    const { firstName, lastName, email } = req.body;

    const fullName = formatFullName(firstName, lastName);
    const slug = formatSlug(fullName);

    // check duplicate slug
    const isDuplicate = await checkDuplicate('UserModel', {
      $or: [{ email }, { slug }],
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw buildNewError('DuplicateNameRole');
    }

    let user = assign(req.body, {
      slug: slug
    });

    user = attributeFilter(user);

    loggerFactory.info(`Function editUserByID Orchestrator has been end`);

    const data = await dbManager.updateOne({
      type: 'UserModel',
      id,
      doc: user
    });

    const result = await userDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'UserEditSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function editUserByID Orchestrator has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteUserByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deleteUserByID Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    req.body = attributeFilter(req.body);
    const { updatedAt, updatedBy } = req.body;

    const result = await dbManager.deleteOne({
      type: 'UserModel',
      id
    });

    await removeUserInRoles(id, updatedAt, updatedBy);

    loggerFactory.info(`Function deleteUserByID Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function deleteUserByID Orchestrator has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Change Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const changePasswordUserByID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(
      `Function changePasswordUserByID Orchestrator has been start`
    );

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    // validate inputs
    validateUserChangePass(req.body);

    req.body = attributeFilter(req.body);

    const { currentPassword, newPassword, updatedAt, updatedBy } = req.body;

    const user = await dbManager.getOne({
      type: 'UserModel',
      id,
      projection: {
        password: 1,
        passwordConfirm: 1
      }
    });

    // compare password in db
    const isValidCompare = await bcrypt.compare(currentPassword, user.password);
    if (!isValidCompare) {
      throw buildNewError('UserCurrentPasswordIsNotMatches');
    }

    // create new password
    const hashNewPass = await bcrypt.hash(
      newPassword,
      options.bcryptOptions.salt
    );

    user.password = hashNewPass;
    user.passwordConfirm = hashNewPass;
    user.updatedAt = updatedAt;
    user.updatedBy = updatedBy;

    await user.save();

    const result = await userDTO(user);

    loggerFactory.info(
      `Function changePasswordUserByID Orchestrator has been end`
    );

    return {
      result: {
        data: result
      },
      msg: 'UserChangePasswordSuccess'
    };
  } catch (err) {
    loggerFactory.info(
      `Function changePasswordUserByID Orchestrator has error`,
      {
        args: formatErrorMessage(err)
      }
    );
    return Promise.reject(err);
  }
};

/**
 * @description Add Roles To User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addRolesToUserByUserID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(
      `Function addRolesToUserByUserID Orchestrator has been start`
    );

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    req.body = attributeFilter(req.body);
    const { availableRoles, assignedRoles, updatedAt, updatedBy } = req.body;

    const idsAssignedRoles = assignedRoles.map((e) => e.id);
    const idsUnAssignedRoles = availableRoles.map((e) => e.id);

    // add role to user
    const user = await dbManager.updateOne({
      type: 'UserModel',
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

    // add users to role
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
                users: id
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
                users: id
              },
              updatedAt,
              updatedBy
            }
          }
        }
      ]
    });

    const result = await userDTO(user);

    loggerFactory.info(
      `Function addRolesToUserByUserID Orchestrator has been end`
    );

    return {
      result: {
        data: result
      },
      msg: 'UserAddRolesSuccess'
    };
  } catch (err) {
    loggerFactory.error(
      `Function addRolesToUserByUserID Orchestrator has error`,
      {
        args: formatErrorMessage(err)
      }
    );
    return Promise.reject(err);
  }
};

/**
 * @description Set Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const setPasswordByUserID = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(
      `Function setPasswordByUserID Orchestrator has been start`
    );

    const { id } = req.params;

    if (isEmpty(id)) {
      throw buildNewError('UserIDNotFound');
    }

    // validate inputs
    validateUserSetPass(req.body);

    req.body = attributeFilter(req.body);
    const { password, updatedAt, updatedBy } = req.body;

    // hash pass
    const hashPass = await bcrypt.hash(password, options.bcryptOptions.salt);

    const user = await dbManager.updateOne({
      type: 'UserModel',
      id,
      doc: {
        password: hashPass,
        passwordConfirm: hashPass,
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

    const result = await userDTO(user);

    loggerFactory.info(
      `Function setPasswordByUserID Orchestrator has been end`
    );

    return {
      result: {
        data: result
      },
      msg: 'UserSetPasswordSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function setPasswordByUserID Orchestrator has error`, {
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
const removeUserInRoles = async (id, updatedAt, updatedBy) => {
  loggerFactory.info(`Function removeUserInRoles has been start`);

  await dbManager.updateMany({
    type: 'RoleModel',
    filter: {
      users: {
        $elemMatch: {
          $eq: id
        }
      }
    },
    doc: {
      $pull: {
        users: id
      },
      updatedAt,
      updatedBy
    }
  });

  loggerFactory.info(`Function removeUserInRoles has been end`);
};

const userOrchestrator = {
  getAllUser,
  createUser,
  getUserByID,
  editUserByID,
  deleteUserByID,
  changePasswordUserByID,
  addRolesToUserByUserID,
  setPasswordByUserID
};

export default userOrchestrator;
