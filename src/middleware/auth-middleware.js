'use strict';

import jwt from 'jsonwebtoken';
import { isEmpty, get, includes, find, toUpper } from 'lodash';

import constants from '@constants';
import { formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import { buildNewError, buildErrorResponse, getSecretJSON } from '@core/common';
import { publicAuthorization, privateAuthorization } from '@core/authorization';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARES.AUTH_MIDDLEWARE
);

const ATTRIBUTE_TOKEN_KEY = constants.ATTRIBUTE_TOKEN_KEY;

const authMiddleware = (req, res, next) => {
  const { route, method } = req;
  const toolBox = { req, res, next };

  const findPublicAuth = find(
    publicAuthorization,
    (item) => item.pathName === route.path && item.method === method
  );
  const enablePublicAuth = get(findPublicAuth, 'enable');

  const findPrivateAuth = find(
    privateAuthorization,
    (item) => item.pathName === route.path && item.method === toUpper(method)
  );
  const enablePrivateAuth = get(findPrivateAuth, 'enable');

  try {
    loggerFactory.debug(`Function authMiddleware has been start with args`, {
      args: {
        route,
        method
      }
    });
    /**
     * No need verify token and permission when enable public path is false
     */
    if (!isEmpty(findPublicAuth) && !enablePublicAuth) {
      loggerFactory.verbose(`Function authMiddleware has been end with`, {
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
    loggerFactory.verbose(`Function authMiddleware verify data token`, {
      args: [token]
    });
    if (isEmpty(token)) {
      loggerFactory.error(`Function authMiddleware has been end with message`, {
        args: {
          message: 'Not found token in header or cookie'
        }
      });
      const tokenNotFoundError = buildNewError('AuthTokenNotFound');
      return buildErrorResponse(toolBox, tokenNotFoundError);
    } else {
      const { publicSecret } = getSecretJSON();
      jwt.verify(token, publicSecret, (err, decoded) => {
        if (err) {
          loggerFactory.error(
            `Function authMiddleware verify token has been error`,
            {
              args: formatErrorMessage(err)
            }
          );

          let tokenError;
          switch (true) {
            case err instanceof jwt.TokenExpiredError:
              tokenError = buildNewError('AuthTokenExpiredError');
              break;
            case err instanceof jwt.JsonWebTokenError:
              tokenError = buildNewError('AuthTokenInvalidError');
              break;
            default:
              break;
          }
          return buildErrorResponse(toolBox, tokenError);
        } else {
          /**
           * No need verify permissions if user is admin
           */
          const userIsAdmin = get(decoded, 'isAdmin');
          if (userIsAdmin) {
            loggerFactory.verbose(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message: 'User is admin'
                }
              }
            );
            return next();
          }
          /**
           * No need verify permissions if find public paths
           */
          if (!isEmpty(findPublicAuth) && enablePublicAuth) {
            loggerFactory.verbose(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message: 'No need verify token if find public paths'
                }
              }
            );
            return next();
          }
          /**
           * No need verify permissions if find private paths and enable private path is false
           */
          if (!isEmpty(findPrivateAuth) && !enablePrivateAuth) {
            loggerFactory.verbose(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message:
                    'No need verify permissions if find private paths and enable private path is false'
                }
              }
            );
            return next();
          }

          /**
           * Verify permission in user login
           */
          const userPermissions = get(decoded, 'permissions');
          if (includes(userPermissions, findPrivateAuth.permission)) {
            loggerFactory.verbose(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message: 'User has permission'
                }
              }
            );
            return next();
          } else {
            loggerFactory.error(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message: 'Permission not found'
                }
              }
            );
            const tokenForbiddenError = buildNewError('AuthTokenForbidden');
            return buildErrorResponse(toolBox, tokenForbiddenError);
          }
        }
      });
    }
  } catch (err) {
    console.error(err);
    loggerFactory.error(`Function authMiddleware has been error`, {
      args: formatErrorMessage(err)
    });
    throw err;
  }
};

export default authMiddleware;
