'use strict';

import { isEmpty } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.PERMISSION_DTO
);

const permissionDTO = (data) => {
  loggerFactory.data('Func permissionDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, description, activated, createdAt, updatedAt } = data;

    response.id = _id;
    response.name = name;
    response.description = description;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func permissionDTO has data');

    return response;
  }

  loggerFactory.data('Func permissionDTO without data');
  return response;
};

export default permissionDTO;
