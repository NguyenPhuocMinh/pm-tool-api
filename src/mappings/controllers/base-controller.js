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

const logger = loggerManager(
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function BaseController has been start',
      args: {
        msgType,
        msgAction
      }
    });
    const { orchestratorHandler, schema } =
      baseOrchestrators.LookupOrchestrator(msgType, msgAction);

    if (!isFunction(orchestratorHandler)) {
      logger.log({
        level: constants.LOG_LEVELS.ERROR,
        message: 'Not found callback orchestratorHandler with',
        args: {
          msgType,
          msgAction
        }
      });
      throw commons.newError('e003');
    }

    if (!isEmpty(schema)) {
      const errorSchema = await shares.validatorSchema(schema, req.body);
      if (!isEmpty(errorSchema)) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: 'Function BaseController has errorSchema',
          args: utils.parseError(errorSchema)
        });
        return builds.errorResponse(toolBox, errorSchema);
      }
    }

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function BaseController has been end'
    });

    const response = await orchestratorHandler(toolBox);

    return builds.successResponse(toolBox, response);
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function BaseController has been error',
      args: utils.parseError(err)
    });
    return next(err);
  }
};

export default baseController;
