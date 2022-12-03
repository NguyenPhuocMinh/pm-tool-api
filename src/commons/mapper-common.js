'use strict';

import Promise from 'bluebird';
import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_COMMON.MAPPER_COMMON
);

/**
 * @description Mapper data responses
 * @param {*} responses
 */
export const dataResponsesMapper = async (responses = []) => {
  loggerFactory.data(`Function dataResponsesMapper has been start`);
  return Promise.map(
    responses,
    (data) => {
      loggerFactory.data(`Function dataResponsesMapper has been end`);
      return dataResponseMapper(data);
    },
    { concurrency: 5 }
  );
};

/**
 * @description Mapper data response
 * @param {*} data
 */
export const dataResponseMapper = async (data = {}) => {
  loggerFactory.data(`Function dataResponseMapper has been start`);

  let response = {};

  if (!isEmpty(data)) {
    response = data.toJSON();

    response.id = response._id;

    delete response._id;

    return Promise.resolve(response);
  }

  loggerFactory.data(`Function dataResponseMapper has been end`);

  return Promise.resolve();
};
