'use strict';

import { notifyController } from '@mappings/controllers';

/**
 * @description Notify router
 */
const notifyRouter = [
  {
    pathName: '/notifies/change-password-temporary',
    method: 'POST',
    methodName: 'notifyChangePasswordTemporary',
    controller: notifyController.notifyChangePasswordTemporary
  }
];

export default notifyRouter;
