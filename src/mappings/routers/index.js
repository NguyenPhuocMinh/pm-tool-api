'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '@constants';
import logger from '@core/logger';
import { formatErrorMessage } from '@utils';

import { authMiddleware } from '@middleware';

import authRouter from './auth-router';
import homeRouter from './home-router';
import healthRouter from './health-router';
import organizationRouter from './organization-router';
import projectRouter from './project-router';
import roleRouter from './role-router';
import permissionRouter from './permission-router';
import userRouter from './user-router';

const router = express.Router();

const loggerFactory = logger.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_ROUTER
);

const routes = [
  ...authRouter,
  ...homeRouter,
  ...healthRouter,
  ...organizationRouter,
  ...projectRouter,
  ...roleRouter,
  ...permissionRouter,
  ...userRouter
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
      args: formatErrorMessage(err)
    });
    throw err;
  }
});

export default routers;
