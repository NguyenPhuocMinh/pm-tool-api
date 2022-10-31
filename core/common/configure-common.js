'use strict';

import Promise from 'bluebird';
import moment from 'moment';
import 'moment-timezone';
import { isEmpty } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';
import formatUtils from '../../utils/format-util';

import database from '../database';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.CONFIGURE_COMMON
);

const CheckDuplicate = async (type, filter = {}) => {
  const isDuplicate = await database.Count({
    type,
    filter
  });

  return isDuplicate >= 1;
};

const AttributeFilter = (data = {}, action) => {
  try {
    loggerFactory.info(`AttributeFilter has been start`);
    const nowMoment = moment()
      .add(7, 'hours')
      .tz(constants.TIMEZONE_DEFAULT)
      .utc()
      .format();

    if (action === 'create') {
      data.createdAt = nowMoment;
      data.createdBy = constants.DEFAULT_SYSTEM;
      data.updatedAt = nowMoment;
      data.updatedBy = constants.DEFAULT_SYSTEM;
    }

    data.updatedAt = nowMoment;
    data.updatedBy = constants.DEFAULT_SYSTEM;

    loggerFactory.info(`AttributeFilter has been end`);
    return data;
  } catch (err) {
    loggerFactory.error(`AttributeFilter has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
};

const CreateFilterPagination = (query = {}) => {
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

const CreateFindQuery = (query = {}, attributes = []) => {
  const { search } = query;

  const _query = {
    $and: [
      {
        deleted: false
      }
    ]
  };

  if (!isEmpty(search)) {
    const _search = formatUtils.formatSlug(search);

    const querySearch = { $or: [] };
    const searchDefault = ['slug'];

    const searchAttributes = [...searchDefault, ...attributes];

    searchAttributes.forEach((property) => {
      const searchRegex = {};
      searchRegex[property] = { $regexp: _search };
      // eslint-disable-next-line dot-notation
      querySearch['$or'].push(searchRegex);
    });

    // eslint-disable-next-line dot-notation
    _query['$and'].push(querySearch);
  }

  return _query;
};

const CreateSortOrderQuery = (query = {}) => {
  const { _sort, _order } = query;

  const sort = isEmpty(_sort) ? 'createdAt' : _sort;
  const order = isEmpty(_order) ? -1 : _order === 'asc' ? 1 : -1;

  return { [sort]: order };
};

const convertDataResponse = async (data = {}) => {
  let response = {};

  if (!isEmpty(data)) {
    response = data.toJSON();

    response.id = response._id;
    delete response._id;

    return Promise.resolve(response);
  }

  return Promise.resolve();
};

const ConvertDataResponseMap = async (responses = []) => {
  return Promise.map(
    responses,
    (data) => {
      return convertDataResponse(data);
    },
    { concurrency: 5 }
  );
};

const configureCommon = {
  CheckDuplicate,
  AttributeFilter,
  CreateFindQuery,
  CreateSortOrderQuery,
  CreateFilterPagination,
  ConvertDataResponseMap,
  ConvertDataResponse: convertDataResponse
};

export default configureCommon;
