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
   * CONFIG
   */
  {
    enable: false,
    method: 'GET',
    pathName: '/configs/:name'
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
  },
  /**
   * NOTIFY
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/notifies/user'
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/notifies/change-password-temporary'
  },
  {
    enable: true,
    method: 'PATCH',
    pathName: '/notifies/update-read'
  },
  /**
   * NOTIFY USER
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/notify/users'
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/notify/users/:id'
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/notify/users-data'
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/notify/users-unread'
  }
];
