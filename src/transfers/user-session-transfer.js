'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.USER_SESSION_TRANSFER
);

const userSessionTransfer = (data) => {
  loggerFactory.data('Func userSessionTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, user, userAgent, ipAddress, startAccess, lastAccess } = data;

    response.id = _id;
    response.user = user;
    response.userAgent = userAgent;
    response.ipAddress = ipAddress;
    response.startAccess = startAccess;
    response.lastAccess = lastAccess;

    loggerFactory.data('Func userSessionTransfer has data');

    return response;
  }

  loggerFactory.data('Func userSessionTransfer without data');
  return response;
};

export default userSessionTransfer;
