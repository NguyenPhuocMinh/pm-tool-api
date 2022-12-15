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
// transfers
import transfers from '@transfers';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.NOTIFY_ORCHESTRATOR
);

const NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY =
  constants.notifyTypes.NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY;

/**
 * @description Get All Notify Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllNotify = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllNotify has been start`);

    loggerFactory.info(`Function getAllNotify has been start`);

    return {
      result: {},
      msg: 'NotifyGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllNotify has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Notify By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getNotifyById = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getNotifyById has been start`);
    const { id } = req.params;

    const notify = await getNotify(id);

    const result = transfers.notifyTransfer(notify);

    loggerFactory.info(`Function getNotifyById has been start`);

    return {
      result: {
        data: result
      },
      msg: 'NotifyGetIDSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getNotifyById has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllNotifyOfUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllNotifyOfUser has been start`);

    const { userID, isNew } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: userID },
      { 'details.isNew': isNew }
    ]);
    const sort = helpers.sortHelper(req.query);

    const notifiesOfUser = await repository.findAll({
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

    const result = await commons.dataResponsesMapper(notifiesOfUser);

    loggerFactory.info(`Function getAllNotifyOfUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'NotifyOfUserGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllNotifyOfUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Notify Change Password Temporary Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const notifyChangePasswordTemporary = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function notifyChangePasswordTemporary has been start`);

    // find template change password temporary
    const notifyTemplate = await repository.findOne({
      type: 'NotifyTemplateModel',
      filter: {
        deleted: false,
        activated: true,
        type: NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY
      },
      projection: {
        __v: 0
      }
    });

    if (isEmpty(notifyTemplate)) {
      throw commons.newError('NotifyTemplateNotFound');
    }

    req.body = helpers.attributeHelper(req, req.body, 'create');

    const { id: userID } = req.body;

    const slug = helpers.slugHelper(notifyTemplate.description);

    // create notify into db
    const notify = await repository.createOne({
      type: 'NotifyModel',
      doc: {
        ...req.body,
        user: userID,
        sender: notifyTemplate.createdBy,
        template: notifyTemplate._id,
        details: {
          isNew: true
        },
        slug
      }
    });

    // get notify by id when just created
    const data = await getNotify(notify._id);

    const result = transfers.notifyTransfer(data);

    loggerFactory.info(`Function notifyChangePasswordTemporary has been start`);

    return {
      result: {
        data: result
      },
      msg: 'NotifyChangePasswordTemporarySuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function notifyChangePasswordTemporary has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Notify Update Read Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const notifyUpdateRead = async (toolBox) => {
  try {
    loggerFactory.info(`Function notifyUpdateRead has been start`);
    loggerFactory.info(`Function notifyUpdateRead has been start`);
    return {
      result: {},
      msg: 'NotifyUpdateReadSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function notifyUpdateRead has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Notify Helper
 * @param {*} id
 */
const getNotify = async (id) => {
  try {
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
    loggerFactory.error(`Function getNotify has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const notifyOrchestrator = {
  getAllNotify,
  getNotifyById,
  getAllNotifyOfUser,
  notifyChangePasswordTemporary,
  notifyUpdateRead
};

export default notifyOrchestrator;
