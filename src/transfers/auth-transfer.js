'use strict';

import { isEmpty, map } from 'lodash';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.AUTH_TRANSFER
);

const authTransfer = async (data = {}) => {
  loggerFactory.data('Func authDTO has been start');
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
      locale,
      picture,
      isPasswordTemporary
    } = data;

    const permissions = await getPermissions(roles);

    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.fullName = `${lastName} ${firstName}`;
    response.email = email;
    response.locale = locale || 'en';
    response.isAdmin = isAdmin;
    response.roles = convertMap(roles);
    response.permissions = convertMap(permissions);
    response.isPasswordTemporary = isPasswordTemporary;
    response.picture = picture;

    loggerFactory.data('Func authDTO has data');

    return response;
  }

  loggerFactory.data('Func authDTO without data');
  return response;
};

const getPermissions = async (roles = []) => {
  try {
    const permissions = repository.findAll({
      type: 'PermissionModel',
      filter: {
        roles: {
          $in: roles?.map((r) => r._id)
        }
      },
      projection: {
        name: 1
      }
    });

    return permissions;
  } catch (err) {
    loggerFactory.error(`Function getPermissions has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

const convertMap = (data = []) => {
  const dataMap = map(data, (e) => e.name);

  return dataMap;
};

export default authTransfer;
