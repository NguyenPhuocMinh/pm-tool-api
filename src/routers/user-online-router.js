'use strict';

import { userOnlineController } from '@mappings/controllers';

/**
 * @description User Online Router
 */
const userOnlineRouter = [
  {
    pathName: '/userOnline',
    method: 'GET',
    methodName: 'getAllUserOnline',
    controller: userOnlineController.getAllUserOnline
  }
];

export default userOnlineRouter;
