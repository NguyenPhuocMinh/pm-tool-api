'use strict';

import { isEmpty } from 'lodash';

import constants from '@constants';
import { successCodes } from '@configs';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.TEMPLATE_COMMON
);

export const buildNewSuccessTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;
  const { msg, result } = args;

  try {
    const { path, method } = req;

    const template = {};

    loggerFactory.info('BuildNewTemplate has been start');

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
      template.result = {};
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = `Message name [${msg}] not supported`;
      template.returnCode = 1000;
      template.statusCode = 400;
    }

    loggerFactory.info('BuildNewTemplate has been end');

    return template;
  } catch (err) {
    loggerFactory.error('BuildNewTemplate has error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

export const buildNewErrorTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;

  try {
    const { path, method } = req;

    const template = {};

    loggerFactory.info('BuildNewErrorTemplate has been start');

    template.result = {};
    template.method = method;
    template.endpoint = path;
    template.name = args.name;
    template.message = args.message || 'Internal Error Server';
    template.returnCode = args.returnCode || 0;
    template.statusCode = args.statusCode || 500;

    loggerFactory.info('BuildNewErrorTemplate has been end');

    return template;
  } catch (err) {
    loggerFactory.error('BuildNewErrorTemplate has error', {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};
