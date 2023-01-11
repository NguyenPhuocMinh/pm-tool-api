'use strict';

import { authController } from '@mappings/controllers';

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
    pathName: '/auth/whoami',
    method: 'POST',
    methodName: 'whoami',
    controller: authController.whoami
  },
  {
    pathName: '/auth/refreshTokens',
    method: 'POST',
    methodName: 'refreshToken',
    controller: authController.refreshToken
  },
  {
    pathName: '/auth/revokeTokens',
    method: 'POST',
    methodName: 'revokeToken',
    controller: authController.revokeToken
  }
];

export default authRouter;
