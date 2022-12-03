'use strict';

import { userSessionController } from '@mappings/controllers';

/**
 * @description Session router
 */
const sessionRouter = [
  {
    pathName: '/users/sessions/:userID',
    method: 'GET',
    methodName: 'getUserTimelineSession',
    controller: userSessionController.getUserTimelineSession
  },
  {
    pathName: '/users/sessions',
    method: 'POST',
    methodName: 'createUserSession',
    controller: userSessionController.createUserSession
  },
  {
    pathName: '/users/sessions/:id',
    method: 'PATCH',
    methodName: 'updateUserSession',
    controller: userSessionController.updateUserSession
  },
  {
    pathName: '/users/sessions/:id',
    method: 'DELETE',
    methodName: 'deleteUserSession',
    controller: userSessionController.deleteUserSession
  }
];

export default sessionRouter;
