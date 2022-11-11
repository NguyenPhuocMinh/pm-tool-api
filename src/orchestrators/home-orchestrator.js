'use strict';

import Promise from 'bluebird';

import profiles from '../../conf/profiles';
import constants from '../../constants';
import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HOME_ORCHESTRATOR
);

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
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

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
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const homeOrchestrator = {
  homePage,
  healthCheck
};

export default homeOrchestrator;
