'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Notify Template router
 */
var notifyTemplateRouter = [{
  pathName: '/notify-templates',
  method: 'GET',
  methodName: 'getAllNotifyTemplate',
  controller: _controllers.notifyTemplateController.getAllNotifyTemplate
}, {
  pathName: '/notify-templates',
  method: 'POST',
  methodName: 'createNotifyTemplate',
  controller: _controllers.notifyTemplateController.createNotifyTemplate
}];
var _default = notifyTemplateRouter;
exports["default"] = _default;