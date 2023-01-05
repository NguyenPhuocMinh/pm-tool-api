'use strict';

// layers
import repository from '@layers/repository';

/**
 * @description Check duplicate in db
 * @param {*} type
 * @param {*} filter
 */
const duplicateHelper = async (type, filter = {}) => {
  const isDuplicate = await repository.count({
    type,
    filter
  });

  return isDuplicate >= 1;
};

export default duplicateHelper;
