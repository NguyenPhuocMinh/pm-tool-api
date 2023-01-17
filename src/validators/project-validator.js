'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.PROJECT_VALIDATOR
);

const schemaProject = Joi.object({
  name: Joi.string().required()
});

export const validatorProjectCreateOrUpdate = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorProjectCreateOrUpdate has been start with data',
    args: data
  });

  const { error } = schemaProject.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function validatorProjectCreateOrUpdate has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message:
      'Function validatorProjectCreateOrUpdate has been end without error'
  });
  return null;
};

const schemaAddTeamsToProject = Joi.object({
  teams: Joi.array().required()
});

export const validatorAddTeamsToProject = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorAddTeamsToProject has been start with data',
    args: data
  });

  const { error } = schemaAddTeamsToProject.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorAddTeamsToProject has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorAddMember has been end without error'
  });
  return null;
};
