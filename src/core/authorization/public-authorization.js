'use strict';

export default [
  /**
   * LOGIN
   */
  {
    enable: false,
    method: 'POST',
    pathName: '/auth/logins'
  },
  /**
   * LOGOUT
   */
  {
    enable: true,
    method: 'POST',
    pathName: '/auth/logouts'
  },
  /**
   * REFRESH TOKEN
   */
  {
    enable: true,
    method: 'POST',
    pathName: '/auth/refresh-tokens'
  },
  /**
   * HOME
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/'
  }
];
