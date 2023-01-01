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

    loggerFactory.info(`Function getAllNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS001'
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
      msg: 'notifyUserS002'
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

    loggerFactory.info(`Function getAllDataNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS003'
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

    loggerFactory.info(`Function getAllUnReadNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS004'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllUnReadNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function readNotifyUser has been start`);

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

    loggerFactory.info(`Function readNotifyUser has been start`);

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS005'
    };
  } catch (err) {
    loggerFactory.error(`Function readNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function readAllNotifyUser has been start`);

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

    loggerFactory.info(`Function readAllNotifyUser has been start`);

    return {
      result: {
        data: response
      },
      msg: 'notifyUserS006'
    };
  } catch (err) {
    loggerFactory.error(`Function readAllNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function trashNotifyUser has been start`);

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

    loggerFactory.info(`Function trashNotifyUser has been start`);

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS007'
    };
  } catch (err) {
    loggerFactory.error(`Function trashNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function trashAllNotifyUser has been start`);

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

    loggerFactory.info(`Function trashAllNotifyUser has been start`);

    return {
      result: {
        data: response
      },
      msg: 'notifyUserS008'
    };
  } catch (err) {
    loggerFactory.error(`Function trashAllNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function getAllDataTrashNotifyUser has been start`);

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

    loggerFactory.info(`Function getAllDataTrashNotifyUser has been start`);

    return {
      result: {
        data: result,
        total
      },
      msg: 'notifyUserS009'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllDataTrashNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function rollBackNotifyUser has been start`);

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

    loggerFactory.info(`Function rollBackNotifyUser has been start`);

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS0010'
    };
  } catch (err) {
    loggerFactory.error(`Function rollBackNotifyUser has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function rollBackAllNotifyUser has been start`);

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

    loggerFactory.info(`Function rollBackAllNotifyUser has been start`);

    return {
      result: {
        data: {
          id: response._id
        }
      },
      msg: 'notifyUserS0011'
    };
  } catch (err) {
    loggerFactory.error(`Function rollBackAllNotifyUser has error`, {
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
