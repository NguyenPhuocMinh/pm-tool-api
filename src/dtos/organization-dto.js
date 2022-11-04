'use strict';

import { isEmpty } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.ORGANIZATION_DTO
);

const organizationDTO = (data) => {
  loggerFactory.data('Func organizationDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, activated, createdAt, updatedAt } = data;

    response.id = _id;
    response.name = name;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func organizationDTO has data');

    return response;
  }

  loggerFactory.data('Func organizationDTO without data');
  return response;
};

export default organizationDTO;
