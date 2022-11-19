'use strict';

import { isEmpty, map } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.AUTH_DTO
);

const authDTO = (data = {}, attributes = {}) => {
  loggerFactory.data('Func authDTO has been start');
  const response = {};
  const { permissions } = attributes;

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
    response.roles = convertMap(roles);
    response.permissions = convertMap(permissions);
    response.avatarURL = avatarURL;
    response.backgroundURL = backgroundURL;

    loggerFactory.data('Func authDTO has data');

    return response;
  }

  loggerFactory.data('Func authDTO without data');
  return response;
};

const convertMap = (data = []) => {
  const dataMap = map(data, (e) => e.name);

  return dataMap;
};

export default authDTO;
