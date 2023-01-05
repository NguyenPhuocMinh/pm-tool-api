'use strict';

import { testController } from '@mappings/controllers';

/**
 * @description Test router
 */
const testRouter = [
  {
    pathName: '/test-amqp',
    method: 'POST',
    methodName: 'testSendQueue',
    controller: testController.testSendQueue
  }
];

export default testRouter;
