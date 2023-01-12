'use strict';

import retry from 'retry';
import { createClient } from 'redis';
import { isEmpty } from 'lodash';

// conf
import { options, profiles } from '@conf';
import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ADAPTERS.REDIS_ADAPTER
);

const APP_REDIS_URI = profiles.APP_REDIS_URI;

let redisClient = null;

/**
 * @description Init Redis
 */
const Init = async () => {
  try {
    redisClient = createClient({
      url: profiles.APP_REDIS_URI,
      legacyMode: true
    });

    redisClient.on('error', (err) => {
      logger.log({
        level: constants.LOG_LEVELS.ERROR,
        message: 'The redis has error connection',
        args: utils.parseError(err)
      });
      console.error('The redis has error connection', err);
    });

    await redisClient.connect();
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'The redis is running on',
      args: `[${APP_REDIS_URI}]`
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'The redis has been error',
      args: utils.parseError(err)
    });

    const operation = retry.operation(options.retryOptions);
    operation.attempt((current) => {
      if (operation.retry(err)) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: `Unable to connect to the redis. Retrying(${current})`
        });
        return err;
      }
    });
    throw err;
  }
};

/**
 * @description Set value ttl in redis
 * @param {*} key
 * @param {*} value
 * @param {*} ttl {seconds}
 * @example
 * const data = await redisManager.setExValue('test', 'hello', 3600)
 * @see https://redis.io/commands/setex/
 * @returns
 */
const setExValue = async (key, value, ttl) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function setExValue has been start with',
      args: key
    });
    const existsKey = await getValue(key);
    if (!isEmpty(existsKey)) {
      await deleteValue(key);
      await redisClient.setEx(key, ttl, value);
    } else {
      await redisClient.setEx(key, ttl, value);
    }
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function setExValue has been end'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function setExValue has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

/**
 * @description Get value redis
 * @example
 * const data = await redisManager.getValue('test')
 * @see https://redis.io/commands/get/
 * @returns
 */
const getValue = (key) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function getValue has been start with',
    args: key
  });
  return new Promise((resolve, reject) => {
    redisClient?.get(key, (err, reply) => {
      if (err) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: 'Function getValue has been has been error',
          args: utils.parseError(err)
        });
        reject(err);
      }
      logger.log({
        level: constants.LOG_LEVELS.DEBUG,
        message: 'Function getValue has been start end with reply',
        args: { reply }
      });
      resolve(reply);
    });
  });
};

/**
 * @description Delete value redis
 * @example
 * const data = await redisManager.deleteValue('test')
 * @see https://redis.io/commands/del/
 * @returns
 */
const deleteValue = async (key) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function deleteValue has been start with',
      args: key
    });
    await redisClient.del(key);

    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function deleteValue has been start end'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function deleteValue has been start error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

const redisAdapter = {
  Init,
  setExValue,
  getValue,
  deleteValue
};

export default redisAdapter;
