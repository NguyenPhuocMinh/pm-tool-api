'use strict';

import mongoose from 'mongoose';
import retry from 'retry';
import bcrypt from 'bcrypt';

// conf
import { options, profiles } from '@conf';

import constants from '@constants';
import helpers from '@helpers';

// layers
import repository from '@layers/repository';

// core
import loggerManager from '@core/logger';

const APP_MONGO_URI = profiles.APP_MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_NAME_DATABASE
);

const Init = async () => {
  try {
    await mongoose.connect(APP_MONGO_URI, options.mongooseOptions);

    const secret = helpers.getDataJsonHelper();

    const {
      admin: { email, password }
    } = secret;

    // check admin exists
    const existsAdmin = await repository.count({
      type: 'UserModel',
      filter: {
        email: email
      }
    });

    if (existsAdmin) {
      logger.log({
        level: constants.LOG_LEVELS.INFO,
        message: 'User admin has been exists in database'
      });
    } else {
      const hashPass = bcrypt.hashSync(password, options.bcryptOptions.salt);

      let data = {
        email,
        password: hashPass,
        firstName: 'Admin',
        lastName: 'Super'
      };

      data = helpers.attributeHelper(null, data, 'create');

      await repository.createOne({
        type: 'UserModel',
        doc: {
          ...data,
          isAdmin: true
        }
      });

      logger.log({
        level: constants.LOG_LEVELS.INFO,
        message: 'User admin has been create in database'
      });
    }

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'The database is running on',
      args: `[${APP_MONGO_URI}]`
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'The database has been error',
      args: err
    });

    const operation = retry.operation(options.retryOptions);
    operation.attempt((current) => {
      if (operation.retry(err)) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: `Unable to connect to the database. Retrying(${current})`,
          args: err
        });
        if (current >= options.retryOptions.retries) {
          process.exit(1);
        }
        return err;
      }
    });
    throw err;
  }
};

const Close = () => {
  mongoose.connection.close(function () {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'The database has been close'
    });
  });
};

const dbManager = {
  Init,
  Close
};

export default dbManager;
