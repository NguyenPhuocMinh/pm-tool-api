'use strict';

import { isEmpty, differenceBy, toString } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';

import dbManager from '@core/database';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.USER_DTO
);

const userDTO = async (data) => {
  loggerFactory.data('Func userDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const {
      _id,
      firstName,
      lastName,
      email,
      isAdmin,
      roles,
      createdAt,
      updatedAt
    } = data;

    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.email = email;
    response.isAdmin = isAdmin;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    const listRole = await dbManager.findAll({
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

    loggerFactory.data('Func userDTO has data');

    return response;
  }

  loggerFactory.data('Func userDTO without data');
  return response;
};

export default userDTO;
