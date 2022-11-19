'use strict';

import permissions from './permissions';

export default [
  /**
   * ORGANIZATION
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/organizations',
    permission: permissions.admin.organizations.LIST
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/organizations',
    permission: permissions.admin.organizations.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/organizations/:id',
    permission: permissions.admin.organizations.GET_ID
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'PATCH',
    controller: permissions.admin.organizations.EDIT
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'DELETE',
    controller: permissions.admin.organizations.DELETE
  },
  /**
   * PROJECT
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/projects',
    permission: permissions.admin.projects.LIST
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/projects',
    permission: permissions.admin.projects.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/projects/:id',
    permission: permissions.admin.projects.GET_ID
  },
  /**
   * USER
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/users',
    permission: permissions.admin.users.LIST
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/users',
    permission: permissions.admin.users.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/users/:id',
    permission: permissions.admin.users.GET_ID
  },
  {
    enable: true,
    method: 'PUT',
    pathName: '/users/:id',
    permission: permissions.admin.users.EDIT
  },
  {
    enable: true,
    method: 'DELETE',
    pathName: '/users/:id',
    permission: permissions.admin.users.DELETE
  },
  {
    enable: true,
    pathName: '/users/:id/change-password',
    method: 'PATCH',
    controller: permissions.admin.users.CHANGE_PASSWORD
  },
  {
    enable: true,
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    controller: permissions.admin.users.ADD_ROLES
  },
  /**
   * ROLES
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/roles',
    permission: permissions.admin.roles.LIST
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/roles',
    permission: permissions.admin.roles.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/roles/:id',
    permission: permissions.admin.roles.GET_ID
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'PATCH',
    controller: permissions.admin.roles.EDIT
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'DELETE',
    controller: permissions.admin.roles.DELETE
  },
  {
    enable: true,
    pathName: '/roles/:id/permissions',
    method: 'GET',
    controller: permissions.admin.roles.GET_PERMISSIONS
  },
  {
    enable: true,
    pathName: '/roles/:id/add-permissions',
    method: 'PATCH',
    controller: permissions.admin.roles.ADD_PERMISSIONS
  },
  /**
   * PERMISSION
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/permissions',
    permission: permissions.admin.permissions.LIST
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/permissions',
    permission: permissions.admin.permissions.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/permissions/:id',
    permission: permissions.admin.permissions.GET_ID
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'PATCH',
    controller: permissions.admin.permissions.EDIT
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'DELETE',
    controller: permissions.admin.permissions.DELETE
  },
  {
    enable: true,
    pathName: '/permissions/:id/add-roles',
    method: 'PATCH',
    controller: permissions.admin.permissions.ADD_ROLES
  }
];
