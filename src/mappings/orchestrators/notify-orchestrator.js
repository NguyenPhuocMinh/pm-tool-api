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
// adapters
import amqpAdapter from '@adapters/amqp';

const logger = loggerManager(
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
  try {
    logger.info(`Function getAllNotify has been start`);
    logger.info(`Function getAllNotify has been start`);

    return {
      result: {},
      msg: 'NotifyGetAllSuccess'
    };
  } catch (err) {
    logger.error(`Function getAllNotify has error`, {
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getNotifyById has been start'
    });

    const { id } = req.params;

    const notify = await getNotify(id);

    const result = transfers.notifyTransfer(notify);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getNotifyById has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'NotifyGetIDSuccess'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getNotifyById has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyOfUser has been start'
    });

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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyOfUser has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'NotifyOfUserGetAllSuccess'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllNotifyOfUser has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function notifyChangePasswordTemporary has been start'
    });

    const requestId = req.requestId;

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

    // send message queue for notify
    const dataPublisher = {
      message: 'Test'
    };
    await amqpAdapter.publisher(
      constants.AMQP_QUEUES.SEND_NOTIFY_CHANGE_PASSWORD_QUEUE,
      constants.types.MsgTypeNotify,
      requestId,
      dataPublisher
    );

    // get notify by id when just created
    const data = await getNotify(notify._id);

    const result = transfers.notifyTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function notifyChangePasswordTemporary has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'NotifyChangePasswordTemporarySuccess'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function notifyChangePasswordTemporary has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getNotify has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const notifyOrchestrator = {
  getAllNotify,
  getNotifyById,
  getAllNotifyOfUser,
  notifyChangePasswordTemporary
};

export default notifyOrchestrator;
