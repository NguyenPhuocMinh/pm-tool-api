'use strict';

const { homeController } = require('../controllers');

/**
 * @description Home router
 */
const homeRouter = [
  {
    pathName: '/',
    method: 'GET',
    methodName: 'homePage',
    controller: homeController.homePage
  },
  {
    pathName: '/health',
    method: 'GET',
    methodName: 'healthCheck',
    controller: homeController.healthCheck
  }
];

export default homeRouter;
