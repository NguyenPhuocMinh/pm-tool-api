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
  pathName: '/notifies/changePasswordTemporary',
  method: 'POST',
  methodName: 'notifyChangePasswordTemporary',
  controller: _controllers.notifyController.notifyChangePasswordTemporary
}];
var _default = notifyRouter;
exports["default"] = _default;