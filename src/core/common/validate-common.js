'use strict';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

import constants from '@constants';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import { buildNewError } from '@core/common';

import schemas from '@shared/schemas';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv, { mode: 'fast', keywords: true });
addErrors(ajv);

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.VALIDATE_COMMON
);

export const buildNewValidateSchema = async (schema, data) => {
  try {
    loggerFactory.info(`BuildNewValidateSchema has been start with schema`, {
      args: schema
    });
    const errors = {};
    if (Object.prototype.hasOwnProperty.call(schemas, schema)) {
      const validate = ajv.compile(schemas[schema]);
      const valid = validate(data);
      if (!valid) {
        loggerFactory.debug(`validate errors`, {
          args: validate.errors
        });
        errors.name = validate.errors[0].keyword;
        errors.message = validate.errors[0].message;
        errors.returnCode = 9999;
        errors.statusCode = 400;
      }
    } else {
      throw buildNewError('SchemaNotFound');
    }
    loggerFactory.info(`BuildNewValidateSchema has been end`);
    return errors;
  } catch (err) {
    loggerFactory.error(`BuildNewValidateSchema has error`, {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};
