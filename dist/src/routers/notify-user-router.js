'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Notify user router
 */
var notifyUserRouter = [{
  pathName: '/notify/users',
  method: 'GET',
  methodName: 'getAllNotifyUser',
  controller: _controllers.notifyUserController.getAllNotifyUser
}, {
  pathName: '/notify/users/:id',
  method: 'GET',
  methodName: 'getDetailNotifyUser',
  controller: _controllers.notifyUserController.getDetailNotifyUser
}, {
  pathName: '/notify/users-data',
  method: 'GET',
  methodName: 'getAllDataNotifyUser',
  controller: _controllers.notifyUserController.getAllDataNotifyUser
}, {
  pathName: '/notify/users-unread',
  method: 'GET',
  methodName: 'getAllUnReadNotifyUser',
  controller: _controllers.notifyUserController.getAllUnReadNotifyUser
}, {
  pathName: '/notify/users-read',
  method: 'PATCH',
  methodName: 'readNotifyUser',
  controller: _controllers.notifyUserController.readNotifyUser
}, {
  pathName: '/notify/users-reads',
  method: 'PATCH',
  methodName: 'readAllNotifyUser',
  controller: _controllers.notifyUserController.readAllNotifyUser
}, {
  pathName: '/notify/users-trash',
  method: 'PATCH',
  methodName: 'trashNotifyUser',
  controller: _controllers.notifyUserController.trashNotifyUser
}, {
  pathName: '/notify/users-trashes',
  method: 'DELETE',
  methodName: 'trashAllNotifyUser',
  controller: _controllers.notifyUserController.trashAllNotifyUser
}, {
  pathName: '/notify/users-trashes',
  method: 'GET',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.getAllDataTrashNotifyUser
}, {
  pathName: '/notify/users-rollback',
  method: 'PATCH',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.rollBackDataTrashNotifyUser
}, {
  pathName: '/notify/users-rollbacks',
  method: 'PATCH',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.rollBackAllDataTrashNotifyUser
}];
var _default = notifyUserRouter;
exports["default"] = _default;