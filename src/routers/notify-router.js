'use strict';

import { notifyController } from '@mappings/controllers';

/**
 * @description Notify router
 */
const notifyRouter = [
  {
    pathName: '/notifies/changePasswordTemporary',
    method: 'POST',
    methodName: 'notifyChangePasswordTemporary',
    controller: notifyController.notifyChangePasswordTemporary
  }
];

export default notifyRouter;
