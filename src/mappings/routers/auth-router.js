'use strict';

import { authController } from '../controllers';

/**
 * @description Auth router
 */
const authRouter = [
  {
    pathName: '/auth/logins',
    method: 'POST',
    methodName: 'signIn',
    controller: authController.signIn
  },
  {
    pathName: '/auth/logouts',
    method: 'POST',
    methodName: 'signOut',
    controller: authController.signOut
  },
  {
    pathName: '/auth/refresh-tokens',
    method: 'POST',
    methodName: 'refreshToken',
    controller: authController.refreshToken
  }
];

export default authRouter;
