'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '@constants';
import utils from '@utils';

// core
import loggerManager from '@core/logger';

// middleware
import { authMiddleware } from '@middleware';

import authRouter from './auth-router';
import configRouter from './config-router';
import homeRouter from './home-router';
import healthRouter from './health-router';
import organizationRouter from './organization-router';
import projectRouter from './project-router';
import roleRouter from './role-router';
import permissionRouter from './permission-router';
import userRouter from './user-router';
import userSessionRouter from './user-session-router';
import notifyRouter from './notify-router';
import notifyUserRouter from './notify-user-router';
import notifyTemplateRouter from './notify-template-router';
import systemLogRouter from './system-log-router';

const router = express.Router();

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_NAME_ROUTER
);

const routes = [
  ...authRouter,
  ...configRouter,
  ...homeRouter,
  ...healthRouter,
  ...organizationRouter,
  ...projectRouter,
  ...roleRouter,
  ...permissionRouter,
  ...userRouter,
  ...userSessionRouter,
  ...notifyRouter,
  ...notifyUserRouter,
  ...notifyTemplateRouter,
  ...systemLogRouter
];

/**
 * @description Init layer router
 * @returns {Array}
 */
const routers = routes.map((route) => {
  try {
    loggerFactory.data(`Layer route`, {
      args: route
    });

    const pathName = get(route, 'pathName');
    const method = get(route, 'method');
    const controller = get(route, 'controller');

    router[toLower(method)](pathName, authMiddleware, controller);

    return router;
  } catch (err) {
    loggerFactory.error(`Layer route has error`, {
      args: utils.formatErrorMsg(err)
    });
    throw err;
  }
});

export default routers;
