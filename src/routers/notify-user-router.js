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
  },
  {
    pathName: '/notify/users-read',
    method: 'PATCH',
    methodName: 'readNotifyUser',
    controller: notifyUserController.readNotifyUser
  },
  {
    pathName: '/notify/users-reads',
    method: 'PATCH',
    methodName: 'readAllNotifyUser',
    controller: notifyUserController.readAllNotifyUser
  },
  {
    pathName: '/notify/users-trash',
    method: 'PATCH',
    methodName: 'trashNotifyUser',
    controller: notifyUserController.trashNotifyUser
  },
  {
    pathName: '/notify/users-trashes',
    method: 'DELETE',
    methodName: 'trashAllNotifyUser',
    controller: notifyUserController.trashAllNotifyUser
  },
  {
    pathName: '/notify/users-trashes',
    method: 'GET',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.getAllDataTrashNotifyUser
  },
  {
    pathName: '/notify/users-rollback',
    method: 'PATCH',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.rollBackDataTrashNotifyUser
  },
  {
    pathName: '/notify/users-rollbacks',
    method: 'PATCH',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.rollBackAllDataTrashNotifyUser
  }
];

export default notifyUserRouter;
