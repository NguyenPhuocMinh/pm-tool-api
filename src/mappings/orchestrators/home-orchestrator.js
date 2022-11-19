'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import { profiles } from '@conf';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HOME_ORCHESTRATOR
);

/**
 * @description Home Page Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const homePage = async (toolBox) => {
  try {
    loggerFactory.info(`Function HomePage has been start`);
    return {
      result: {
        data: `Welcome to homepage with version ${profiles.VERSION}`
      },
      msg: 'GetHomePageSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function homePage has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const homeOrchestrator = {
  homePage
};

export default homeOrchestrator;
