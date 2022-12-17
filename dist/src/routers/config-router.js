'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Health router
 */
var healthRouter = [{
  pathName: '/configs',
  method: 'GET',
  methodName: 'getDataConfigJson',
  controller: _controllers.configController.getDataConfigJson
}];
var _default = healthRouter;
exports["default"] = _default;