'use strict';

import express from 'express';
import { get, toLower } from 'lodash';

import constants from '../../core/constants';
import logUtils from '../../core/utils/log-util';

import HomeRouter from './home-router';

const router = express.Router();

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_NAME_ROUTER
);

const Routes = [...HomeRouter];

/**
 * @description Init layer router
 * @returns {Array}
 */
const initRouters = Routes.map((route) => {
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
      args: err.message
    });
    throw err;
  }
});

export default initRouters;
