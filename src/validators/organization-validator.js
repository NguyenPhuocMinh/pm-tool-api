'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.ORGANIZATION_VALIDATOR
);

const schemaOrganization = Joi.object({
  name: Joi.string().required()
});

export const validatorOrganization = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorOrganization has been start with data',
    args: data
  });

  const { error } = schemaOrganization.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorOrganization has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorOrganization has been end without error'
  });
  return null;
};

const schemaAddProjectsToOrganization = Joi.object({
  projects: Joi.array().required()
});

export const validatorAddProjectsToOrganization = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message:
      'Function validatorAddProjectsToOrganization has been start with data',
    args: data
  });

  const { error } = schemaAddProjectsToOrganization.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function validatorAddProjectsToOrganization has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message:
      'Function validatorAddProjectsToOrganization has been end without error'
  });
  return null;
};
