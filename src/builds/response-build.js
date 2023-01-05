'use strict';

import { assign, get } from 'lodash';

import constants from '@constants';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.RESPONSE_BUILD
);

export const successResponse = (toolBox, args) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function successResponse has been start'
    });
    const { res } = toolBox;
    const header = get(args, 'headers');

    const templateSuccessResponse = builds.newSuccessTemplate(toolBox, args);

    const headers = assign({}, header ?? {}, {
      'X-Return-Code': templateSuccessResponse.returnCode
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function successResponse has been end'
    });

    return res
      .status(templateSuccessResponse.statusCode)
      .set(headers)
      .send(templateSuccessResponse);
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function successResponse has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export const errorResponse = (toolBox, args) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been start',
      args
    });
    const { res } = toolBox;

    const templateErrorResponse = builds.newErrorTemplate(toolBox, args);

    const headers = {
      'X-Return-Code': templateErrorResponse.returnCode
    };

    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been end'
    });

    return res
      .status(templateErrorResponse.statusCode)
      .set(headers)
      .send(templateErrorResponse);
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};
