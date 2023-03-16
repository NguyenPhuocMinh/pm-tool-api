'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Product router
 */
var categoryRouter = [{
  pathName: '/products',
  method: 'GET',
  methodName: 'getAllProduct',
  controller: _controllers.productController.getAllProduct
}, {
  pathName: '/products',
  method: 'POST',
  methodName: 'createProduct',
  controller: _controllers.productController.createProduct
}, {
  pathName: '/products/:id',
  method: 'GET',
  methodName: 'getProduct',
  controller: _controllers.productController.getProduct
}, {
  pathName: '/products/:id',
  method: 'PATCH',
  methodName: 'updateProduct',
  controller: _controllers.productController.updateProduct
}, {
  pathName: '/products/:id',
  method: 'DELETE',
  methodName: 'deleteProduct',
  controller: _controllers.productController.deleteProduct
}];
var _default = categoryRouter;
exports["default"] = _default;