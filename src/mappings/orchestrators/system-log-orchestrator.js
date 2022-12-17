'use strict';

import Promise from 'bluebird';
import fetch from 'node-fetch';
import { assign } from 'lodash';

// configs
import { profiles } from '@conf';
import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';
import transfers from '@transfers';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';
// validators
import validators from '@validators';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.SYSTEM_LOG_ORCHESTRATOR
);

const APP_VERCEL_TOKEN = profiles.APP_VERCEL_TOKEN;

/**
 * @description Get All System Log Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllSystemLog = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllSystemLog Orchestrator has been start`);

    const data = await fetch(
      'https://api.vercel.com/v1/integrations/log-drains',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${APP_VERCEL_TOKEN}`
        }
      }
    ).then((res) => res.json());
    console.log(
      '🚀 ~ file: system-log-orchestrator.js:47 ~ getAllSystemLog ~ data',
      data
    );

    // await fetch('https://api.vercel.com/v1/integrations/log-drains', {
    //   headers: {
    //     Authorization: 'Bearer <TOKEN>'
    //   },
    //   method: 'get'
    // });

    loggerFactory.info(`Function getAllSystemLog Orchestrator has been end`);

    return {
      result: {
        data: data
      },
      msg: 'systemLogS001'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllSystemLog Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const systemLogOrchestrator = {
  getAllSystemLog
};

export default systemLogOrchestrator;
