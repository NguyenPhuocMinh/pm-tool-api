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
  }
];

export default homeRouter;
