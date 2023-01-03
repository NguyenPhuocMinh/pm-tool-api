'use strict';

import retry from 'retry';
import { createClient } from 'redis';

// conf
import { options, profiles } from '@conf';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
    redisClient = createClient({ url: profiles.APP_REDIS_URI });

    await redisClient.connect();

    loggerFactory.info(`The redis is running on`, {
      args: `[${APP_REDIS_URI}]`
    });
  } catch (err) {
    loggerFactory.error('Connect redis has error', {
      args: utils.formatErrorMsg(err)
    });

    const operation = retry.operation(options.retryOptions);
    operation.attempt((current) => {
      if (operation.retry(err)) {
        loggerFactory.error(
          `Unable to connect to the redis. Retrying(${current})`
        );
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
    loggerFactory.debug(`Function setExValue has been start with`, {
      args: {
        key: key
      }
    });
    await redisClient.setEx(key, ttl, value);
    loggerFactory.debug(`Function setExValue has been end`);
  } catch (err) {
    loggerFactory.error('Function setExValue has error', {
      args: utils.formatErrorMsg(err)
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
const getValue = async (key) => {
  try {
    loggerFactory.debug(`Function getValue has been start with`, {
      args: {
        key: key
      }
    });
    const data = await redisClient.get(key);

    loggerFactory.debug(`Function getValue has been end`);

    return data;
  } catch (err) {
    loggerFactory.error('Function getValue has error', {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
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
    loggerFactory.debug(`Function deleteValue has been start with`, {
      args: {
        key: key
      }
    });
    await redisClient.del(key);

    loggerFactory.debug(`Function deleteValue has been end`);
  } catch (err) {
    loggerFactory.error('Function deleteValue has error', {
      args: utils.formatErrorMsg(err)
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
