'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.PROJECT_VALIDATOR
);

const schemaProject = Joi.object({
  name: Joi.string().required()
});

export const validatorProject = (data) => {
  loggerFactory.debug('Function validatorProject has been start with data', {
    args: data
  });

  const { error } = schemaProject.validate(data);

  if (error) {
    loggerFactory.debug('Function validatorProject has been end with error', {
      args: error
    });
    return error;
  }

  loggerFactory.debug('Function validatorProject has been end without error');
  return null;
};
