'use strict';

import Joi from 'joi';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_VALIDATORS.ORGANIZATION_VALIDATOR
);

const schemaOrganization = Joi.object({
  name: Joi.string().required()
});

export const validatorOrganization = (data) => {
  loggerFactory.debug('Function validatorOrganization has been start with data', {
    args: data
  });

  const { error } = schemaOrganization.validate(data);

  if (error) {
    loggerFactory.debug('Function validatorOrganization has been end with error', {
      args: error
    });
    return error;
  }

  loggerFactory.debug('Function validatorOrganization has been end without error');
  return null;
};
