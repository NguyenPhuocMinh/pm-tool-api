'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.CATEGORY_TRANSFER
);

const productTransfer = (data) => {
  loggerFactory.data('Func productTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const {
      _id,
      name,
      image,
      description,
      price,
      discount,
      category,
      activated,
      createdAt,
      updatedAt
    } = data;

    response.id = _id;
    response.name = name;
    response.image = image;
    response.description = description;
    response.price = price;
    response.category = category;
    response.discount = discount;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;

    loggerFactory.data('Func productTransfer has data');

    return response;
  }

  loggerFactory.data('Func productTransfer without data');
  return response;
};

export default productTransfer;
