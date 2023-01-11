'use strict';

import jwt from 'jsonwebtoken';
import { isEmpty, isEqual } from 'lodash';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// adapters
import redisAdapter from '@adapters/redis';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.SOCKET_MIDDLEWARE
);

const socketMiddleware = async (socket, next) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function socketMiddleware has been start with args'
    });
    /**
     * Verify token
     */
    const token = socket.handshake.auth.token;

    logger.log({
      level: constants.LOG_LEVELS.VERBOSE,
      message: 'Function socketMiddleware verify data token',
      args: [token]
    });

    if (isEmpty(token)) {
      logger.log({
        level: constants.LOG_LEVELS.ERROR,
        message: 'Function socketMiddleware has been end with message',
        args: {
          msg: 'Not found token socket'
        }
      });
      throw commons.newError('authE0010');
    }

    /**
     * Check valid token
     */
    const { publicSecret } = helpers.getSecretJsonHelper();
    jwt.verify(token, publicSecret, async (err, decoded) => {
      if (err) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: 'Function socketMiddleware verify token has been error',
          args: utils.parseError(err)
        });

        let tokenError;
        switch (true) {
          case err instanceof jwt.TokenExpiredError:
            tokenError = commons.newError('authE006');
            break;
          case err instanceof jwt.JsonWebTokenError:
            tokenError = commons.newError('authE007');
            break;
          default:
            break;
        }
        throw tokenError;
      } else {
        /**
         * Check blacklist token
         */
        const blacklistToken = await redisAdapter.getValue(
          `blacklist_${decoded.id}`
        );
        if (!isEmpty(blacklistToken) && isEqual(token, blacklistToken)) {
          logger.log({
            level: constants.LOG_LEVELS.ERROR,
            message: 'Function socketMiddleware has been end with message',
            args: {
              msg: 'Token socket in black list'
            }
          });

          throw commons.newError('authE009');
        } else {
          return next();
        }
      }
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function socketMiddleware has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export default socketMiddleware;
