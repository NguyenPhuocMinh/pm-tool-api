'use strict';

import Promise from 'bluebird';

import constants from '@constants';
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
 * @description Get All User Online Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllUserOnline = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllUserOnline has been start`);

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ isOnline: true }]);
    const sort = helpers.sortHelper(req.query);

    const usersOnline = await repository.findAll({
      type: 'UserModel',
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
      type: 'UserModel',
      filter: query
    });

    const response = await Promise.map(
      usersOnline,
      (data) => {
        loggerFactory.data(`Function dataResponsesMapper has been end`);
        return transfers.userOnlineTransfer(data, req);
      },
      { concurrency: 5 }
    );

    loggerFactory.info(`Function getAllUserOnline has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'userOnlineS001'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllUserOnline has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const userOnlineOrchestrator = {
  getAllUserOnline
};

export default userOnlineOrchestrator;
