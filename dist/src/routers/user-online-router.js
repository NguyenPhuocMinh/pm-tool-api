'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description User Online Router
 */
var userOnlineRouter = [{
  pathName: '/users-online',
  method: 'GET',
  methodName: 'getAllUserOnline',
  controller: _controllers.userOnlineController.getAllUserOnline
}];
var _default = userOnlineRouter;
exports["default"] = _default;