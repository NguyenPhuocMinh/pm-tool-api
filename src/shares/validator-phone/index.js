'use strict';

import { isValidPhoneNumber } from 'libphonenumber-js';

import constants from '@constants';
import commons from '@commons';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_SHARES.VALIDATOR_PHONE
);

const validatorPhone = async (phoneNumber, countryCode = 'VN') => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function validatorPhone has been start with schema',
      args: {
        phoneNumber,
        countryCode
      }
    });

    if (!isValidPhoneNumber(phoneNumber, countryCode)) {
      throw commons.newError('e005');
    }

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function validatorPhone has been end'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function validatorPhone has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export default validatorPhone;
