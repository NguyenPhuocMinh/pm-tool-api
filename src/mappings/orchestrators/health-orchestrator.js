'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import logger from '@core/logger';
import { formatUtils } from '@core/utils';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HEALTH_ORCHESTRATOR
);

/**
 * @description Health Check Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const healthCheck = async (toolBox) => {
  try {
    loggerFactory.info(`Function healthCheck has been start`);
    return {
      result: {
        data: 'Service has been start success'
      },
      msg: 'GetHealthCheckSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function healthCheck has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const healthOrchestrator = {
  healthCheck
};

export default healthOrchestrator;
