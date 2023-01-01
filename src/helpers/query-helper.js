'use strict';

import { isEmpty } from 'lodash';
import slugHelper from './slug-helper';

const queryHelper = (query = {}, attributes = [], fields = []) => {
  const { search } = query;

  const _query = {
    $and: []
  };

  if (!isEmpty(search)) {
    const _search = slugHelper(search);

    const querySearch = { $or: [] };
    const searchDefault = ['slug'];

    const searchAttributes = [...searchDefault, ...attributes];

    searchAttributes.forEach((property) => {
      const searchRegex = {};
      searchRegex[property] = { $regexp: _search, $options: 'i' };
      // eslint-disable-next-line dot-notation
      querySearch['$or'].push(searchRegex);
    });

    // eslint-disable-next-line dot-notation
    _query['$and'].push(querySearch);
  }

  if (!isEmpty(fields)) {
    fields.forEach((field) => {
      // eslint-disable-next-line dot-notation
      _query['$and'].push(field);
    });
  }

  return _query;
};

export default queryHelper;
