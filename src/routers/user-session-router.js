'use strict';

import { userSessionController } from '@mappings/controllers';

/**
 * @description User Session router
 */
const userSessionRouter = [
  {
    pathName: '/userSessions/:userID',
    method: 'GET',
    methodName: 'getUserTimelineSession',
    controller: userSessionController.getUserTimelineSession
  },
  {
    pathName: '/userSessions',
    method: 'POST',
    methodName: 'createUserSession',
    controller: userSessionController.createUserSession
  },
  {
    pathName: '/userSessions/:id',
    method: 'PATCH',
    methodName: 'updateUserSession',
    controller: userSessionController.updateUserSession
  },
  {
    pathName: '/userSessions/:id',
    method: 'DELETE',
    methodName: 'deleteUserSession',
    controller: userSessionController.deleteUserSession
  }
];

export default userSessionRouter;
