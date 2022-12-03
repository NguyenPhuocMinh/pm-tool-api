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
   * WHO AM I
   */
  {
    enable: true,
    method: 'POST',
    pathName: '/auth/whoami'
  },
  /**
   * REFRESH TOKEN
   */
  {
    enable: false,
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
  },
  /**
   * HEALTH
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/healths'
  },
  /**
   * USER SESSION
   */
  {
    enable: true,
    method: 'POST',
    pathName: '/users/sessions'
  },
  {
    enable: true,
    method: 'PATCH',
    pathName: '/users/sessions/:id'
  }
];
