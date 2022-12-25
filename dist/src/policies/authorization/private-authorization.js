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
  method: 'PATCH',
  controller: _permissions["default"].admin.organizations.EDIT
}, {
  enable: true,
  pathName: '/organizations/:id',
  method: 'DELETE',
  controller: _permissions["default"].admin.organizations.DELETE
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
  controller: _permissions["default"].admin.roles.EDIT
}, {
  enable: true,
  pathName: '/roles/:id',
  method: 'DELETE',
  controller: _permissions["default"].admin.roles.DELETE
}, {
  enable: true,
  pathName: '/roles/:id/permissions',
  method: 'GET',
  controller: _permissions["default"].admin.roles.GET_PERMISSIONS
}, {
  enable: true,
  pathName: '/roles/:id/add-permissions',
  method: 'PATCH',
  controller: _permissions["default"].admin.roles.ADD_PERMISSIONS
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
  controller: _permissions["default"].admin.permissions.EDIT
}, {
  enable: true,
  pathName: '/permissions/:id',
  method: 'DELETE',
  controller: _permissions["default"].admin.permissions.DELETE
}, {
  enable: true,
  pathName: '/permissions/:id/add-roles',
  method: 'PATCH',
  controller: _permissions["default"].admin.permissions.ADD_ROLES
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
  controller: _permissions["default"].admin.users.CHANGE_PASSWORD
}, {
  enable: true,
  pathName: '/users/:id/add-roles',
  method: 'PATCH',
  controller: _permissions["default"].admin.users.ADD_ROLES
},
/**
 * USER SESSION
 */
{
  enable: true,
  pathName: '/users/sessions/:userID',
  method: 'GET',
  controller: _permissions["default"].admin.userSessions.TIME_LINE
}, {
  enable: true,
  pathName: '/users/sessions',
  method: 'DELETE',
  controller: _permissions["default"].admin.userSessions.DELETE
},
/**
 * USER ONLINE
 */
{
  enable: true,
  pathName: '/users/onlines',
  method: 'GET',
  controller: _permissions["default"].admin.userOnlines.GET_ALL
},
/**
 * NOTIFY TEMPLATE
 */
{
  enable: true,
  method: 'GET',
  pathName: '/notify-templates',
  permission: _permissions["default"].admin.notifyTemplates.GET_ALL
}, {
  enable: true,
  method: 'POST',
  pathName: '/notify-templates',
  permission: _permissions["default"].admin.notifyTemplates.CREATE
}, {
  enable: true,
  method: 'GET',
  pathName: '/notify-templates/:id',
  permission: _permissions["default"].admin.notifyTemplates.GET_ID
}, {
  enable: true,
  pathName: '/notify-templates/:id',
  method: 'PATCH',
  controller: _permissions["default"].admin.notifyTemplates.EDIT
}, {
  enable: true,
  pathName: '/notify-templates/:id',
  method: 'DELETE',
  controller: _permissions["default"].admin.notifyTemplates.DELETE
}];
exports["default"] = _default;