'use strict';

import constants from '@constants';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_COMMON.CONFIGURE_COMMON
);

/**
 * @description Check duplicate in db
 * @param {*} type
 * @param {*} filter
 */
const duplicateHelper = async (type, filter = {}) => {
  loggerFactory.info(`Function checkDuplicate has been start`);

  const isDuplicate = await repository.count({
    type,
    filter
  });

  loggerFactory.info(`Function checkDuplicate has been end`);

  return isDuplicate >= 1;
};

export default duplicateHelper;
