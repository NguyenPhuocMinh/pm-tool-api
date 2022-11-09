'use strict';

import { isEmpty } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.USER_DTO
);

const userDTO = (data) => {
  loggerFactory.data('Func userDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, firstName, lastName, email, isAdmin, createdAt, updatedAt } = data;

    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.email = email;
    response.isAdmin = isAdmin;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func userDTO has data');

    return response;
  }

  loggerFactory.data('Func userDTO without data');
  return response;
};

export default userDTO;
