'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.SOCKET_ORCHESTRATOR
);

/**
 * @description Get Socket Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getSocket = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getSocket Orchestrator has been start',
      args: req
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getSocket Orchestrator has been end'
    });

    return {
      result: {
        data: null
      },
      msg: 'socketS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getSocket Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Post Socket Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const postSocket = async (toolBox) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function postSocket Orchestrator has been start'
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function postSocket Orchestrator has been end'
    });

    return {
      result: {
        data: null
      },
      msg: 'socketS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function postSocket Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const socketOrchestrator = {
  getSocket,
  postSocket
};

export default socketOrchestrator;
