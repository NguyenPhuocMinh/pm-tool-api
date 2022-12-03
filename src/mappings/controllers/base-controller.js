'use strict';

import { isFunction, isEmpty } from 'lodash';

import baseOrchestrators from '../orchestrators/base-orchestrator';

import constants from '@constants';
import commons from '@commons';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// shares
import shares from '@shares';

const loggerFactory = loggerManager(
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
  const { req, next } = toolBox;

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
      loggerFactory.error(`Not found callback orchestratorHandler with`, {
        args: {
          msgType,
          msgAction
        }
      });
      throw commons.newError('OrchestratorHandlerNotFound');
    }

    if (!isEmpty(schema)) {
      const errorSchema = await shares.validatorSchema(schema, req.body);
      if (!isEmpty(errorSchema)) {
        loggerFactory.error(`Function BaseController has errorSchema`, {
          args: utils.formatErrorMsg(errorSchema)
        });
        return builds.errorResponse(toolBox, errorSchema);
      }
    }

    loggerFactory.info(`Function BaseController has been end`);

    const response = await orchestratorHandler(toolBox);

    return builds.successResponse(toolBox, response);
  } catch (err) {
    loggerFactory.error(`Function BaseController has error`, {
      args: utils.formatErrorMsg(err)
    });
    return next(err);
  }
};

export default baseController;
