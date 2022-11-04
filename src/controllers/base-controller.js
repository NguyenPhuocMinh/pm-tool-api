'use strict';

import { isFunction, isEmpty } from 'lodash';

import baseOrchestrators from '../orchestrators/base-orchestrator';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

import errorCommon from '../../core/common/error-common';
import responseCommon from '../../core/common/response-common';
import validateCommon from '../../core/common/validate-common';

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
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function BaseController has been start`, {
      args: {
        msgType,
        msgAction
      }
    });
    const { orchestratorHandler, schema } =
      baseOrchestrators.LookupOrchestrator(msgType, msgAction);
    if (!isFunction(orchestratorHandler)) {
      loggerFactory.error(`Not found callback OrchestratorHandler with`, {
        args: {
          msgType,
          msgAction
        }
      });
      throw errorCommon.BuildNewError('OrchestratorHandlerNotFound');
    }

    if (!isEmpty(schema)) {
      const errorSchema = await validateCommon.BuildNewValidateSchema(
        schema,
        req.body
      );
      if (!isEmpty(errorSchema)) {
        loggerFactory.error(`Function BaseController has errorSchema`, {
          args: returnUtils.returnErrorMessage(errorSchema)
        });
        return responseCommon.BuildErrorResponse(toolBox, errorSchema);
      }
    }

    loggerFactory.info(`Function BaseController has been end`);

    const response = await orchestratorHandler(toolBox);

    return responseCommon.BuildSuccessResponse(toolBox, response);
  } catch (err) {
    loggerFactory.error(`Function BaseController has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return responseCommon.BuildErrorResponse(toolBox, err);
  }
};

export default baseController;
