'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// adapters
import amqpAdapter from '@adapters/amqp';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.TEST_ORCHESTRATOR
);

/**
 * @description Test Send Queue Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const testSendQueue = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function testSendQueue Orchestrator has been start'
    });

    const requestId = req.requestId;

    const dataTest = {
      message: 'Test'
    };

    await amqpAdapter.publisher(
      constants.AMQP_QUEUES.TEST_QUEUE,
      constants.types.MsgTypeTest,
      requestId,
      dataTest
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function testSendQueue Orchestrator has been end'
    });

    return {
      result: {
        data: null
      },
      msg: 'testS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function testSendQueue Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const testOrchestrator = {
  testSendQueue
};

export default testOrchestrator;
