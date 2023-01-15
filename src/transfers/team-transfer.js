'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.PROJECT_TRANSFER
);

const teamTransfer = (data) => {
  loggerFactory.data('Func teamTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, project, members, activated, createdAt, updatedAt } =
      data;

    response.id = _id;
    response.name = name;
    response.project = project;
    response.members = members;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func teamTransfer has data');

    return response;
  }

  loggerFactory.data('Func teamTransfer without data');
  return response;
};

export default teamTransfer;
