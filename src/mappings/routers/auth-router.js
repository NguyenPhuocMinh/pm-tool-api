'use strict';

import { authController } from '../controllers';

/**
 * @description Auth router
 */
const authRouter = [
  {
    enable: false,
    pathName: '/auth/logins',
    method: 'POST',
    methodName: 'signIn',
    controller: authController.signIn
  },
  {
    enable: true,
    pathName: '/auth/logouts',
    method: 'POST',
    methodName: 'signOut',
    controller: authController.signOut
  },
  {
    enable: true,
    pathName: '/auth/refresh-tokens',
    method: 'POST',
    methodName: 'refreshToken',
    controller: authController.refreshToken
  }
];

export default authRouter;
