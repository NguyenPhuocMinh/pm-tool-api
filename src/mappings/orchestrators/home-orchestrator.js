'use strict';

import Promise from 'bluebird';

// conf
import { profiles } from '@conf';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
      msg: 's001'
    };
  } catch (err) {
    loggerFactory.error(`Function homePage has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const homeOrchestrator = {
  homePage
};

export default homeOrchestrator;
