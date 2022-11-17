'use strict';

import { isEmpty, map, compact, flatten } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.AUTH_DTO
);

const authDTO = (data) => {
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
      avatarURL,
      backgroundURL
    } = data;

    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.fullName = `${lastName} ${firstName}`;
    response.email = email;
    response.locale = locale || 'en';
    response.isAdmin = isAdmin;
    response.roles = convertRolesAndPermissions(roles).roleMap;
    response.permissions = convertRolesAndPermissions(roles).permissionMap;
    response.avatarURL = avatarURL;
    response.backgroundURL = backgroundURL;

    loggerFactory.data('Func authDTO has data');

    return response;
  }

  loggerFactory.data('Func authDTO without data');
  return response;
};

const convertRolesAndPermissions = (roles) => {
  const roleMap = map(roles, (role) => role.name);

  const permissionMap = compact(
    flatten(
      map(roles, (role) => {
        const permissions = [];
        permissions.push(role.permissions);
        return permissions;
      })
    ).map((p) => p.name)
  );

  return {
    roleMap,
    permissionMap
  };
};

export default authDTO;
