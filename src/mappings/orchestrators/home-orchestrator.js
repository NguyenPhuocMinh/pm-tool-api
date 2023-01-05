'use strict';

import Promise from 'bluebird';

// conf
import { profiles } from '@conf';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HOME_ORCHESTRATOR
);

/**
 * @description Home Page Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const homePage = async (toolBox) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function HomePage has been start'
    });
    return {
      result: {
        data: `Welcome to homepage with version ${profiles.VERSION}`
      },
      msg: 's001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function HomePage has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const homeOrchestrator = {
  homePage
};

export default homeOrchestrator;
