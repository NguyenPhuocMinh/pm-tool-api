'use strict';

import { notifyUserController } from '@mappings/controllers';

/**
 * @description Notify user router
 */
const notifyUserRouter = [
  {
    pathName: '/notify/users',
    method: 'GET',
    methodName: 'getAllNotifyUser',
    controller: notifyUserController.getAllNotifyUser
  },
  {
    pathName: '/notify/users/:id',
    method: 'GET',
    methodName: 'getDetailNotifyUser',
    controller: notifyUserController.getDetailNotifyUser
  },
  {
    pathName: '/notify/users-data',
    method: 'GET',
    methodName: 'getAllDataNotifyUser',
    controller: notifyUserController.getAllDataNotifyUser
  },
  {
    pathName: '/notify/users-unread',
    method: 'GET',
    methodName: 'getAllUnReadNotifyUser',
    controller: notifyUserController.getAllUnReadNotifyUser
  }
];

export default notifyUserRouter;