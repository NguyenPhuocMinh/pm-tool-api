'use strict';

import Promise from 'bluebird';
import { get } from 'lodash';

import orchestrators from './index';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
    loggerFactory.info(`Function LookupOrchestrator has been start`);

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

    loggerFactory.info(`Function LookupOrchestrator has been end`);
    return { orchestratorHandler: fnCallBack, schema };
  } catch (err) {
    loggerFactory.error(`Function LookupOrchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const baseOrchestrators = {
  LookupOrchestrator
};

export default baseOrchestrators;
