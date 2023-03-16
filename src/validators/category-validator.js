'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.CATEGORY_VALIDATOR
);

const schemaCategory = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required()
});

export const validatorCategory = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorCategory has been start with data',
    args: data
  });

  const { error } = schemaCategory.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorCategory has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorCategory has been end without error'
  });
  return null;
};
