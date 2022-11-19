'use strict';

import { assign, get } from 'lodash';

import constants from '@constants';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import { buildNewSuccessTemplate, buildNewErrorTemplate } from '@core/common';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.RESPONSE_COMMON
);

export const buildSuccessResponse = (toolBox, args) => {
  try {
    loggerFactory.info(`BuildSuccessResponse has been start`);
    const { res } = toolBox;
    const header = get(args, 'headers');

    const templateSuccessResponse = buildNewSuccessTemplate(toolBox, args);

    const headers = assign({}, header ?? {}, {
      'X-Return-Code': templateSuccessResponse.returnCode
    });

    loggerFactory.info(`BuildSuccessResponse has been end`);

    return res
      .status(templateSuccessResponse.statusCode)
      .set(headers)
      .send(templateSuccessResponse);
  } catch (err) {
    loggerFactory.error(`BuildSuccessResponse has error`, {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

export const buildErrorResponse = (toolBox, args) => {
  try {
    loggerFactory.error(`BuildErrorResponse has been start`);
    const { res } = toolBox;

    const templateErrorResponse = buildNewErrorTemplate(toolBox, args);

    const headers = {
      'X-Return-Code': templateErrorResponse.returnCode
    };

    loggerFactory.error(`BuildErrorResponse has been end`);

    return res
      .status(templateErrorResponse.statusCode)
      .set(headers)
      .send(templateErrorResponse);
  } catch (err) {
    loggerFactory.error(`BuildErrorResponse has been error`, {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};
