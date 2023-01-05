'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.AUTH_VALIDATOR
);

const schemaNotifyTemplateCreate = Joi.object({
  topic: Joi.string().required(),
  description: Joi.string().required(),
  content: Joi.string().required(),
  type: Joi.string().required()
});

export const validatorNotifyTemplateCreate = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorNotifyTemplateCreate has been start with data',
    args: data
  });

  const { error } = schemaNotifyTemplateCreate.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorNotifyTemplateCreate has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorNotifyTemplateCreate has been end without error'
  });
  return null;
};
