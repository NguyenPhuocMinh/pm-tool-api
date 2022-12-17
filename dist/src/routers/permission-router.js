'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Permission router
 */
var permissionRouter = [{
  pathName: '/permissions',
  method: 'GET',
  methodName: 'getAllPermission',
  controller: _controllers.permissionController.getAllPermission
}, {
  pathName: '/permissions',
  method: 'POST',
  methodName: 'createPermission',
  controller: _controllers.permissionController.createPermission
}, {
  pathName: '/permissions/:id',
  method: 'GET',
  methodName: 'getPermission',
  controller: _controllers.permissionController.getPermission
}, {
  pathName: '/permissions/:id',
  method: 'PATCH',
  methodName: 'updatePermission',
  controller: _controllers.permissionController.updatePermission
}, {
  pathName: '/permissions/:id',
  method: 'DELETE',
  methodName: 'deletePermission',
  controller: _controllers.permissionController.deletePermission
}, {
  pathName: '/permissions/:id/add-roles',
  method: 'PATCH',
  methodName: 'addRolesToPermission',
  controller: _controllers.permissionController.addRolesToPermission
}];
var _default = permissionRouter;
exports["default"] = _default;