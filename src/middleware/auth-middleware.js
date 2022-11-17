'use strict';

import jwt from 'jsonwebtoken';
import { isEmpty, get, includes, find, toUpper } from 'lodash';

import profiles from '@conf/profiles';
import constants from '@constants';

import logger from '@core/logger';
import { formatUtils } from '@core/utils';
import { errorCommon, responseCommon } from '@core/common';
import { publicAuthorization, privateAuthorization } from '@core/authorization';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARES.TOKEN_MIDDLEWARE
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
      req.header(ATTRIBUTE_TOKEN_KEY) || req.cookies[ATTRIBUTE_TOKEN_KEY];
    loggerFactory.verbose(`Function authMiddleware verify data token`, {
      args: [token]
    });
    if (isEmpty(token)) {
      loggerFactory.error(`Function authMiddleware has been end with message`, {
        args: {
          message: 'Not found token in header or cookie'
        }
      });
      const tokenNotFoundError = errorCommon.BuildNewError('AuthTokenNotFound');
      return responseCommon.BuildErrorResponse(toolBox, tokenNotFoundError);
    } else {
      jwt.verify(token, profiles.APP_SECRET_KEY, (err, decoded) => {
        if (err) {
          loggerFactory.error(
            `Function authMiddleware verify token has been error`,
            {
              args: formatUtils.formatErrorMessage(err)
            }
          );

          let tokenError;
          switch (true) {
            case err instanceof jwt.TokenExpiredError:
              tokenError = errorCommon.BuildNewError('AuthTokenExpiredError');
              break;
            case err instanceof jwt.JsonWebTokenError:
              tokenError = errorCommon.BuildNewError('AuthTokenInvalidError');
              break;
            default:
              break;
          }
          return responseCommon.BuildErrorResponse(toolBox, tokenError);
        } else {
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

          const userPermissions = get(decoded, 'permissions');
          const userIsAdmin = get(decoded, 'isAdmin');
          if (
            includes(userPermissions, findPrivateAuth.permission) ||
            userIsAdmin
          ) {
            loggerFactory.verbose(
              `Function authMiddleware has been end with message`,
              {
                args: {
                  message: 'User has permission or user is admin'
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
            const tokenForbiddenError =
              errorCommon.BuildNewError('AuthTokenForbidden');
            return responseCommon.BuildErrorResponse(
              toolBox,
              tokenForbiddenError
            );
          }
        }
      });
    }
  } catch (err) {
    console.error(err);
    loggerFactory.error(`Function authMiddleware has been error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    throw err;
  }
};

export default authMiddleware;
