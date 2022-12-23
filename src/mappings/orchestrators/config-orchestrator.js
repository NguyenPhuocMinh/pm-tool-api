'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// data
import data from '@data';

const loggerFactory = loggerManager(
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
    loggerFactory.info(`Function getDataConfigJson has been start`);

    const { name } = req.query;

    const dataConfig = {
      [name]: data[name]
    };

    loggerFactory.info(`Function getDataConfigJson has been end`);

    return {
      result: {
        data: dataConfig
      },
      msg: 's003'
    };
  } catch (err) {
    loggerFactory.error(`Function getDataConfigJson has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const configOrchestrator = {
  getDataConfigJson
};

export default configOrchestrator;
