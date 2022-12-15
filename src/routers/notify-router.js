'use strict';

import { notifyController } from '@mappings/controllers';

/**
 * @description Notify router
 */
const notifyRouter = [
  {
    pathName: '/notifies/user',
    method: 'GET',
    methodName: 'getAllNotifyOfUser',
    controller: notifyController.getAllNotifyOfUser
  },
  {
    pathName: '/notifies/:id',
    method: 'GET',
    methodName: 'getNotifyById',
    controller: notifyController.getNotifyById
  },
  {
    pathName: '/notifies/change-password-temporary',
    method: 'POST',
    methodName: 'notifyChangePasswordTemporary',
    controller: notifyController.notifyChangePasswordTemporary
  },
  {
    pathName: '/notifies/update-read',
    method: 'PATCH',
    methodName: 'notifyUpdateRead',
    controller: notifyController.notifyUpdateRead
  }
];

export default notifyRouter;
