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
  }
];

export default HomeRouter;
