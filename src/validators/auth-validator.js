'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.AUTH_VALIDATOR
);

const schemaLogin = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6)
  // .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
});

export const validatorLogin = (data) => {
  loggerFactory.debug('Function validatorLogin has been start with data', {
    args: data
  });

  const { error } = schemaLogin.validate(data);

  if (error) {
    loggerFactory.debug('Function validatorLogin has been end with error', {
      args: error
    });
    return error;
  }

  loggerFactory.debug('Function validatorLogin has been end without error');
  return null;
};
