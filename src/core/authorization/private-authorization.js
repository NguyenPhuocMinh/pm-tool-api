'use strict';

import permissions from './permissions';

export default [
  /**
   * USER
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/users',
    permission: permissions.admin.getAllUser
  }
];
