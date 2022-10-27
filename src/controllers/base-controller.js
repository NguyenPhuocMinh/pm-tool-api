'use strict';

import { isFunction } from 'lodash';

import baseOrchestrators from '../orchestrators/base-orchestrator';

import constants from '../../constants';
import logUtils from '../../utils/log-util';
import errorCommon from '../../core/common/error-common';
import responseCommon from '../../core/common/response-common';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.BASE_CONTROLLER
);

/**
 * @description Base controller
 * @param {*} toolBox
 * @param {*} msgType
 * @param {*} msgAction
 */
const baseController = async (toolBox, msgType, msgAction) => {
  try {
    loggerFactory.info(`Function BaseController has been start`, {
      args: {
        msgType,
        msgAction
      }
    });
    const { orchestratorHandler } = baseOrchestrators.LookupOrchestrator(
      msgType,
      msgAction
    );
    if (!isFunction(orchestratorHandler)) {
      loggerFactory.error(`Not found callback OrchestratorHandler with`, {
        args: {
          msgType,
          msgAction
        }
      });
      throw errorCommon.BuildNewError('OrchestratorHandlerNotFound');
    }

    loggerFactory.info(`Function BaseController has been end`);

    const response = await orchestratorHandler(toolBox);

    return responseCommon.BuildSuccessResponse(toolBox, response);
  } catch (err) {
    loggerFactory.error(`Function BaseController has error`, {
      args: err.message
    });
    return responseCommon.BuildErrorResponse(toolBox, err);
  }
};

export default baseController;
