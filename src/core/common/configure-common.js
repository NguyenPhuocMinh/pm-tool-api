'use strict';

import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import moment from 'moment';
import 'moment-timezone';
import { isEmpty, get } from 'lodash';

import constants from '@constants';
import { formatErrorMessage, formatSlug, convertSecretKey } from '@utils';

// core
import logger from '@core/logger';
import dbManager from '@core/database';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_COMMON.CONFIGURE_COMMON
);

export const checkDuplicate = async (type, filter = {}) => {
  loggerFactory.info(`Function checkDuplicate has been start`);

  const isDuplicate = await dbManager.count({
    type,
    filter
  });

  loggerFactory.info(`Function checkDuplicate has been end`);

  return isDuplicate >= 1;
};

export const attributeFilter = (data = {}, action) => {
  try {
    loggerFactory.info(`Function checkDuplicate has been start`);

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

    loggerFactory.info(`Function attributeFilter has been end`);
    return data;
  } catch (err) {
    loggerFactory.error(`Function attributeFilter has error`, {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

export const createFilterPagination = (query = {}) => {
  loggerFactory.info(`Function createFilterPagination has been start`);

  const _start = query._start || constants.DEFAULT_SKIP;
  const _end = query._end || constants.DEFAULT_LIMIT;

  const skip = parseInt(_start);
  let limit = parseInt(_end);

  limit = limit - skip;

  loggerFactory.info(`Function createFilterPagination has been end`);

  return {
    skip,
    limit
  };
};

export const createFindQuery = (query = {}, attributes = [], fields = []) => {
  loggerFactory.info(`Function createFindQuery has been start`);

  const { search } = query;

  const _query = {
    $and: [
      {
        deleted: false
      }
    ]
  };

  if (!isEmpty(search)) {
    const _search = formatSlug(search);

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

  if (!isEmpty(fields)) {
    fields.forEach((field) => {
      // eslint-disable-next-line dot-notation
      _query['$and'].push(field);
    });
  }

  loggerFactory.info(`Function createFindQuery has been end`);

  return _query;
};

export const createSortOrderQuery = (query = {}) => {
  loggerFactory.info(`Function createSortOrderQuery has been start`);

  const { _sort, _order } = query;

  const sort = isEmpty(_sort) ? 'createdAt' : _sort;
  const order = isEmpty(_order) ? -1 : _order === 'asc' ? 1 : -1;

  loggerFactory.info(`Function createSortOrderQuery has been end`);

  return { [sort]: order };
};

export const convertDataResponseMap = async (responses = []) => {
  return Promise.map(
    responses,
    (data) => {
      return convertDataResponse(data);
    },
    { concurrency: 5 }
  );
};

export const convertDataResponse = async (data = {}) => {
  let response = {};

  if (!isEmpty(data)) {
    response = data.toJSON();

    response.id = response._id;

    delete response._id;

    return Promise.resolve(response);
  }

  return Promise.resolve();
};

export const getDataJSON = () => {
  loggerFactory.info(`Function getDataJSON has been start`);
  const configurePath = path.join(process.cwd(), './src/conf/secret.json');

  const json = fs.readFileSync(configurePath);
  const configure = JSON.parse(json.toString());

  loggerFactory.info(`Function getDataJSON has been end`);

  return configure;
};

export const getSecretJSON = () => {
  const secret = getDataJSON();

  const privateKey = get(secret, 'privateKey');
  const publicKey = get(secret, 'publicKey');

  const privateSecret = convertSecretKey(privateKey, 'private');
  const publicSecret = convertSecretKey(publicKey, 'public');

  return {
    privateSecret,
    publicSecret
  };
};
