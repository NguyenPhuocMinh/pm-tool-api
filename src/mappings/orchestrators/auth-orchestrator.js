'use strict';

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isEmpty } from 'lodash';

import profiles from '@conf/profiles';
import options from '@conf/options';

import constants from '@constants';

import logger from '@core/logger';
import dbManager from '@core/database';

import { formatUtils } from '@core/utils';
import { errorCommon } from '@core/common';
import { authDTO } from '@core/shared/dtos';
import { validateSigIn } from '@helpers/auth-helper';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.AUTH_ORCHESTRATOR
);

const APP_AUDIENCE = profiles.APP_AUDIENCE;
const APP_ISSUER = profiles.APP_ISSUER;

/**
 * @description Sign In Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const signIn = async (toolBox) => {
  const { req, res } = toolBox;
  try {
    loggerFactory.info(`Function signIn has been start`);

    // validate inputs
    validateSigIn(req.body);

    const { email, password } = req.body;

    const user = await dbManager.findOne({
      type: 'UserModel',
      filter: {
        email: email
      },
      projection: {
        __v: 0,
        createdAt: 0,
        createdBy: 0,
        updatedAt: 0,
        updatedBy: 0
      },
      options: {
        populate: [
          {
            path: 'roles',
            select: 'id name permissions',
            populate: [
              {
                path: 'permissions',
                select: 'id name'
              }
            ]
          }
        ]
      }
    });

    if (isEmpty(user)) {
      throw errorCommon.BuildNewError('AuthUserIsNotFound');
    }

    // compare password
    if (!bcrypt.compareSync(password, user.password)) {
      throw errorCommon.BuildNewError('AuthPasswordIsInCorrect');
    }

    const {
      id,
      firstName,
      lastName,
      fullName,
      isAdmin,
      roles,
      permissions,
      locale,
      avatarURL,
      backgroundURL
    } = authDTO(user);

    const payload = {
      id,
      firstName,
      lastName,
      fullName,
      email,
      locale,
      isAdmin,
      roles,
      permissions,
      avatarURL,
      backgroundURL
    };

    // generator token
    const token = jwt.sign(payload, profiles.APP_SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: '5m',
      ...options.jwtOptions
    });

    // generator refresh token
    const refreshToken = jwt.sign(payload, profiles.APP_SECRET_REFRESH_KEY, {
      algorithm: 'HS256',
      expiresIn: '10m',
      ...options.jwtOptions
    });

    // save refresh token into db
    user.refreshToken = refreshToken;
    await user.save();

    res.cookie(constants.ATTRIBUTE_TOKEN_KEY, token, options.cookieOptions);

    loggerFactory.info(`Function signIn has been end`);

    return {
      result: {
        data: {
          token,
          payload
        }
      },
      msg: 'SignInSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function signIn has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Sign Out Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const signOut = async (toolBox) => {
  const { req, res } = toolBox;
  try {
    loggerFactory.info(`Function signOut has been start`);

    const { email } = req.body;

    if (isEmpty(email)) {
      throw errorCommon.BuildNewError('AuthEmailIsRequired');
    }

    const user = await dbManager.findOne({
      type: 'UserModel',
      filter: {
        email
      },
      projection: {
        refreshToken: 1
      }
    });

    user.refreshToken = null;
    await user.save();

    res.clearCookie(constants.ATTRIBUTE_TOKEN_KEY);

    loggerFactory.info(`Function signOut has been end`);

    return {
      result: {
        data: {}
      },
      msg: 'SignOutSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function signOut has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Refresh Token Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const refreshToken = async (toolBox) => {
  const { req, res } = toolBox;
  try {
    loggerFactory.info(`Function refreshToken has been start`);

    const { email } = req.body;

    if (isEmpty(email)) {
      throw errorCommon.BuildNewError('AuthEmailIsRequired');
    }

    const user = await dbManager.findOne({
      type: 'UserModel',
      filter: {
        email
      },
      projection: {
        refreshToken: 1
      }
    });

    if (isEmpty(user)) {
      throw errorCommon.BuildNewError('AuthUserIsNotFound');
    }

    // verify refreshToken
    const payload = jwt.verify(
      user.refreshToken,
      profiles.APP_SECRET_REFRESH_KEY,
      {
        audience: APP_AUDIENCE,
        issuer: APP_ISSUER
      },
      (err, decoded) => {
        if (err) {
          loggerFactory.error(
            `Function refreshToken verify token has been error`,
            {
              args: formatUtils.formatErrorMessage(err)
            }
          );
          throw errorCommon.BuildNewError('AuthRefreshTokenExpiredError');
        } else {
          delete decoded.aud;
          delete decoded.iss;
          delete decoded.jti;
          delete decoded.exp;
          delete decoded.iat;

          return decoded;
        }
      }
    );

    const newToken = jwt.sign(payload, profiles.APP_SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: '5m',
      ...options.jwtOptions
    });

    res.cookie(constants.ATTRIBUTE_TOKEN_KEY, newToken, options.cookieOptions);

    loggerFactory.info(`Function refreshToken has been end`);

    return {
      result: {
        data: {
          token: newToken,
          payload
        }
      },
      msg: 'RefreshTokenSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function refreshToken has error`, {
      args: formatUtils.formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const authOrchestrator = {
  signIn,
  signOut,
  refreshToken
};

export default authOrchestrator;
