'use strict';

import { userSessionController } from '@mappings/controllers';

/**
 * @description User Session router
 */
const userSessionRouter = [
  {
    pathName: '/users-session/:userID',
    method: 'GET',
    methodName: 'getUserTimelineSession',
    controller: userSessionController.getUserTimelineSession
  },
  {
    pathName: '/users-session',
    method: 'POST',
    methodName: 'createUserSession',
    controller: userSessionController.createUserSession
  },
  {
    pathName: '/users-session/:id',
    method: 'PATCH',
    methodName: 'updateUserSession',
    controller: userSessionController.updateUserSession
  },
  {
    pathName: '/users-session/:id',
    method: 'DELETE',
    methodName: 'deleteUserSession',
    controller: userSessionController.deleteUserSession
  }
];

export default userSessionRouter;
