'use strict';

import amqp from 'amqplib';
import retry from 'retry';

// conf
import { options, profiles } from '@conf';
import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ADAPTERS.AMQP_ADAPTER
);

const APP_RABBIT_URI = profiles.APP_RABBIT_URI;

let conn = null;
let channel = null;

/**
 * @description Init RabbitMQ
 */
const Init = async () => {
  try {
    conn = await amqp.connect(APP_RABBIT_URI + '?heartbeat=60');
    channel = await conn.createChannel();

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'The rabbitMQ is running on',
      args: `[${APP_RABBIT_URI}]`
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'The rabbitMQ has error',
      args: utils.parseError(err)
    });

    const operation = retry.operation(options.retryOptions);
    operation.attempt((current) => {
      if (operation.retry(err)) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: `Unable to connect to the rabbitMQ. Retrying(${current})`,
          args: err
        });
        return err;
      }
    });

    throw err;
  }
};

/**
 * @description Publisher
 * @param {*} queueName
 * @param {*} messageType
 * @param {*} correlationId
 * @param {*} payload
 */
const publisher = async (queueName, messageType, correlationId, payload) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Func publisher has been start',
      args: {
        queueName,
        messageType,
        correlationId
      }
    });

    await channel.assertQueue(queueName, {
      durable: false
    });

    await channel.publish('', queueName, Buffer.from(JSON.stringify(payload)), {
      persistent: true,
      mandatory: false,
      correlationId: correlationId,
      type: messageType
    });

    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: `[*] publisher has been send message to queueName: ${queueName} with payload`,
      args: payload
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Func publisher has been error',
      args: utils.parseError(err)
    });
    await channel.close();
    throw err;
  }
};

const amqpAdapter = {
  Init,
  publisher
};

export default amqpAdapter;
