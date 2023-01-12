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
  constants.STRUCT_ORCHESTRATORS.NOTIFY_USER_ORCHESTRATOR
);

const NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY =
  constants.notifyTypes.NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY;

/**
 * @description Get All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyUser has been start'
    });

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { deleted: false }
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyUser has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllNotifyUser has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getDetailNotifyUser has been start'
    });

    const { id } = req.params;

    const notifyUser = await getNotifyUserFunc(id);

    const result = await commons.dataResponseMapper(notifyUser);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getDetailNotifyUser has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'notifyUserS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getDetailNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Notify Change Password Temporary Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const changePasswordTemporary = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function changePasswordTemporary has been start'
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
    const data = await getNotifyUserFunc(notify._id.toString());

    const result = transfers.notifyUserTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function changePasswordTemporary has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'notifyUserS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function changePasswordTemporary has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllDataNotifyUser has been start'
    });

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { deleted: false }
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllDataNotifyUser has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllDataNotifyUser has been error',
      args: utils.parseError(err)
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
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllUnReadNotifyUser has been start'
    });

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { deleted: false },
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllUnReadNotifyUser has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllUnReadNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Read Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const readNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function readNotifyUser has been start'
    });

    const { id } = req.body;

    const { updatedAt, updatedBy } = helpers.attributeHelper(req, {});

    const response = await repository.updateOne({
      type: 'NotifyModel',
      id,
      doc: {
        details: {
          isNew: false,
          isRead: true,
          readAt: updatedAt
        },
        updatedAt,
        updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function readNotifyUser has been end'
    });

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function readNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Read All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const readAllNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function readAllNotifyUser has been start'
    });

    const { id } = req.body;

    const { updatedAt, updatedBy } = helpers.attributeHelper(req, {});

    // find all by userId and isRead false
    const notifyUsersUnread = await repository.findAll({
      type: 'NotifyModel',
      filter: {
        user: id,
        'details.isRead': false,
        deleted: false
      },
      projection: {
        _id: 1
      }
    });

    // map to list id
    const idsUnread = notifyUsersUnread.map((e) => e._id);

    const response = await repository.updateMany({
      type: 'NotifyModel',
      filter: {
        _id: {
          $in: idsUnread
        }
      },
      doc: {
        details: {
          isNew: false,
          isRead: true,
          readAt: updatedAt
        },
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function readAllNotifyUser has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'notifyUserS006'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function readAllNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Trash Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const trashNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function trashNotifyUser has been start'
    });

    const { id } = req.body;

    const { updatedAt, updatedBy } = helpers.attributeHelper(req, req.body);

    const response = await repository.updateOne({
      type: 'NotifyModel',
      id,
      doc: {
        deleted: true,
        updatedAt,
        updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function trashNotifyUser has been end'
    });

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function trashNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Trash All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const trashAllNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function trashAllNotifyUser has been start'
    });

    const { id } = req.query;

    // find all by userId is deleted true
    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: {
        user: id,
        deleted: true
      },
      projection: {
        _id: 1
      }
    });

    if (isEmpty(notifyUsers)) {
      throw commons.newError('notifyUserE002');
    }

    // map to list id
    const ids = notifyUsers.map((e) => e._id);

    const response = await repository.deleteMany({
      type: 'NotifyModel',
      filter: {
        _id: {
          $in: ids
        }
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function trashAllNotifyUser has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'notifyUserS008'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function trashAllNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Data Trash Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllDataTrashNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllDataTrashNotifyUser has been start'
    });

    const { id } = req.query;

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { user: id },
      { deleted: true }
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

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllDataTrashNotifyUser has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS009'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllDataTrashNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Roll Back Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const rollBackNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function rollBackNotifyUser has been start'
    });

    const { id } = req.body;

    const { updatedAt, updatedBy } = helpers.attributeHelper(req, req.body);

    const response = await repository.updateOne({
      type: 'NotifyModel',
      id,
      doc: {
        deleted: false,
        updatedAt,
        updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function rollBackNotifyUser has been end'
    });

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS0010'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function rollBackNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Roll Back All Notify Of User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const rollBackAllNotifyUser = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function rollBackAllNotifyUser has been start'
    });

    const { id } = req.body;

    const { updatedAt, updatedBy } = helpers.attributeHelper(req, req.body);

    // find all by userId is deleted true
    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: {
        user: id,
        deleted: true
      },
      projection: {
        _id: 1
      }
    });

    if (isEmpty(notifyUsers)) {
      throw commons.newError('notifyUserE002');
    }

    // map to list id
    const ids = notifyUsers.map((e) => e._id);

    const response = await repository.updateMany({
      type: 'NotifyModel',
      filter: {
        _id: {
          $in: ids
        }
      },
      doc: {
        deleted: false,
        updatedAt,
        updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function rollBackAllNotifyUser has been end'
    });

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS0011'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function rollBackAllNotifyUser has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Notify User Func
 * @param {*} id
 */
const getNotifyUserFunc = async (id) => {
  console.log(
    '🚀 ~ file: notify-user-orchestrator.js:836 ~ getNotifyUserFunc ~ id',
    id
  );
  try {
    if (isEmpty(id)) {
      throw commons.newError('notifyUserE001');
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
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getNotifyUserFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const notifyUserOrchestrator = {
  getAllNotifyUser,
  getDetailNotifyUser,
  changePasswordTemporary,
  getAllDataNotifyUser,
  getAllUnReadNotifyUser,
  readNotifyUser,
  readAllNotifyUser,
  trashNotifyUser,
  trashAllNotifyUser,
  getAllDataTrashNotifyUser,
  rollBackNotifyUser,
  rollBackAllNotifyUser
};

export default notifyUserOrchestrator;
