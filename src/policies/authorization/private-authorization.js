'use strict';

import permissions from '../permissions';

export default [
  /**
   * AUTH
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/revoke-tokens',
    permission: permissions.admin.auth.REVOKE_TOKEN
  },
  /**
   * ORGANIZATION
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/organizations',
    permission: permissions.admin.organizations.GET_ALL
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
    permission: permissions.admin.organizations.EDIT
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'DELETE',
    permission: permissions.admin.organizations.DELETE
  },
  {
    enable: true,
    pathName: '/organizations/:id/projects',
    method: 'GET',
    permission: permissions.admin.organizations.GET_PROJECT
  },
  /**
   * PROJECT
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/projects',
    permission: permissions.admin.projects.GET_ALL
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
   * TEAM
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/teams',
    permission: permissions.admin.teams.GET_ALL
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/teams',
    permission: permissions.admin.teams.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/teams/:id',
    permission: permissions.admin.teams.GET_ID
  },
  {
    enable: true,
    method: 'PUT',
    pathName: '/teams/:id',
    permission: permissions.admin.teams.UPDATE
  },
  {
    enable: true,
    method: 'DELETE',
    pathName: '/teams/:id',
    permission: permissions.admin.teams.DELETE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/teams/:id/membersInTeam',
    permission: permissions.admin.teams.GET_MEMBER_IN_TEAM
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/teams/:id/membersNotOnTeam',
    permission: permissions.admin.teams.GET_MEMBER_NOT_TEAM
  },
  {
    enable: true,
    method: 'PATCH',
    pathName: '/teams/:id/addMembersToTeam',
    permission: permissions.admin.teams.ADD_MEMBER_TO_TEAM
  },
  {
    enable: true,
    method: 'PATCH',
    pathName: '/teams/:id/removeMembersFromTeam',
    permission: permissions.admin.teams.REMOVE_MEMBER_FROM_TEAM
  },
  /**
   * ROLES
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/roles',
    permission: permissions.admin.roles.GET_ALL
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
    permission: permissions.admin.roles.EDIT
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'DELETE',
    permission: permissions.admin.roles.DELETE
  },
  {
    enable: true,
    pathName: '/roles/:id/permissions',
    method: 'GET',
    permission: permissions.admin.roles.GET_PERMISSIONS
  },
  {
    enable: true,
    pathName: '/roles/:id/add-permissions',
    method: 'PATCH',
    permission: permissions.admin.roles.ADD_PERMISSIONS
  },
  /**
   * PERMISSION
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/permissions',
    permission: permissions.admin.permissions.GET_ALL
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
    permission: permissions.admin.permissions.EDIT
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'DELETE',
    permission: permissions.admin.permissions.DELETE
  },
  {
    enable: true,
    pathName: '/permissions/:id/add-roles',
    method: 'PATCH',
    permission: permissions.admin.permissions.ADD_ROLES
  },
  /**
   * USER
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/users',
    permission: permissions.admin.users.GET_ALL
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
    permission: permissions.admin.users.CHANGE_PASSWORD
  },
  {
    enable: true,
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    permission: permissions.admin.users.ADD_ROLES
  },
  /**
   * USER SESSION
   */
  {
    enable: true,
    pathName: '/userSessions/:userID',
    method: 'GET',
    permission: permissions.admin.userSessions.TIME_LINE
  },
  {
    enable: true,
    pathName: '/userSessions',
    method: 'DELETE',
    permission: permissions.admin.userSessions.DELETE
  },
  /**
   * USER ONLINE
   */
  {
    enable: true,
    pathName: '/userOnline',
    method: 'GET',
    permission: permissions.admin.userOnlines.GET_ALL
  },
  /**
   * NOTIFY TEMPLATE
   */
  {
    enable: true,
    method: 'GET',
    pathName: '/notifyTemplates',
    permission: permissions.admin.notifyTemplates.GET_ALL
  },
  {
    enable: true,
    method: 'POST',
    pathName: '/notifyTemplates',
    permission: permissions.admin.notifyTemplates.CREATE
  },
  {
    enable: true,
    method: 'GET',
    pathName: '/notifyTemplates/:id',
    permission: permissions.admin.notifyTemplates.GET_ID
  },
  {
    enable: true,
    pathName: '/notifyTemplates/:id',
    method: 'PATCH',
    permission: permissions.admin.notifyTemplates.EDIT
  },
  {
    enable: true,
    pathName: '/notifyTemplates/:id',
    method: 'DELETE',
    permission: permissions.admin.notifyTemplates.DELETE
  }
];
