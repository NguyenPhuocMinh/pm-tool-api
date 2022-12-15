'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.NOTIFY_TEMPLATE_TRANSFER
);

const notifyTemplateTransfer = (data) => {
  loggerFactory.data('Func notifyTemplateTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, topic, description, content, type, activated, createdAt } =
      data;

    response.id = _id;
    response.topic = topic;
    response.description = description;
    response.content = content;
    response.type = type;
    response.activated = activated;
    response.createdAt = createdAt;

    loggerFactory.data('Func notifyTemplateTransfer has data');

    return response;
  }

  loggerFactory.data('Func notifyTemplateTransfer without data');
  return response;
};

export default notifyTemplateTransfer;
