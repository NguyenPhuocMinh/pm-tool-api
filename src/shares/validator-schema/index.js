'use strict';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

import constants from '@constants';
import commons from '@commons';
import utils from '@utils';
import schemas from '@schemas';

// core
import loggerManager from '@core/logger';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv, { mode: 'fast', keywords: true });
addErrors(ajv);

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_SHARES.VALIDATOR_SCHEMA
);

const validatorSchema = async (schema, data) => {
  try {
    loggerFactory.info(`Function validatorSchema has been start with schema`, {
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
      throw commons.newError('E004');
    }
    loggerFactory.info(`Function validatorSchema has been end`);
    return errors;
  } catch (err) {
    loggerFactory.error(`Function validatorSchema has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

export default validatorSchema;
