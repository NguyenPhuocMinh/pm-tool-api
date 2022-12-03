'use strict';

import { isEmpty, differenceBy, toString } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.PERMISSION_TRANSFER
);

const permissionTransfer = async (data) => {
  loggerFactory.data('Func permissionTransfer has been start');
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

    loggerFactory.data('Func permissionTransfer has data');

    return response;
  }

  loggerFactory.data('Func permissionTransfer without data');
  return response;
};

export default permissionTransfer;
