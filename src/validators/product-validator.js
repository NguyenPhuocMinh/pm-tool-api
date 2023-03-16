'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.CATEGORY_VALIDATOR
);

const schemaProduct = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
  discount: Joi.number().required(),
  category: Joi.string().required()
});

export const validatorProduct = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorProduct has been start with data',
    args: data
  });

  const { error } = schemaProduct.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorProduct has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorProduct has been end without error'
  });
  return null;
};
