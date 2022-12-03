'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.PROJECT_TRANSFER
);

const projectTransfer = (data) => {
  loggerFactory.data('Func projectTransfer has been start');
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

    loggerFactory.data('Func projectTransfer has data');

    return response;
  }

  loggerFactory.data('Func projectTransfer without data');
  return response;
};

export default projectTransfer;
