'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.ROLE_TRANSFER
);

const roleTransfer = (data) => {
  loggerFactory.data('Func roleTransfer has been start');
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

    loggerFactory.data('Func roleTransfer has data');

    return response;
  }

  loggerFactory.data('Func roleTransfer without data');
  return response;
};

export default roleTransfer;
