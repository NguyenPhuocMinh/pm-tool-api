'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.CUSTOMER_TRANSFER
);

const customerTransfer = (data) => {
  loggerFactory.data('Func customerTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const {
      _id,
      firstName,
      lastName,
      email,
      phoneNumber,
      photoUrl,
      address,
      activated,
      createdAt,
      updatedAt
    } = data;

    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.email = email;
    response.phoneNumber = phoneNumber;
    response.photoUrl = photoUrl;
    response.address = address;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func customerTransfer has data');

    return response;
  }

  loggerFactory.data('Func customerTransfer without data');
  return response;
};

export default customerTransfer;
