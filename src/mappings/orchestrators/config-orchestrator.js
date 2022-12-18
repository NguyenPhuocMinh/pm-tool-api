'use strict';

import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

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

    const configurePath = path.join(process.cwd(), `./src/data/${name}.json`);
    const json = fs.readFileSync(configurePath);
    const data = JSON.parse(json.toString());

    loggerFactory.info(`Function getDataConfigJson has been end`);

    return {
      result: {
        data: data
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
