'use strict';

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import { assign, isEmpty } from 'lodash';

// conf
import { options } from '@conf';

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

const loggerFactory = loggerManager(
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

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(
      req.query,
      ['email'],
      [{ isAdmin: false }]
    );
    const sort = helpers.sortHelper(req.query);

    const users = await repository.findAll({
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

    const total = await repository.count({
      type: 'UserModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(users);

    loggerFactory.info(`Function getAllUser has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'UserS001'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllUser has error`, {
      args: utils.formatErrorMsg(err)
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
    // validate inputs
    const error = validators.validatorUser(req.body);

    if (error) {
      throw commons.newError('UserE001');
    }

    const { firstName, lastName, email } = req.body;

    const fullName = utils.formatFullName(firstName, lastName);
    const slug = helpers.slugHelper(fullName);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('UserModel', {
      $or: [{ email }, { slug }]
    });

    if (isDuplicate) {
      throw commons.newError('UserE002');
    }

    let user = assign(req.body, {
      slug: slug
    });

    user = helpers.attributeHelper(req, user, 'create');

    // default password
    const hashDefaultPassword = bcrypt.hashSync(
      constants.DEFAULT_PASSWORD,
      options.bcryptOptions.salt
    );
    user.password = hashDefaultPassword;
    user.passwordConfirm = hashDefaultPassword;

    const data = await repository.createOne({
      type: 'UserModel',
      doc: user
    });

    const result = await transfers.userTransfer(data);

    loggerFactory.info(`Function createUser has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS002'
    };
  } catch (err) {
    loggerFactory.info(`Function createUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getUser Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    const user = await repository.getOne({
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

    const result = await transfers.userTransfer(user);

    loggerFactory.info(`Function getUser Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS003'
    };
  } catch (err) {
    loggerFactory.error(`Function getUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function updateUser has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    // validate inputs
    const error = validators.validatorUser(req.body);

    if (error) {
      throw commons.newError('UserE001');
    }

    const { firstName, lastName, email } = req.body;

    const fullName = utils.formatFullName(firstName, lastName);
    const slug = helpers.slugHelper(fullName);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('UserModel', {
      $or: [{ email }, { slug }],
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('UserE002');
    }

    let user = assign(req.body, {
      slug: slug
    });

    user = helpers.attributeHelper(req, user);

    loggerFactory.info(`Function updateUser Orchestrator has been end`);

    const data = await repository.updateOne({
      type: 'UserModel',
      id,
      doc: user
    });

    const result = await transfers.userTransfer(data);

    return {
      result: {
        data: result
      },
      msg: 'UserS004'
    };
  } catch (err) {
    loggerFactory.error(`Function updateUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function deleteUser has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { updatedAt, updatedBy } = req.body;

    const result = await repository.deleteOne({
      type: 'UserModel',
      id
    });

    await removeUserInRoles(id, updatedAt, updatedBy);

    loggerFactory.info(`Function deleteUser has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS005'
    };
  } catch (err) {
    loggerFactory.error(`Function deleteUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Change Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const changePassUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function changePassUser Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    // validate inputs
    const error = validators.validatorUserChangePass(req.body);

    if (error) {
      throw commons.newError('UserE004');
    }

    req.body = helpers.attributeHelper(req, req.body);

    const { currentPassword, newPassword, updatedAt, updatedBy } = req.body;

    const user = await repository.getOne({
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
      throw commons.newError('UserE005');
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

    const result = await transfers.userTransfer(user);

    loggerFactory.info(`Function changePassUser Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS006'
    };
  } catch (err) {
    loggerFactory.error(`Function changePassUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Set Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const setPassUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function setPassUser Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    /// validate inputs
    const error = validators.validatorUserSetPass(req.body);

    if (error) {
      throw commons.newError('UserE006');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { password, isPasswordTemporary, updatedAt, updatedBy } = req.body;

    // hash pass
    const hashPass = await bcrypt.hash(password, options.bcryptOptions.salt);

    const user = await repository.updateOne({
      type: 'UserModel',
      id,
      doc: {
        password: hashPass,
        passwordConfirm: hashPass,
        isPasswordSet: true,
        isPasswordTemporary: isPasswordTemporary,
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

    const result = await transfers.userTransfer(user);

    loggerFactory.info(`Function setPassUser Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS007'
    };
  } catch (err) {
    loggerFactory.error(`Function setPassUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Reset Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const resetPassUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function resetPassUser Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    // validate inputs
    const error = validators.validatorUserResetPass(req.body);

    if (error) {
      throw commons.newError('UserE007');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { password, updatedAt, updatedBy } = req.body;

    // hash pass
    const hashPass = await bcrypt.hash(password, options.bcryptOptions.salt);

    await repository.updateOne({
      type: 'UserModel',
      id,
      doc: {
        password: hashPass,
        passwordConfirm: hashPass,
        updatedAt,
        updatedBy
      }
    });

    loggerFactory.info(`Function resetPassUser Orchestrator has been end`);

    return {
      result: {
        data: null
      },
      msg: 'UserS008'
    };
  } catch (err) {
    loggerFactory.error(`Function resetPassUser Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Roles To User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addRolesToUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function addRolesToUser Orchestrator has been start`);

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('UserE003');
    }

    req.body = helpers.attributeHelper(req, req.body);
    const { availableRoles, assignedRoles, updatedAt, updatedBy } = req.body;

    const idsAssignedRoles = assignedRoles.map((e) => e.id);
    const idsUnAssignedRoles = availableRoles.map((e) => e.id);

    // add role to user
    const user = await repository.updateOne({
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

    const result = await transfers.userTransfer(user);

    loggerFactory.info(`Function addRolesToUser Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'UserS009'
    };
  } catch (err) {
    loggerFactory.error(`Function addRolesToUser has error`, {
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
const removeUserInRoles = async (id, updatedAt, updatedBy) => {
  loggerFactory.info(`Function removeUserInRoles has been start`);

  await repository.updateMany({
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
  getUser,
  updateUser,
  deleteUser,
  changePassUser,
  setPassUser,
  resetPassUser,
  addRolesToUser
};

export default userOrchestrator;