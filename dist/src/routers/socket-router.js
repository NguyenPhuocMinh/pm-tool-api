'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Socket router
 */
var socketRouter = [{
  pathName: '/socket.io',
  method: 'GET',
  methodName: 'getSocket',
  controller: _controllers.socketController.getSocket
}, {
  pathName: '/socket.io',
  method: 'POST',
  methodName: 'postSocket',
  controller: _controllers.socketController.postSocket
}];
var _default = socketRouter;
exports["default"] = _default;