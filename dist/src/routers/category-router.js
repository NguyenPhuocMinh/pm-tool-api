'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Category router
 */
var categoryRouter = [{
  pathName: '/categories',
  method: 'GET',
  methodName: 'getAllCategory',
  controller: _controllers.categoryController.getAllCategory
}, {
  pathName: '/categories',
  method: 'POST',
  methodName: 'createCategory',
  controller: _controllers.categoryController.createCategory
}, {
  pathName: '/categories/:id',
  method: 'GET',
  methodName: 'getCategory',
  controller: _controllers.categoryController.getCategory
}, {
  pathName: '/categories/:id',
  method: 'PATCH',
  methodName: 'updateCategory',
  controller: _controllers.categoryController.updateCategory
}, {
  pathName: '/categories/:id',
  method: 'DELETE',
  methodName: 'deleteCategory',
  controller: _controllers.categoryController.deleteCategory
}];
var _default = categoryRouter;
exports["default"] = _default;