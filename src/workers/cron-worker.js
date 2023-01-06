'use strict';

import bcrypt from 'bcrypt';
import moment from 'moment';
import 'moment-timezone';
import randomString from 'randomstring';
import { isEmpty } from 'lodash';

// conf
import { options } from '@conf';
import constants from '@constants';
import utils from '@utils';

// layers
import repository from '@layers/repository';
// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_WORKER.CRON_WORKER
);

export const handlerWorkerCronChangePasswordTemporary = async (now) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function handlerWorkerCronChangePasswordTemporary has been start',
      args: {
        now
      }
    });
    /**
     * after 30 minutes find all user with condition bellow
     * isPasswordSet true
     * isPasswordTemporary true
     * createdAt < now - 1
     */
    const overDay = moment(now)
      .add(7, 'hours')
      .tz(constants.TIMEZONE_DEFAULT)
      .utc()
      .subtract(1, 'day')
      .format();

    const users = await repository.findAll({
      type: 'UserModel',
      filter: {
        deleted: false,
        isPasswordSet: true,
        isPasswordTemporary: true,
        createdAt: {
          $lt: overDay
        }
      },
      projection: {
        __v: 0
      }
    });

    if (isEmpty(users)) {
      return;
    }

    // map to list id user
    const userIds = users.map((e) => e._id);

    // hash new pass
    const newHashPass = await bcrypt.hash(
      randomString.generate(),
      options.bcryptOptions.salt
    );

    const dataUpdate = {
      password: newHashPass,
      passwordConfirm: newHashPass
    };

    await repository.updateMany({
      type: 'UserModel',
      filter: {
        _id: {
          $in: userIds
        }
      },
      doc: dataUpdate
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function handlerWorkerCronChangePasswordTemporary has been end'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function handlerWorkerCronChangePasswordTemporary has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export const handlerWorkerCronAutoDeleteNotifyInTrash = async (now) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function handlerWorkerCronAutoDeleteNotifyInTrash has been start',
      args: {
        now
      }
    });
    /**
     * after 30 minutes find all user with condition bellow
     * isPasswordSet true
     * isPasswordTemporary true
     * createdAt =< now - 30 day
     */
    const deleteDay = moment(now)
      .add(7, 'hours')
      .tz(constants.TIMEZONE_DEFAULT)
      .utc()
      .subtract(1, 'day')
      .format();

    const notifyUsers = await repository.findAll({
      type: 'NotifyModel',
      filter: {
        deleted: true,
        createdAt: {
          $lte: deleteDay
        }
      }
    });

    if (isEmpty(notifyUsers)) {
      return;
    }

    const notifyIds = notifyUsers.map((e) => e._id);

    await repository.deleteMany({
      type: 'NotifyModel',
      filter: {
        _id: {
          $in: notifyIds
        }
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function handlerWorkerCronAutoDeleteNotifyInTrash has been end'
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function handlerWorkerCronAutoDeleteNotifyInTrash has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};
