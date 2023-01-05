'use strict';

import Promise from 'bluebird';
import { get } from 'lodash';

import orchestrators from './index';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.BASE_ORCHESTRATOR
);

/**
 *
 * @param {*} msgType
 * @param {*} msgAction
 * @returns {Object}
 */
const LookupOrchestrator = (msgType, msgAction) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function LookupOrchestrator has been start with',
      args: {
        msgType,
        msgAction
      }
    });

    let fnCallBack;
    let schema;

    orchestrators.forEach((baseOrchestrator) => {
      const orchestratorType = get(baseOrchestrator, 'type');
      const orchestratorAction = get(baseOrchestrator, 'action');
      const orchestratorFn = get(baseOrchestrator, 'orchestrator');
      const orchestratorSchema = get(baseOrchestrator, 'schema');

      if (msgType === orchestratorType && orchestratorAction === msgAction) {
        fnCallBack = orchestratorFn;
        schema = orchestratorSchema;
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function LookupOrchestrator has been end'
    });
    return { orchestratorHandler: fnCallBack, schema };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function LookupOrchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const baseOrchestrators = {
  LookupOrchestrator
};

export default baseOrchestrators;
