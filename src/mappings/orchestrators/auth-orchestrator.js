'use strict';

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isEmpty } from 'lodash';

import constants from '@constants';
import { profiles, options } from '@conf';
import { formatErrorMessage } from '@utils';
import { validateSigIn } from '@helpers';
import { authDTO } from '@shared/dtos';

// core
import logger from '@core/logger';
import dbManager from '@core/database';
import { buildNewError, getSecretJSON } from '@core/common';
import { sessionStore, sessionUnStore } from '@stores';

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.AUTH_ORCHESTRATOR
);

const APP_AUDIENCE = profiles.APP_AUDIENCE;
const APP_ISSUER = profiles.APP_ISSUER;
const ATTRIBUTE_TOKEN_KEY = constants.ATTRIBUTE_TOKEN_KEY;

/**
 * @description Sign In Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const signIn = async (toolBox) => {
  const { req } = toolBox;
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
            select: 'id name'
          }
        ]
      }
    });

    const perList = await dbManager.findAll({
      type: 'PermissionModel',
      filter: {
        roles: {
          $in: user.roles.map((r) => r.id)
        }
      },
      projection: {
        name: 1
      }
    });

    if (isEmpty(user)) {
      throw buildNewError('AuthUserIsNotFound');
    }

    // compare password
    if (!bcrypt.compareSync(password, user.password)) {
      throw buildNewError('AuthPasswordIsInCorrect');
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
    } = authDTO(user, { permissions: perList });

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

    const { privateSecret } = getSecretJSON();

    // generator token
    const token = jwt.sign(payload, privateSecret, {
      expiresIn: '15m',
      ...options.jwtOptions
    });

    // generator refresh token
    const refreshToken = jwt.sign(payload, privateSecret, {
      expiresIn: '1d',
      ...options.jwtOptions
    });

    // save refresh token into db
    user.refreshToken = refreshToken;
    await user.save();

    sessionStore(req, token);

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
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Sign Out Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const signOut = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function signOut has been start`);

    const { email } = req.body;

    if (isEmpty(email)) {
      throw buildNewError('AuthEmailIsRequired');
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

    sessionUnStore(req);

    loggerFactory.info(`Function signOut has been end`);

    return {
      result: {
        data: {}
      },
      msg: 'SignOutSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function signOut has error`, {
      args: formatErrorMessage(err)
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
      throw buildNewError('AuthEmailIsRequired');
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
      throw buildNewError('AuthUserIsNotFound');
    }

    const { privateSecret, publicSecret } = getSecretJSON();

    // verify refreshToken
    const payload = jwt.verify(
      user.refreshToken,
      publicSecret,
      {
        audience: APP_AUDIENCE,
        issuer: APP_ISSUER
      },
      (err, decoded) => {
        if (err) {
          loggerFactory.error(
            `Function refreshToken verify token has been error`,
            {
              args: formatErrorMessage(err)
            }
          );

          res.clearCookie(ATTRIBUTE_TOKEN_KEY);

          throw buildNewError('AuthRefreshTokenExpiredError');
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

    const newToken = jwt.sign(payload, privateSecret, {
      expiresIn: '15m',
      ...options.jwtOptions
    });

    sessionStore(req, newToken);

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
      args: formatErrorMessage(err)
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
