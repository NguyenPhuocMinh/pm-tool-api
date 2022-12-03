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
  constants.STRUCT_ORCHESTRATORS.USER_SESSION_ORCHESTRATOR
);

/**
 * @description Get All User Session Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getUserTimelineSession = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getUserTimelineSession has been start`);

    const { userID } = req.params;
    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ user: userID }]);
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
    console.log("🚀 ~ file: user-session-orchestrator.js:51 ~ getUserTimelineSession ~ timelines", timelines)

    const total = await repository.count({
      type: 'UserSessionModel',
      filter: query
    });

    const response = await commons.dataResponsesMapper(timelines);
    console.log("🚀 ~ file: user-session-orchestrator.js:59 ~ getUserTimelineSession ~ response", response)

    loggerFactory.info(`Function getUserTimelineSession has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'UserTimelineSessionSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function getUserTimelineSession has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function createSession has been start`);

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

    loggerFactory.info(`Function createSession has been end`);

    return {
      result: {
        data
      },
      msg: 'UserSessionCreateSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function createSession has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function updateUserSession has been start`);

    const { id, reason } = records;

    const userSession = await getUserSession(id);

    let data = helpers.attributeHelper(req, userSession);

    userSession.lastAccess = data.updatedAt;
    userSession.reason = reason;
    userSession.save();

    data = transfers.userSessionTransfer(userSession);

    loggerFactory.info(`Function updateUserSession has been end`);

    return {
      result: {
        data
      },
      msg: 'UserSessionEditSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function updateUserSession has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function deleteUserSession has been start`);

    const { id } = req.params;

    const userSession = await getUserSession(id);

    const data = helpers.attributeHelper(req, userSession);

    userSession.deleted = true;
    userSession.updatedAt = data.updatedAt;
    userSession.updatedBy = data.updatedBy;

    await userSession.save();

    loggerFactory.info(`Function deleteUserSession has been end`);

    return {
      result: {
        data: null
      },
      msg: 'UserSessionDeleteSuccess'
    };
  } catch (err) {
    loggerFactory.error(`Function deleteUserSession has error`, {
      args: utils.formatErrorMsg(err)
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
      throw commons.newError('UserSessionIDNotFound');
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
    loggerFactory.error(`Function getSession has error`, {
      args: utils.formatErrorMsg(err)
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
