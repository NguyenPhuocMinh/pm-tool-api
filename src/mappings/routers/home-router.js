'use strict';

import { homeController } from '../controllers';

/**
 * @description Home router
 */
const homeRouter = [
  {
    enable: true,
    pathName: '/',
    method: 'GET',
    methodName: 'homePage',
    controller: homeController.homePage
  }
];

export default homeRouter;
