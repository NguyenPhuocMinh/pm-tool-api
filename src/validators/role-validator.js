'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.ROLE_VALIDATOR
);

const schemaRole = Joi.object({
  name: Joi.string().required()
});

export const validatorRole = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorRole has been start with data',
    args: data
  });

  const { error } = schemaRole.validate(data);

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorRole has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorRole has been end without error'
  });
  return null;
};
