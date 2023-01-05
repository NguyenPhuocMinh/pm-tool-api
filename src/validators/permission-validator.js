'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.PERMISSION_VALIDATOR
);

const schemaPermission = Joi.object({
  name: Joi.string().required()
});

export const validatorPermission = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorPermission has been start with data',
    args: data
  });

  const { error } = schemaPermission.validate(data);

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorPermission has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorPermission has been end without error'
  });
  return null;
};
