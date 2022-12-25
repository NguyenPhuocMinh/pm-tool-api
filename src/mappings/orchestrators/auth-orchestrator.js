'use strict';

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isEmpty } from 'lodash';

// conf
import { profiles, options } from '@conf';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';
// adapters
import redisManager from '@adapters/redis';
// stores
import { sessionStore, sessionUnStore } from '@stores';
// transfers
import transfers from '@transfers';
// validator
import validators from '@validators';
// orchestrators
import userSessionOrchestrator from './user-session-orchestrator';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.AUTH_ORCHESTRATOR
);

const DEFAULT_EXPIRES_TOKEN = constants.DEFAULT_EXPIRES_TOKEN;
const DEFAULT_EXPIRES_REFRESH_TOKEN = constants.DEFAULT_EXPIRES_REFRESH_TOKEN;

const APP_AUDIENCE = profiles.APP_AUDIENCE;
const APP_ISSUER = profiles.APP_ISSUER;

/**
 * @description Sign In Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const signIn = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function signIn has been start`);

    // validator
    const error = validators.validatorLogin(req.body);

    if (error) {
      throw commons.newError('authE002');
    }

    const { email, password } = req.body;

    const user = await getUser(email);

    // compare password
    if (!bcrypt.compareSync(password, user.password)) {
      throw commons.newError('authE004');
    }

    const data = await transfers.authTransfer(user);

    const { privateSecret } = helpers.getSecretJsonHelper();

    // generator token
    const payloadToken = {
      typ: 'Bearer',
      id: data.id,
      email: data.email,
      isAdmin: data.isAdmin
    };
    const token = jwt.sign(payloadToken, privateSecret, {
      expiresIn: DEFAULT_EXPIRES_TOKEN,
      ...options.jwtOptions
    });

    // generator refresh token
    const payloadRefreshToken = {
      typ: 'Refresh',
      id: data.id,
      email: data.email,
      isAdmin: data.isAdmin
    };
    const refreshToken = jwt.sign(payloadRefreshToken, privateSecret, {
      expiresIn: DEFAULT_EXPIRES_REFRESH_TOKEN,
      ...options.jwtOptions
    });

    // save refresh token into db
    user.refreshToken = refreshToken;
    user.isOnline = true;
    await user.save();

    // save token in session
    sessionStore(req, token);

    // save whitelist token in redis
    const wlKey = `whitelist_${data.id}`;
    await redisManager.setExValue(wlKey, token, DEFAULT_EXPIRES_TOKEN);

    loggerFactory.info(`Function signIn has been end`);

    return {
      result: {
        token
      },
      msg: 'authS001'
    };
  } catch (err) {
    loggerFactory.error(`Function signIn has error`, {
      args: utils.formatErrorMsg(err)
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
  const { tokenExp } = req;
  try {
    loggerFactory.info(`Function signOut has been start`);

    const { email, token, sessionID } = req.body;

    const user = await getUser(email);

    await unStoreData(req, user);

    // update lastAccess into db
    await userSessionOrchestrator.updateUserSession(toolBox, {
      id: sessionID,
      reason: 'USER_LOGOUT'
    });

    // store token into blacklist in redis
    const blKey = `blacklist_${user._id}`;
    await redisManager.setExValue(blKey, token, tokenExp);

    user.isOnline = false;
    await user.save();

    loggerFactory.info(`Function signOut has been end`);

    return {
      result: {
        data: null
      },
      msg: 'authS002'
    };
  } catch (err) {
    loggerFactory.error(`Function signOut has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Who Am I Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const whoami = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function whoami has been start`);

    const { email } = req.body;

    const user = await getUser(email);

    const result = await transfers.authTransfer(user);

    loggerFactory.info(`Function whoami has been end`);

    return {
      result: {
        data: result
      },
      msg: 'authS003'
    };
  } catch (err) {
    loggerFactory.error(`Function whoami has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Refresh Token Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const refreshToken = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function refreshToken has been start`);

    const { email, sessionID } = req.body;

    if (isEmpty(email)) {
      throw commons.newError('authE001');
    }

    const user = await getUser(email);

    const wlKey = `whitelist_${user._id}`;

    const { privateSecret, publicSecret } = helpers.getSecretJsonHelper();

    // verify refreshToken
    const payload = await jwt.verify(
      user.refreshToken,
      publicSecret,
      {
        audience: APP_AUDIENCE,
        issuer: APP_ISSUER
      },
      async (err, decoded) => {
        if (err) {
          loggerFactory.error(
            `Function refreshToken verify token has been error`,
            {
              args: utils.formatErrorMsg(err)
            }
          );

          await unStoreData(req, user);

          // update lastAccess into db
          await userSessionOrchestrator.updateUserSession(toolBox, {
            id: sessionID,
            reason: 'USER_TOKEN_EXPIRED'
          });

          // delete token into whitelist in redis
          await redisManager.deleteValue(wlKey);

          throw commons.newError('authE006');
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
      expiresIn: DEFAULT_EXPIRES_TOKEN,
      ...options.jwtOptions
    });

    // save in session
    sessionStore(req, newToken);

    // save whitelist token in redis
    await redisManager.setExValue(wlKey, newToken, DEFAULT_EXPIRES_TOKEN);

    loggerFactory.info(`Function refreshToken has been end`);

    return {
      result: {
        token: newToken
      },
      msg: 'authS004'
    };
  } catch (err) {
    loggerFactory.error(`Function refreshToken has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Revoke Token Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const revokeToken = async (toolBox) => {
  const { req } = toolBox;
  const { tokenExp } = req;
  try {
    loggerFactory.info(`Function revokeToken has been start`);

    const { id, sessionID } = req.body;

    const user = await repository.getOne({
      type: 'UserModel',
      id
    });

    // update lastAccess into db
    await userSessionOrchestrator.updateUserSession(toolBox, {
      id: sessionID,
      reason: 'USER_TOKEN_REVOKED'
    });

    const wlKey = `whitelist_${user._id}`;
    const blKey = `blacklist_${user._id}`;

    // find token from whitelist in redis
    const whitelistToken = await redisManager.getValue(wlKey);

    // store token into blacklist in redis
    await redisManager.setExValue(blKey, whitelistToken, tokenExp);

    // delete token whitelist in redis
    await redisManager.deleteValue(wlKey);

    // set isOnline is false
    user.isOnline = false;
    await user.save();

    loggerFactory.info(`Function revokeToken has been end`);

    return {
      result: {
        data: null
      },
      msg: 'authS005'
    };
  } catch (err) {
    loggerFactory.error(`Function revokeToken has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get user helper
 * @param {String} email
 */
const getUser = async (email) => {
  try {
    const user = await repository.findOne({
      type: 'UserModel',
      filter: {
        email
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

    if (isEmpty(user)) {
      throw commons.newError('authE003');
    }

    return user;
  } catch (err) {
    loggerFactory.error(`Function getUser has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

const unStoreData = async (req, user) => {
  try {
    // save refresh token null into db
    user.refreshToken = null;
    await user.save();

    // un store token in session
    sessionUnStore(req);
  } catch (err) {
    loggerFactory.error(`Function unStoreData has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
};

const authOrchestrator = {
  signIn,
  signOut,
  whoami,
  refreshToken,
  revokeToken
};

export default authOrchestrator;
