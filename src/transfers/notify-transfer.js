'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.NOTIFY_TRANSFER
);

const notifyTransfer = (data) => {
  loggerFactory.data('Func notifyTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const { _id, user, sender, template, details, createdAt } = data;

    response.id = _id;
    response.sender = convertDataUser(sender);
    response.receiver = convertDataUser(user);
    response.template = convertTemplate(template);
    response.details = details;
    response.createdAt = createdAt;

    loggerFactory.data('Func notifyTransfer has data');

    return response;
  }

  loggerFactory.data('Func notifyTransfer without data');
  return response;
};

const convertDataUser = (data) => {
  const { firstName, lastName } = data;

  return {
    firstName,
    lastName
  };
};

const convertTemplate = (template) => {
  const { topic, description, content, type } = template;
  return {
    topic,
    description,
    content,
    type
  };
};

export default notifyTransfer;
