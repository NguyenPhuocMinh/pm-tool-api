'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Project router
 */
var projectRouter = [{
  pathName: '/projects',
  method: 'GET',
  methodName: 'getAllProject',
  controller: _controllers.projectController.getAllProject
}, {
  pathName: '/projects',
  method: 'POST',
  methodName: 'createProject',
  controller: _controllers.projectController.createProject
}];
var _default = projectRouter;
exports["default"] = _default;