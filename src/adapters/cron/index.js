'use strict';

import cron from 'node-cron';

// conf
import { options } from '@conf';
import constants from '@constants';
import utils from '@utils';

// workers
import workers from '@workers';
// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ADAPTERS.CRON_ADAPTER
);

/**
 * @description Init Cron Job
 */
const Init = async () => {
  try {
    // schedule job over 1 day to change new user password
    await scheduleJob(
      constants.CRON_EXPRESSIONS.CHANGE_PASSWORD_TEMPORARY,
      workers.handlerWorkerCronChangePasswordTemporary
    );
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'The cronJob has been start'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'The cronJob has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

/**
 * @description Schedule Job
 * @param {*} cronExpression
 * @param {*} workersHandler
 */
const scheduleJob = async (cronExpression, workersHandler) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'The scheduleJob been start',
      args: {
        cronExpression
      }
    });
    return cron
      .schedule(
        cronExpression,
        async (now) => {
          await workersHandler(now);
        },
        options.cronJobOptions
      )
      .start();
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'The scheduleJob has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

const cronAdapters = {
  Init,
  scheduleJob
};

export default cronAdapters;
