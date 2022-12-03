'use strict';

import { assign, get } from 'lodash';

import constants from '@constants';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_BUILDS.RESPONSE_BUILD
);

export const successResponse = (toolBox, args) => {
  try {
    loggerFactory.info(`SuccessResponse has been start`);
    const { res } = toolBox;
    const header = get(args, 'headers');

    const templateSuccessResponse = builds.newSuccessTemplate(toolBox, args);

    const headers = assign({}, header ?? {}, {
      'X-Return-Code': templateSuccessResponse.returnCode
    });

    loggerFactory.info(`SuccessResponse has been end`);

    return res
      .status(templateSuccessResponse.statusCode)
      .set(headers)
      .send(templateSuccessResponse);
  } catch (err) {
    loggerFactory.error(`SuccessResponse has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

export const errorResponse = (toolBox, args) => {
  try {
    loggerFactory.error(`ErrorResponse has been start`);
    const { res } = toolBox;

    const templateErrorResponse = builds.newErrorTemplate(toolBox, args);

    const headers = {
      'X-Return-Code': templateErrorResponse.returnCode
    };

    loggerFactory.error(`ErrorResponse has been end`);

    return res
      .status(templateErrorResponse.statusCode)
      .set(headers)
      .send(templateErrorResponse);
  } catch (err) {
    loggerFactory.error(`ErrorResponse has been error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};
