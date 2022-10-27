'use strict';

import Promise from 'bluebird';
import { get } from 'lodash';

import orchestrators from './index';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
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

    orchestrators.forEach((baseOrchestrator) => {
      const orchestratorType = get(baseOrchestrator, 'type');
      const orchestratorAction = get(baseOrchestrator, 'action');
      const orchestratorFn = get(baseOrchestrator, 'orchestrator');

      if (msgType === orchestratorType && orchestratorAction === msgAction) {
        fnCallBack = orchestratorFn;
      }
    });

    loggerFactory.info(`Function LookupOrchestrator has been end`);
    return { orchestratorHandler: fnCallBack };
  } catch (err) {
    loggerFactory.error(`Function LookupOrchestrator has error`, {
      args: err.message
    });
    return Promise.reject(err);
  }
};

const baseOrchestrators = {
  LookupOrchestrator
};

export default baseOrchestrators;
