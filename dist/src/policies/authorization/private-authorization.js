'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _permissions = _interopRequireDefault(require("../permissions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = [
/**
 * AUTH
 */
{
  enable: true,
  method: 'GET',
  pathName: '/revoke-tokens',
  permission: _permissions["default"].admin.auth.REVOKE_TOKEN
},
/**
 * ORGANIZATION
 */
{
  enable: true,
  method: 'GET',
  pathName: '/organizations',
  permission: _permissions["default"].admin.organizations.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/organizations',
  permission: _permissions["default"].admin.organizations.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/organizations/:id',
  permission: _permissions["default"].admin.organizations.GET_ID
}, {
  enable: true,
  pathName: '/organizations/:id',
  method: 'PUT',
  permission: _permissions["default"].admin.organizations.UPDATE
}, {
  enable: true,
  pathName: '/organizations/:id',
  method: 'DELETE',
  permission: _permissions["default"].admin.organizations.DELETE
}, {
  enable: true,
  pathName: '/organizations/:id/projects-in-organizations',
  method: 'GET',
  permission: _permissions["default"].admin.organizations.GET_PROJECT_IN_ORGANIZATION
}, {
  enable: true,
  pathName: '/organizations/:id/projects-not-on-organizations',
  method: 'GET',
  permission: _permissions["default"].admin.organizations.GET_PROJECT_NOT_ORGANIZATION
}, {
  enable: true,
  pathName: '/organizations/:id/add-projects-to-organizations',
  method: 'PATCH',
  permission: _permissions["default"].admin.organizations.ADD_PROJECT_TO_ORGANIZATION
}, {
  enable: true,
  pathName: '/organizations/:id/remove-projects-to-organizations',
  method: 'PATCH',
  permission: _permissions["default"].admin.organizations.REMOVE_PROJECT_FROM_ORGANIZATION
},
/**
 * PROJECT
 */
{
  enable: true,
  method: 'GET',
  pathName: '/projects',
  permission: _permissions["default"].admin.projects.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/projects',
  permission: _permissions["default"].admin.projects.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/projects/:id',
  permission: _permissions["default"].admin.projects.GET_ID
}, {
  enable: true,
  method: 'PUT',
  pathName: '/projects/:id',
  permission: _permissions["default"].admin.projects.UPDATE
}, {
  enable: true,
  method: 'DELETE',
  pathName: '/projects/:id',
  permission: _permissions["default"].admin.projects.DELETE
}, {
  enable: true,
  method: 'GET',
  pathName: '/projects/:id/teams-in-projects',
  permission: _permissions["default"].admin.projects.GET_TEAM_IN_PROJECT
}, {
  enable: true,
  method: 'GET',
  pathName: '/projects/:id/teams-not-on-projects',
  permission: _permissions["default"].admin.projects.GET_TEAM_NOT_PROJECT
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/projects/:id/add-teams-to-projects',
  permission: _permissions["default"].admin.projects.ADD_TEAM_TO_PROJECT
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/projects/:id/remove-teams-from-projects',
  permission: _permissions["default"].admin.projects.REMOVE_TEAM_FROM_PROJECT
},
/**
 * TEAM
 */
{
  enable: true,
  method: 'GET',
  pathName: '/teams',
  permission: _permissions["default"].admin.teams.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/teams',
  permission: _permissions["default"].admin.teams.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/teams/:id',
  permission: _permissions["default"].admin.teams.GET_ID
}, {
  enable: true,
  method: 'PUT',
  pathName: '/teams/:id',
  permission: _permissions["default"].admin.teams.UPDATE
}, {
  enable: true,
  method: 'DELETE',
  pathName: '/teams/:id',
  permission: _permissions["default"].admin.teams.DELETE
}, {
  enable: true,
  method: 'GET',
  pathName: '/teams/:id/membersInTeam',
  permission: _permissions["default"].admin.teams.GET_MEMBER_IN_TEAM
}, {
  enable: true,
  method: 'GET',
  pathName: '/teams/:id/membersNotOnTeam',
  permission: _permissions["default"].admin.teams.GET_MEMBER_NOT_TEAM
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/teams/:id/addMembersToTeam',
  permission: _permissions["default"].admin.teams.ADD_MEMBER_TO_TEAM
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/teams/:id/removeMembersFromTeam',
  permission: _permissions["default"].admin.teams.REMOVE_MEMBER_FROM_TEAM
},
/**
 * ROLES
 */
{
  enable: true,
  method: 'GET',
  pathName: '/roles',
  permission: _permissions["default"].admin.roles.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/roles',
  permission: _permissions["default"].admin.roles.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/roles/:id',
  permission: _permissions["default"].admin.roles.GET_ID
}, {
  enable: true,
  pathName: '/roles/:id',
  method: 'PATCH',
  permission: _permissions["default"].admin.roles.EDIT
}, {
  enable: true,
  pathName: '/roles/:id',
  method: 'DELETE',
  permission: _permissions["default"].admin.roles.DELETE
}, {
  enable: true,
  pathName: '/roles/:id/permissions',
  method: 'GET',
  permission: _permissions["default"].admin.roles.GET_PERMISSIONS
}, {
  enable: true,
  pathName: '/roles/:id/add-permissions',
  method: 'PATCH',
  permission: _permissions["default"].admin.roles.ADD_PERMISSIONS
},
/**
 * PERMISSION
 */
{
  enable: true,
  method: 'GET',
  pathName: '/permissions',
  permission: _permissions["default"].admin.permissions.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/permissions',
  permission: _permissions["default"].admin.permissions.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/permissions/:id',
  permission: _permissions["default"].admin.permissions.GET_ID
}, {
  enable: true,
  pathName: '/permissions/:id',
  method: 'PATCH',
  permission: _permissions["default"].admin.permissions.EDIT
}, {
  enable: true,
  pathName: '/permissions/:id',
  method: 'DELETE',
  permission: _permissions["default"].admin.permissions.DELETE
}, {
  enable: true,
  pathName: '/permissions/:id/add-roles',
  method: 'PATCH',
  permission: _permissions["default"].admin.permissions.ADD_ROLES
},
/**
 * USER
 */
{
  enable: true,
  method: 'GET',
  pathName: '/users',
  permission: _permissions["default"].admin.users.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/users',
  permission: _permissions["default"].admin.users.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/users/:id',
  permission: _permissions["default"].admin.users.GET_ID
}, {
  enable: true,
  method: 'PUT',
  pathName: '/users/:id',
  permission: _permissions["default"].admin.users.EDIT
}, {
  enable: true,
  method: 'DELETE',
  pathName: '/users/:id',
  permission: _permissions["default"].admin.users.DELETE
}, {
  enable: true,
  pathName: '/users/:id/change-password',
  method: 'PATCH',
  permission: _permissions["default"].admin.users.CHANGE_PASSWORD
}, {
  enable: true,
  pathName: '/users/:id/add-roles',
  method: 'PATCH',
  permission: _permissions["default"].admin.users.ADD_ROLES
},
/**
 * USER SESSION
 */
{
  enable: true,
  pathName: '/userSessions/:userID',
  method: 'GET',
  permission: _permissions["default"].admin.userSessions.TIME_LINE
}, {
  enable: true,
  pathName: '/userSessions',
  method: 'DELETE',
  permission: _permissions["default"].admin.userSessions.DELETE
},
/**
 * USER ONLINE
 */
{
  enable: true,
  pathName: '/userOnline',
  method: 'GET',
  permission: _permissions["default"].admin.userOnlines.GET_ALL
},
/**
 * NOTIFY TEMPLATE
 */
{
  enable: true,
  method: 'GET',
  pathName: '/notifyTemplates',
  permission: _permissions["default"].admin.notifyTemplates.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/notifyTemplates',
  permission: _permissions["default"].admin.notifyTemplates.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/notifyTemplates/:id',
  permission: _permissions["default"].admin.notifyTemplates.GET_ID
}, {
  enable: true,
  pathName: '/notifyTemplates/:id',
  method: 'PATCH',
  permission: _permissions["default"].admin.notifyTemplates.EDIT
}, {
  enable: true,
  pathName: '/notifyTemplates/:id',
  method: 'DELETE',
  permission: _permissions["default"].admin.notifyTemplates.DELETE
}];
exports["default"] = _default;