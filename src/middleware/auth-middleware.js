'use strict';

import jwt from 'jsonwebtoken';
import { isEmpty, get, includes, find, toUpper, isEqual } from 'lodash';
import * as uuid from 'uuid';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import builds from '@builds';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// adapters
import redisAdapter from '@adapters/redis';
// policies
import {
  publicAuthorization,
  privateAuthorization
} from '@policies/authorization';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.AUTH_MIDDLEWARE
);

const ATTRIBUTE_TOKEN_KEY = constants.ATTRIBUTE_TOKEN_KEY;

const authMiddleware = async (req, res, next) => {
  const { route, method } = req;
  const toolBox = { req, res, next };

  // set request id to request
  req.requestID = uuid.v4();

  const findPublicAuth = find(
    publicAuthorization,
    (item) => item.pathName === route.path && item.method === toUpper(method)
  );
  const enablePublicAuth = get(findPublicAuth, 'enable');

  const findPrivateAuth = find(
    privateAuthorization,
    (item) => item.pathName === route.path && item.method === toUpper(method)
  );
  const enablePrivateAuth = get(findPrivateAuth, 'enable');

  try {
    logger.log({
      level: constants.LOG_LEVELS.DEBUG,
      message: 'Function authMiddleware has been start with args',
      args: {
        route,
        method
      }
    });

    /**
     * No need verify token and permission when enable public path is false
     */
    if (!isEmpty(findPublicAuth) && !enablePublicAuth) {
      logger.log({
        level: constants.LOG_LEVELS.VERBOSE,
        message: 'Function authMiddleware has been end with',
        args: {
          msg: 'No need verify token and permission when enable public path is false'
        }
      });
      return next();
    }
    /**
     * Verify token
     */
    const token =
      req.header(ATTRIBUTE_TOKEN_KEY) ||
      req.cookies[ATTRIBUTE_TOKEN_KEY] ||
      req.session[ATTRIBUTE_TOKEN_KEY];

    logger.log({
      level: constants.LOG_LEVELS.VERBOSE,
      message: 'Function authMiddleware verify data token',
      args: [token]
    });

    if (isEmpty(token)) {
      logger.log({
        level: constants.LOG_LEVELS.ERROR,
        message: 'Function authMiddleware has been end with message',
        args: {
          msg: 'Not found token in header or cookie'
        }
      });
      const tokenNotFoundError = commons.newError('authE005');
      return builds.errorResponse(toolBox, tokenNotFoundError);
    }

    /**
     * Check valid token
     */
    const { publicSecret } = helpers.getSecretJsonHelper();
    jwt.verify(token, publicSecret, async (err, decoded) => {
      if (err) {
        logger.log({
          level: constants.LOG_LEVELS.ERROR,
          message: 'Function authMiddleware verify token has been error',
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
        return builds.errorResponse(toolBox, tokenError);
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
            message: 'Function authMiddleware has been end with message',
            args: {
              msg: 'Token in black list in redis'
            }
          });

          const tokenBlackListError = commons.newError('authE009');
          return builds.errorResponse(toolBox, tokenBlackListError);
        }
        /**
         * Set user id and token expires to request
         */
        const { id, iat, exp } = decoded;
        req.holderID = id;
        req.tokenExp = exp - iat; // get seconds
        /**
         * No need verify permissions if user is admin
         */
        const userIsAdmin = get(decoded, 'isAdmin');
        if (userIsAdmin) {
          logger.log({
            level: constants.LOG_LEVELS.VERBOSE,
            message: 'Function authMiddleware has been end with message',
            args: {
              msg: 'User is admin'
            }
          });

          return next();
        }
        /**
         * No need verify permissions if find public paths
         */
        if (!isEmpty(findPublicAuth) && enablePublicAuth) {
          logger.log({
            level: constants.LOG_LEVELS.VERBOSE,
            message: 'Function authMiddleware has been end with message',
            args: {
              msg: 'No need verify token if find public paths'
            }
          });

          return next();
        }
        /**
         * No need verify permissions if find private paths and enable private path is false
         */
        if (!isEmpty(findPrivateAuth) && !enablePrivateAuth) {
          logger.log({
            level: constants.LOG_LEVELS.VERBOSE,
            message: 'Function authMiddleware has been end with message',
            args: {
              msg: 'No need verify permissions if find private paths and enable private path is false'
            }
          });

          return next();
        }
        /**
         * Verify permission in user login
         */
        const userPermissions = get(decoded, 'permissions');
        try {
          if (includes(userPermissions, findPrivateAuth.permission)) {
            logger.log({
              level: constants.LOG_LEVELS.VERBOSE,
              message: 'Function authMiddleware has been end with message',
              args: {
                msg: 'User has permission'
              }
            });

            return next();
          } else {
            logger.log({
              level: constants.LOG_LEVELS.ERROR,
              message: 'Function authMiddleware has been end with message',
              args: {
                msg: 'Permission not found'
              }
            });

            const tokenForbiddenError = commons.newError('authE008');
            return builds.errorResponse(toolBox, tokenForbiddenError);
          }
        } catch (err) {
          logger.log({
            level: constants.LOG_LEVELS.ERROR,
            message: 'Function authMiddleware has been error',
            args: utils.parseError(err)
          });

          return next(err);
        }
      }
    });
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function authMiddleware has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
};

export default authMiddleware;
