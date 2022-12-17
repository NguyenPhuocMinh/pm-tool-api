'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Role router
 */
var roleRouter = [{
  pathName: '/roles',
  method: 'GET',
  methodName: 'getAllRole',
  controller: _controllers.roleController.getAllRole
}, {
  pathName: '/roles',
  method: 'POST',
  methodName: 'createRole',
  controller: _controllers.roleController.createRole
}, {
  pathName: '/roles/:id',
  method: 'GET',
  methodName: 'getRole',
  controller: _controllers.roleController.getRole
}, {
  pathName: '/roles/:id',
  method: 'PATCH',
  methodName: 'updateRole',
  controller: _controllers.roleController.updateRole
}, {
  pathName: '/roles/:id',
  method: 'DELETE',
  methodName: 'deleteRole',
  controller: _controllers.roleController.deleteRole
}, {
  pathName: '/roles/:id/users',
  method: 'GET',
  methodName: 'getUsersInRole',
  controller: _controllers.roleController.getUsersInRole
}, {
  pathName: '/roles/:id/permissions',
  method: 'GET',
  methodName: 'getPermissionsInRole',
  controller: _controllers.roleController.getPermissionsInRole
}];
var _default = roleRouter;
exports["default"] = _default;