'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_DTO.PROJECT_DTO
);

const projectDTO = (data) => {
  loggerFactory.data('Func projectDTO has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, startDay, endDay, activated, createdAt } = data;

    response.id = _id;
    response.name = name;
    response.startDay = startDay;
    response.endDay = endDay;
    response.activated = activated;
    response.createdAt = createdAt;

    loggerFactory.data('Func projectDTO has data');

    return response;
  }

  loggerFactory.data('Func projectDTO without data');
  return response;
};

export default projectDTO;
