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
  pathName: '/healths',
  method: 'GET',
  methodName: 'healthCheck',
  controller: _controllers.healthController.healthCheck
}];
var _default = healthRouter;
exports["default"] = _default;