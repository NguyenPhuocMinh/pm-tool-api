'use strict';

import { systemLogController } from '@mappings/controllers';

/**
 * @description System log router
 */
const systemLogRouter = [
  {
    enable: true,
    pathName: '/system-logs',
    method: 'GET',
    methodName: 'getAllSystemLog',
    controller: systemLogController.getAllSystemLog
  }
];

export default systemLogRouter;
