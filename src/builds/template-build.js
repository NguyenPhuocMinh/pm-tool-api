'use strict';

import { isEmpty } from 'lodash';
import { successCodes } from '@configs';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.TEMPLATE_BUILD
);

export const newSuccessTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;
  const { msg, result } = args;

  try {
    const { path, method } = req;

    const template = {};

    loggerFactory.info('NewSuccessTemplate has been start');

    if (Object.prototype.hasOwnProperty.call(successCodes, msg)) {
      loggerFactory.info('Message hasOwnProperty in messageCodes', {
        args: msg
      });
      template.result = !isEmpty(result) ? result : null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = successCodes[msg].message;
      template.returnCode = successCodes[msg].returnCode;
      template.statusCode = successCodes[msg].statusCode;
    } else {
      loggerFactory.error('Message not hasOwnProperty in messageCodes', {
        args: msg
      });
      template.result = null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = `Message name [${msg}] not supported`;
      template.returnCode = 1000;
      template.statusCode = 400;
    }

    loggerFactory.info('NewSuccessTemplate has been end');

    return template;
  } catch (err) {
    loggerFactory.error('NewSuccessTemplate has error', {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

export const newErrorTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;

  try {
    const { path, method } = req;

    const template = {};

    loggerFactory.info('NewErrorTemplate has been start');

    template.result = null;
    template.method = method;
    template.endpoint = path;
    template.name = args.name;
    template.message = args.message || 'Internal Error Server';
    template.returnCode = args.returnCode || 0;
    template.statusCode = args.statusCode || 500;

    loggerFactory.info('NewErrorTemplate has been end');

    return template;
  } catch (err) {
    loggerFactory.error('NewErrorTemplate has error', {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};
