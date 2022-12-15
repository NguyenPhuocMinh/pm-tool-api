'use strict';

import { configController } from '@mappings/controllers';

/**
 * @description Health router
 */
const healthRouter = [
  {
    pathName: '/configs',
    method: 'GET',
    methodName: 'getDataConfigJson',
    controller: configController.getDataConfigJson
  }
];

export default healthRouter;
