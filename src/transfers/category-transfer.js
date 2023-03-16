'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.CATEGORY_TRANSFER
);

const categoryTransfer = (data) => {
  loggerFactory.data('Func categoryTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, name, image, activated, createdAt, updatedAt } = data;

    response.id = _id;
    response.name = name;
    response.image = image;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func categoryTransfer has data');

    return response;
  }

  loggerFactory.data('Func categoryTransfer without data');
  return response;
};

export default categoryTransfer;
