'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.TEAM_VALIDATOR
);

const schemaCreateOrUpdateTeam = Joi.object({
  name: Joi.string().required()
});

export const validatorTeamCreateOrUpdate = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorTeamCreateOrUpdate has been start with data',
    args: data
  });

  const { error } = schemaCreateOrUpdateTeam.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorTeamCreateOrUpdate has been end with error',
      args: error
    });

    return error;
  }

  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorTeamCreateOrUpdate has been end without error'
  });
  return null;
};

const schemaAddMembersToTeam = Joi.object({
  members: Joi.array().required()
});

export const validatorAddMembersToTeam = (data) => {
  logger.log({
    level: constants.LOG_LEVELS.DEBUG,
    message: 'Function validatorAddMember has been start with data',
    args: data
  });

  const { error } = schemaAddMembersToTeam.validate(data, {
    allowUnknown: true
  });

  if (error) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorAddMember has been end with error',
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
