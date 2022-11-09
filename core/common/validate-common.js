'use strict';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

import errorCommon from './error-common';
import schemaCommon from './schema-common';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv, { mode: 'fast', keywords: true });
addErrors(ajv);

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.VALIDATE_COMMON
);

const BuildNewValidateSchema = async (schema, data) => {
  try {
    loggerFactory.info(`BuildNewValidateSchema has been start with schema`, {
      args: schema
    });
    const errors = {};
    if (Object.prototype.hasOwnProperty.call(schemaCommon, schema)) {
      const validate = ajv.compile(schemaCommon[schema]);
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
      throw errorCommon.BuildNewError('SchemaNotFound');
    }
    loggerFactory.info(`BuildNewValidateSchema has been end`);
    return errors;
  } catch (err) {
    loggerFactory.error(`BuildNewValidateSchema has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

const validateCommon = {
  BuildNewValidateSchema
};

export default validateCommon;
