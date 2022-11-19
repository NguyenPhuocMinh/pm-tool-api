'use strict';

import { healthController } from '../controllers';

/**
 * @description Health router
 */
const healthRouter = [
  {
    pathName: '/healths',
    method: 'GET',
    methodName: 'healthCheck',
    controller: healthController.healthCheck
  }
];

export default healthRouter;
