'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.ROLE_DTO
);

const roleDTO = (data) => {
  loggerFactory.data('Func roleDTO has been start');
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

    loggerFactory.data('Func roleDTO has data');

    return response;
  }

  loggerFactory.data('Func roleDTO without data');
  return response;
};

export default roleDTO;
