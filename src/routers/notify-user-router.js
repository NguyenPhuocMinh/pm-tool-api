'use strict';

import { notifyUserController } from '@mappings/controllers';

/**
 * @description Notify user router
 */
const notifyUserRouter = [
  {
    pathName: '/notifyUsers',
    method: 'GET',
    methodName: 'getAllNotifyUser',
    controller: notifyUserController.getAllNotifyUser
  },
  {
    pathName: '/notifyUsers/:id',
    method: 'GET',
    methodName: 'getDetailNotifyUser',
    controller: notifyUserController.getDetailNotifyUser
  },
  {
    pathName: '/notifyUsersChangePasswordTemporary',
    method: 'POST',
    methodName: 'changePasswordTemporary',
    controller: notifyUserController.changePasswordTemporary
  },
  {
    pathName: '/notifyUsersData',
    method: 'GET',
    methodName: 'getAllDataNotifyUser',
    controller: notifyUserController.getAllDataNotifyUser
  },
  {
    pathName: '/notifyUsersUnread',
    method: 'GET',
    methodName: 'getAllUnReadNotifyUser',
    controller: notifyUserController.getAllUnReadNotifyUser
  },
  {
    pathName: '/notifyUsersRead',
    method: 'PATCH',
    methodName: 'readNotifyUser',
    controller: notifyUserController.readNotifyUser
  },
  {
    pathName: '/notifyUsersReads',
    method: 'PATCH',
    methodName: 'readAllNotifyUser',
    controller: notifyUserController.readAllNotifyUser
  },
  {
    pathName: '/notifyUsersTrash',
    method: 'PATCH',
    methodName: 'trashNotifyUser',
    controller: notifyUserController.trashNotifyUser
  },
  {
    pathName: '/notifyUsersTrashes',
    method: 'DELETE',
    methodName: 'trashAllNotifyUser',
    controller: notifyUserController.trashAllNotifyUser
  },
  {
    pathName: '/notifyUsersTrashes',
    method: 'GET',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.getAllDataTrashNotifyUser
  },
  {
    pathName: '/notifyUsersRollback',
    method: 'PATCH',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.rollBackDataTrashNotifyUser
  },
  {
    pathName: '/notifyUsersRollbacks',
    method: 'PATCH',
    methodName: 'getAllDataTrashNotifyUser',
    controller: notifyUserController.rollBackAllDataTrashNotifyUser
  }
];

export default notifyUserRouter;
