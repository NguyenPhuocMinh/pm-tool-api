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

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.USER_SESSION_ORCHESTRATOR
);

/**
 * @description Get All User Session Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getUserTimelineSession = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getUserTimelineSession Orchestrator has been start'
    });

    const { userID } = req.params;
    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { deleted: false, user: userID }
    ]);
    const sort = helpers.sortHelper(req.query);

    const timelines = await repository.findAll({
      type: 'UserSessionModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await repository.count({
      type: 'UserSessionModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(timelines);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getUserTimelineSession Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'userSessionS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getUserTimelineSession Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create User Session Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createUserSession = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createSession Orchestrator has been start'
    });

    const { userID } = req.body;

    let data = helpers.attributeHelper(
      req,
      {
        user: userID,
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip
      },
      'create'
    );

    data.startAccess = data.createdAt;
    data.lastAccess = data.updatedAt;

    const userSession = await repository.createOne({
      type: 'UserSessionModel',
      doc: data
    });

    data = transfers.userSessionTransfer(userSession);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createSession Orchestrator has been end'
    });

    return {
      result: {
        data
      },
      msg: 'userSessionS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createSession Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Session By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateUserSession = async (toolBox, records) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateUserSession Orchestrator has been start'
    });

    const { id, reason } = records;

    const userSession = await getUserSession(id);

    let data = helpers.attributeHelper(req, userSession);

    userSession.lastAccess = data.updatedAt;
    userSession.reason = reason;
    userSession.save();

    data = transfers.userSessionTransfer(userSession);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateUserSession Orchestrator has been end'
    });

    return {
      result: {
        data
      },
      msg: 'userSessionS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateUserSession Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Session By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteUserSession = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteUserSession Orchestrator has been start'
    });

    const { id } = req.params;

    const userSession = await getUserSession(id);

    const data = helpers.attributeHelper(req, userSession);

    userSession.deleted = true;
    userSession.updatedAt = data.updatedAt;
    userSession.updatedBy = data.updatedBy;

    await userSession.save();

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteUserSession Orchestrator has been end'
    });

    return {
      result: {
        data: null
      },
      msg: 'userSessionS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteUserSession Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get user session helper
 * @param {*} id
 */
const getUserSession = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('userSessionE001');
    }

    const session = await repository.getOne({
      type: 'UserSessionModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'user',
            select: 'id firstName lastName'
          }
        ]
      }
    });

    return session;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getUserSession Orchestrator has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

const userSessionOrchestrator = {
  getUserTimelineSession,
  createUserSession,
  updateUserSession,
  deleteUserSession
};

export default userSessionOrchestrator;
