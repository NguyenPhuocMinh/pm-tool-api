'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.USER_VALIDATOR
);

const schemaUser = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email()
});

export const validatorUser = (data) => {
  loggerFactory.debug('Function validatorUser has been start with data', {
    args: data
  });

  const { error } = schemaUser.validate(data);

  if (error) {
    loggerFactory.debug('Function validatorUser has been end with error', {
      args: error
    });
    return error;
  }

  loggerFactory.debug('Function validatorUser has been end without error');
  return null;
};

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

  const { error } = schemaSetPass.validate(data, { allowUnknown: true });

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

const schemaChangePass = Joi.object({
  currentPassword: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  newPassword: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
    .valid(Joi.ref('currentPassword'))
});

export const validatorUserChangePass = (data) => {
  loggerFactory.debug(
    'Function validatorUserChangePass has been start with data',
    {
      args: data
    }
  );

  const { error } = schemaChangePass.validate(data);

  if (error) {
    loggerFactory.debug(
      'Function validatorUserChangePass has been end with error',
      {
        args: error
      }
    );
    return error;
  }

  loggerFactory.debug(
    'Function validatorUserChangePass has been end without error'
  );
  return null;
};
