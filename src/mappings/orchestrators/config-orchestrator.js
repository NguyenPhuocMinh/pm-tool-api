'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// data
import data from '@data';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.CONFIG_ORCHESTRATOR
);

/**
 * @description Get Data Config Json Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getDataConfigJson = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getDataConfigJson has been start'
    });

    const { name } = req.query;

    const dataConfig = {
      [name]: data[name]
    };

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getDataConfigJson has been end'
    });

    return {
      result: {
        data: dataConfig
      },
      msg: 's003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getDataConfigJson has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const configOrchestrator = {
  getDataConfigJson
};

export default configOrchestrator;
