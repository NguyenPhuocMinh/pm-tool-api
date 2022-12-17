'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description User router
 */
var userRouter = [{
  pathName: '/users',
  method: 'GET',
  methodName: 'getAllUser',
  controller: _controllers.userController.getAllUser
}, {
  pathName: '/users',
  method: 'POST',
  methodName: 'createUser',
  controller: _controllers.userController.createUser
}, {
  pathName: '/users/:id',
  method: 'GET',
  methodName: 'getUser',
  controller: _controllers.userController.getUser
}, {
  pathName: '/users/:id',
  method: 'PUT',
  methodName: 'updateUser',
  controller: _controllers.userController.updateUser
}, {
  pathName: '/users/:id',
  method: 'DELETE',
  methodName: 'deleteUser',
  controller: _controllers.userController.deleteUser
}, {
  pathName: '/users/:id/change-password',
  method: 'PATCH',
  methodName: 'changePassUser',
  controller: _controllers.userController.changePassUser
}, {
  pathName: '/users/:id/set-password',
  method: 'PATCH',
  methodName: 'setPassUser',
  controller: _controllers.userController.setPassUser
}, {
  pathName: '/users/:id/reset-password',
  method: 'PATCH',
  methodName: 'resetPassUser',
  controller: _controllers.userController.resetPassUser
}, {
  pathName: '/users/:id/add-roles',
  method: 'PATCH',
  methodName: 'addRolesToUser',
  controller: _controllers.userController.addRolesToUser
}];
var _default = userRouter;
exports["default"] = _default;