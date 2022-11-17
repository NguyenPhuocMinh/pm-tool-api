'use strict';

import { assign, get } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';
import { templateCommon } from '@core/common';
import { formatUtils } from '@core/utils';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.RESPONSE_COMMON
);

const BuildSuccessResponse = (toolBox, args) => {
  try {
    loggerFactory.info(`BuildSuccessResponse has been start`);
    const { res } = toolBox;
    const header = get(args, 'headers');

    const templateSuccessResponse = templateCommon.BuildNewSuccessTemplate(
      toolBox,
      args
    );

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
      args: formatUtils.formatErrorMessage(err)
    });
    throw err;
  }
};

const BuildErrorResponse = (toolBox, args) => {
  try {
    loggerFactory.error(`BuildErrorResponse has been start`);
    const { res } = toolBox;

    const templateErrorResponse = templateCommon.BuildNewErrorTemplate(
      toolBox,
      args
    );

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
      args: formatUtils.formatErrorMessage(err)
    });
    throw err;
  }
};

const responseCommon = {
  BuildSuccessResponse,
  BuildErrorResponse
};

export default responseCommon;
