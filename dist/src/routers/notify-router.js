'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Notify router
 */
var notifyRouter = [{
  pathName: '/notifies/user',
  method: 'GET',
  methodName: 'getAllNotifyOfUser',
  controller: _controllers.notifyController.getAllNotifyOfUser
}, {
  pathName: '/notifies/:id',
  method: 'GET',
  methodName: 'getNotifyById',
  controller: _controllers.notifyController.getNotifyById
}, {
  pathName: '/notifies/change-password-temporary',
  method: 'POST',
  methodName: 'notifyChangePasswordTemporary',
  controller: _controllers.notifyController.notifyChangePasswordTemporary
}];
var _default = notifyRouter;
exports["default"] = _default;