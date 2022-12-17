'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Home router
 */
var homeRouter = [{
  pathName: '/',
  method: 'GET',
  methodName: 'homePage',
  controller: _controllers.homeController.homePage
}];
var _default = homeRouter;
exports["default"] = _default;