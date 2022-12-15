'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.PERMISSION_VALIDATOR
);

const schemaPermission = Joi.object({
  name: Joi.string().required()
});

export const validatorPermission = (data) => {
  loggerFactory.debug('Function validatorPermission has been start with data', {
    args: data
  });

  const { error } = schemaPermission.validate(data);

  if (error) {
    loggerFactory.debug('Function validatorPermission has been end with error', {
      args: error
    });
    return error;
  }

  loggerFactory.debug('Function validatorPermission has been end without error');
  return null;
};
