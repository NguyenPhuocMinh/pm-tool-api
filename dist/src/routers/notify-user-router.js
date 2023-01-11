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
  pathName: '/notifyUsers',
  method: 'GET',
  methodName: 'getAllNotifyUser',
  controller: _controllers.notifyUserController.getAllNotifyUser
}, {
  pathName: '/notifyUsers/:id',
  method: 'GET',
  methodName: 'getDetailNotifyUser',
  controller: _controllers.notifyUserController.getDetailNotifyUser
}, {
  pathName: '/notifyUsersData',
  method: 'GET',
  methodName: 'getAllDataNotifyUser',
  controller: _controllers.notifyUserController.getAllDataNotifyUser
}, {
  pathName: '/notifyUsersUnread',
  method: 'GET',
  methodName: 'getAllUnReadNotifyUser',
  controller: _controllers.notifyUserController.getAllUnReadNotifyUser
}, {
  pathName: '/notifyUsersRead',
  method: 'PATCH',
  methodName: 'readNotifyUser',
  controller: _controllers.notifyUserController.readNotifyUser
}, {
  pathName: '/notifyUsersReads',
  method: 'PATCH',
  methodName: 'readAllNotifyUser',
  controller: _controllers.notifyUserController.readAllNotifyUser
}, {
  pathName: '/notifyUsersTrash',
  method: 'PATCH',
  methodName: 'trashNotifyUser',
  controller: _controllers.notifyUserController.trashNotifyUser
}, {
  pathName: '/notifyUsersTrashes',
  method: 'DELETE',
  methodName: 'trashAllNotifyUser',
  controller: _controllers.notifyUserController.trashAllNotifyUser
}, {
  pathName: '/notifyUsersTrashes',
  method: 'GET',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.getAllDataTrashNotifyUser
}, {
  pathName: '/notifyUsersRollback',
  method: 'PATCH',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.rollBackDataTrashNotifyUser
}, {
  pathName: '/notify/usersRollbacks',
  method: 'PATCH',
  methodName: 'getAllDataTrashNotifyUser',
  controller: _controllers.notifyUserController.rollBackAllDataTrashNotifyUser
}];
var _default = notifyUserRouter;
exports["default"] = _default;