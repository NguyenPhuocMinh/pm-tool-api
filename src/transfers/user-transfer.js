'use strict';

import { isEmpty, differenceBy, toString } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.USER_TRANSFER
);

const userTransfer = async (data) => {
  loggerFactory.data('Func userTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const {
      _id,
      isAdmin,
      firstName,
      lastName,
      email,
      roles,
      team,
      isPasswordSet,
      isPasswordTemporary,
      createdAt,
      updatedAt
    } = data;

    response.id = _id;
    response.isAdmin = isAdmin;
    response.firstName = firstName;
    response.lastName = lastName;
    response.email = email;
    response.teamId = team?._id;
    response.teamName = team?.name;
    response.isPasswordSet = isPasswordSet;
    response.isPasswordTemporary = isPasswordTemporary;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    const listRole = await repository.findAll({
      type: 'RoleModel',
      filter: {
        deleted: false,
        activated: true
      },
      projection: {
        _id: 1,
        name: 1
      }
    });

    const roleMap = roles.map((r) => {
      return {
        id: toString(r._id),
        name: r.name
      };
    });

    const listRoleMap = listRole.map((e) => {
      return {
        id: toString(e._id),
        name: e.name
      };
    });

    response.availableRoles = differenceBy(listRoleMap, roleMap, 'id');
    response.assignedRoles = roleMap;

    loggerFactory.data('Func userTransfer has data');

    return response;
  }

  loggerFactory.data('Func userTransfer without data');
  return response;
};

export default userTransfer;
