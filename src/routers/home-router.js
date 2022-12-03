'use strict';

import { homeController } from '@mappings/controllers';

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
