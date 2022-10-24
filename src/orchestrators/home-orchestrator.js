'use strict';

import Promise from 'bluebird';

import configs from '../../configs';
import constants from '../../core/constants';
import logUtils from '../../core/utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HOME_ORCHESTRATOR
);

const HomePage = async (toolBox) => {
  try {
    loggerFactory.info(`Function HomePage has been start`);
    return {
      result: {
        data: `Welcome to homepage with version ${configs.version}`
      },
      msg: 'GetHomePageSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function HomePage has error`, {
      args: err.message
    });
    return Promise.reject(err);
  }
};

const Test = async (toolBox) => {
  try {
    loggerFactory.info(`Function Test has been start`);
    return {
      result: {
        data: `Welcome to homepage with version ${configs.version}`
      },
      msg: 'GetTestPageSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Test has error`, {
      args: err.message
    });
    return Promise.reject(err);
  }
};

const HomeOrchestrator = {
  HomePage,
  Test
};

export default HomeOrchestrator;
