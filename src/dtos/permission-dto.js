'use strict';

import { isEmpty, differenceBy, toString } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

import dbManager from '../../core/database';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.PERMISSION_DTO
);

const permissionDTO = async (data) => {
  loggerFactory.data('Func permissionDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, description, roles, activated, createdAt, updatedAt } =
      data;

    response.id = _id;
    response.name = name;
    response.description = description;
    response.activated = activated;
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

    loggerFactory.data('Func permissionDTO has data');

    return response;
  }

  loggerFactory.data('Func permissionDTO without data');
  return response;
};

export default permissionDTO;
