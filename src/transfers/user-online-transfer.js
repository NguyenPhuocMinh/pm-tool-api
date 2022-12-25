'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.USER_ONLINE_TRANSFER
);

const userOnlineTransfer = (data, request) => {
  loggerFactory.data('Func userOnlineTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, firstName, lastName } = data;

    const userAgent = request.headers['user-agent'];
    const ipAddress = request.headers.host;

    response.id = _id;
    response.fullName = `${lastName} ${firstName}`;
    response.userAgent = userAgent;
    response.ipAddress = ipAddress;

    loggerFactory.data('Func userOnlineTransfer has data');

    return response;
  }

  loggerFactory.data('Func userOnlineTransfer without data');
  return response;
};

export default userOnlineTransfer;
