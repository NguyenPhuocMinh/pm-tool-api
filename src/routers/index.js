'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '../../constants';
import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';

import HomeRouter from './home-router';
import OrganizationRouter from './organization-router';
import ProjectRouter from './project-router';
import RoleRouter from './role-router';
import PermissionRouter from './permission-router';

const router = express.Router();

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_ROUTER
);

const routes = [
  ...HomeRouter,
  ...OrganizationRouter,
  ...ProjectRouter,
  ...RoleRouter,
  ...PermissionRouter
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

    router[toLower(method)](pathName, controller);

    return router;
  } catch (err) {
    loggerFactory.error(`Layer route has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    throw err;
  }
});

export default routers;
