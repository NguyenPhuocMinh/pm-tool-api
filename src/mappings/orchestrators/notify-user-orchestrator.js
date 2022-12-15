'use strict';

import Promise from 'bluebird';
import { isEmpty } from 'lodash';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.NOTIFY_USER_ORCHESTRATOR
);

/**
 * @description Get All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllNotifyUser has been start`);

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, [{ user: id }]);
    const sort = helpers.sortHelper(req.query);

    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort,
        populate: [
          {
            path: 'user',
            select: 'firstName lastName'
          },
          {
            path: 'sender',
            select: 'firstName lastName'
          },
          {
            path: 'template',
            select: 'topic description content type'
          }
        ]
      }
    });

    const total = await repository.count({
      type: 'NotifyModel',
      filter: {
        user: id
      }
    });

    const result = await commons.dataResponsesMapper(notifyUsers);

    loggerFactory.info(`Function getAllNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'NotifyUserS001'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Detail Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getDetailNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getDetailNotifyUser has been start`);

    const { id } = req.params;

    const notifyUser = await getNotifyUserFunc(id);

    const result = await commons.dataResponseMapper(notifyUser);

    loggerFactory.info(`Function getDetailNotifyUser has been start`);

    return {
      result: {
        data: result
      },
      msg: 'NotifyUserS002'
    };
  } catch (err) {
    loggerFactory.error(`Function getDetailNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Data Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllDataNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllDataNotifyUser has been start`);

    const { id, isNew } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { 'details.isNew': isNew }
    ]);
    const sort = helpers.sortHelper(req.query);

    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort,
        populate: [
          {
            path: 'user',
            select: 'firstName lastName'
          },
          {
            path: 'sender',
            select: 'firstName lastName'
          },
          {
            path: 'template',
            select: 'topic description content type'
          }
        ]
      }
    });

    const total = await repository.count({
      type: 'NotifyModel',
      filter: {
        user: id,
        'details.isRead': false
      }
    });

    const result = await commons.dataResponsesMapper(notifyUsers);

    loggerFactory.info(`Function getAllDataNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'NotifyUserS003'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllDataNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All UnRead Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllUnReadNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllUnReadNotifyUser has been start`);

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { 'details.isRead': false }
    ]);
    const sort = helpers.sortHelper(req.query);

    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort,
        populate: [
          {
            path: 'user',
            select: 'firstName lastName'
          },
          {
            path: 'sender',
            select: 'firstName lastName'
          },
          {
            path: 'template',
            select: 'topic description content type'
          }
        ]
      }
    });

    const total = await repository.count({
      type: 'NotifyModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(notifyUsers);

    loggerFactory.info(`Function getAllUnReadNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'NotifyUserS004'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllUnReadNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Notify User Func
 * @param {*} id
 */
const getNotifyUserFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('NotifyUserE001');
    }

    const notify = await repository.getOne({
      type: 'NotifyModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'user',
            select: 'firstName lastName'
          },
          {
            path: 'sender',
            select: 'firstName lastName'
          },
          {
            path: 'template',
            select: 'topic description content type'
          }
        ]
      }
    });

    return notify;
  } catch (err) {
    loggerFactory.error(`Function getNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const notifyUserOrchestrator = {
  getAllNotifyUser,
  getDetailNotifyUser,
  getAllDataNotifyUser,
  getAllUnReadNotifyUser
};

export default notifyUserOrchestrator;
