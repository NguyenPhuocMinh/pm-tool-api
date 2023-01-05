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

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_SHARES.VALIDATOR_SCHEMA
);

const validatorSchema = async (schema, data) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function validatorSchema has been start with schema',
      args: {
        schema
      }
    });
    const errors = {};
    if (Object.prototype.hasOwnProperty.call(schemas, schema)) {
      const validate = ajv.compile(schemas[schema]);
      const valid = validate(data);
      if (!valid) {
        logger.log({
          level: constants.LOG_LEVELS.DEBUG,
          message: 'Function validatorSchema has been validate errors',
          args: validate.errors
        });
        errors.name = validate.errors[0].keyword;
        errors.message = validate.errors[0].message;
        errors.returnCode = 9999;
        errors.statusCode = 400;
      }
    } else {
      throw commons.newError('e004');
    }
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function validatorSchema has been end'
    });
    return errors;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorSchema has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export default validatorSchema;
