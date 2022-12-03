'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.AUTH_VALIDATOR
);

const schemaSetPass = Joi.object({
  password: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  passwordConfirm: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
    .valid(Joi.ref('password'))
});

export const validatorUserSetPass = (data) => {
  loggerFactory.debug(
    'Function validatorUserSetPass has been start with data',
    {
      args: data
    }
  );

  const { error } = schemaSetPass.validate(data);

  if (error) {
    loggerFactory.debug(
      'Function validatorUserSetPass has been end with error',
      {
        args: error
      }
    );
    return error;
  }

  loggerFactory.debug(
    'Function validatorUserSetPass has been end without error'
  );
  return null;
};

const schemaResetPass = Joi.object({
  password: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  passwordConfirm: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
    .valid(Joi.ref('password'))
});

export const validatorUserResetPass = (data) => {
  loggerFactory.debug(
    'Function validatorUserResetPass has been start with data',
    {
      args: data
    }
  );

  const { error } = schemaResetPass.validate(data);

  if (error) {
    loggerFactory.debug(
      'Function validatorUserResetPass has been end with error',
      {
        args: error
      }
    );
    return error;
  }

  loggerFactory.debug(
    'Function validatorUserResetPass has been end without error'
  );
  return null;
};
