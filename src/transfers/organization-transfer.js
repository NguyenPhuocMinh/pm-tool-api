'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.ORGANIZATION_TRANSFER
);

const organizationTransfer = (data) => {
  loggerFactory.data('Func organizationTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, activated, createdAt, updatedAt } = data;

    response.id = _id;
    response.name = name;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func organizationTransfer has data');

    return response;
  }

  loggerFactory.data('Func organizationTransfer without data');
  return response;
};

export default organizationTransfer;
