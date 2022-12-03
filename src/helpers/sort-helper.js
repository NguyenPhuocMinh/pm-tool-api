'use strict';

import { isEmpty } from 'lodash';

const sortHelper = (query = {}) => {
  const { _sort, _order } = query;

  const sort = isEmpty(_sort) ? 'createdAt' : _sort;
  const order = isEmpty(_order) ? -1 : _order === 'asc' ? 1 : -1;

  return { [sort]: order };
};

export default sortHelper;
