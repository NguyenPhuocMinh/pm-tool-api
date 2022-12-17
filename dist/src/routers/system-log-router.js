'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description System log router
 */
var systemLogRouter = [{
  enable: true,
  pathName: '/system-logs',
  method: 'GET',
  methodName: 'getAllSystemLog',
  controller: _controllers.systemLogController.getAllSystemLog
}];
var _default = systemLogRouter;
exports["default"] = _default;