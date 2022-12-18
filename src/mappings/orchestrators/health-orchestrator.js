'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
      msg: 's002'
    };
  } catch (err) {
    loggerFactory.error(`Function healthCheck has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const healthOrchestrator = {
  healthCheck
};

export default healthOrchestrator;
