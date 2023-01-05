'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Test router
 */
var testRouter = [{
  pathName: '/test-amqp',
  method: 'POST',
  methodName: 'testSendQueue',
  controller: _controllers.testController.testSendQueue
}];
var _default = testRouter;
exports["default"] = _default;