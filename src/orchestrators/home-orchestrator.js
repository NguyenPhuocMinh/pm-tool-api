'use strict';

import Promise from 'bluebird';

import profiles from '../../conf/profiles';
import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.HOME_ORCHESTRATOR
);

const HomePage = async (toolBox) => {
  try {
    loggerFactory.info(`Function HomePage has been start`);
    return {
      result: {
        data: `Welcome to homepage with version ${profiles.VERSION}`
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

const HomeOrchestrator = {
  HomePage
};

export default HomeOrchestrator;
