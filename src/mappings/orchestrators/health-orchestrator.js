'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HEALTH_ORCHESTRATOR
);

/**
 * @description Health Check Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const healthCheck = async (toolBox) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function healthCheck has been start'
    });
    return {
      result: {
        data: 'Service has been start success'
      },
      msg: 's002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function healthCheck has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const healthOrchestrator = {
  healthCheck
};

export default healthOrchestrator;
