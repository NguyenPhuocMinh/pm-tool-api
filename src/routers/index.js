'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

import tokenMiddleware from '../../middlewares/token-middleware';

import homeRouter from './home-router';
import organizationRouter from './organization-router';
import projectRouter from './project-router';
import roleRouter from './role-router';
import permissionRouter from './permission-router';
import userRouter from './user-router';

const router = express.Router();

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_ROUTER
);

const routes = [
  ...homeRouter,
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

    router[toLower(method)](pathName, tokenMiddleware, controller);

    return router;
  } catch (err) {
    loggerFactory.error(`Layer route has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
});

export default routers;
