'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

// middleware
import { authMiddleware } from '@middleware';

// test
import testRouter from './test-router';
import socketRouter from './socket-router';

import authRouter from './auth-router';
import configRouter from './config-router';
import homeRouter from './home-router';
import healthRouter from './health-router';
import organizationRouter from './organization-router';
import projectRouter from './project-router';
import teamRouter from './team-router';
import roleRouter from './role-router';
import permissionRouter from './permission-router';
import userRouter from './user-router';
import userSessionRouter from './user-session-router';
import userOnlineRouter from './user-online-router';
import notifyRouter from './notify-router';
import notifyUserRouter from './notify-user-router';
import notifyTemplateRouter from './notify-template-router';

const router = express.Router();

const logger = loggerManager(constants.APP_NAME, constants.STRUCT_NAME_ROUTER);

const routes = [
  ...testRouter,
  ...socketRouter,
  ...authRouter,
  ...configRouter,
  ...homeRouter,
  ...healthRouter,
  ...organizationRouter,
  ...projectRouter,
  ...teamRouter,
  ...roleRouter,
  ...permissionRouter,
  ...userRouter,
  ...userSessionRouter,
  ...userOnlineRouter,
  ...notifyRouter,
  ...notifyUserRouter,
  ...notifyTemplateRouter
];

/**
 * @description Init layer router
 * @returns {Array}
 */
const routers = routes.map((route) => {
  try {
    logger.log({
      level: constants.LOG_LEVELS.DATA,
      message: 'Layer route',
      args: route
    });

    const pathName = get(route, 'pathName');
    const method = get(route, 'method');
    const controller = get(route, 'controller');

    router[toLower(method)](pathName, authMiddleware, controller);

    return router;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Layer route has been error',
      args: utils.parseError(err)
    });
    throw err;
  }
});

export default routers;
