'use strict';

import { isEmpty } from 'lodash';
import { successCodes } from '@resources';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.TEMPLATE_BUILD
);

export const newSuccessTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;
  const { msg, result } = args;

  try {
    const { path, method } = req;

    const template = {};

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function newSuccessTemplate has been start',
      args: {
        msg
      }
    });

    if (Object.prototype.hasOwnProperty.call(successCodes, msg)) {
      template.result = !isEmpty(result) ? result : null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = successCodes[msg].message;
      template.description = successCodes[msg].description;
      template.returnCode = successCodes[msg].returnCode;
      template.statusCode = successCodes[msg].statusCode;
    } else {
      template.result = null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = `Message name [${msg}] not supported`;
      template.description = successCodes[msg].description;
      template.returnCode = 1000;
      template.statusCode = 400;
    }

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function newSuccessTemplate has been end'
    });

    return template;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function newSuccessTemplate has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export const newErrorTemplate = (toolBox, args = {}) => {
  const { req } = toolBox;

  try {
    const { path, method } = req;

    const template = {};

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function newErrorTemplate has been start'
    });

    template.result = null;
    template.method = method;
    template.endpoint = path;
    template.name = args.name;
    template.message = args.message || 'Internal Error Server';
    template.description = args.description;
    template.returnCode = args.returnCode || 0;
    template.statusCode = args.statusCode || 500;

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function newErrorTemplate has been end'
    });

    return template;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function newErrorTemplate has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};
