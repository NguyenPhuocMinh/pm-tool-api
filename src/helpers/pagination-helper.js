'use strict';

import constants from '@constants';

const paginationHelper = (query = {}) => {
  const _start = query._start || constants.DEFAULT_SKIP;
  const _end = query._end || constants.DEFAULT_LIMIT;

  const skip = parseInt(_start);
  let limit = parseInt(_end);

  limit = limit - skip;

  return {
    skip,
    limit
  };
};

export default paginationHelper;
