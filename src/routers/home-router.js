'use strict';

const { HomeController } = require('../controllers');

/**
 * @description Home router
 */
const HomeRouter = [
  {
    pathName: '/',
    method: 'GET',
    methodName: 'HomePage',
    controller: HomeController.HomePage
  },
  {
    pathName: '/test',
    method: 'GET',
    methodName: 'Test',
    controller: HomeController.Test
  }
];

export default HomeRouter;
