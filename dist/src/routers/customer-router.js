'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Customer router
 */
var customerRouter = [{
  pathName: '/customers/register',
  method: 'POST',
  methodName: 'registerCustomer',
  controller: _controllers.customerController.registerCustomer
}, {
  pathName: '/customers/login',
  method: 'POST',
  methodName: 'loginCustomer',
  controller: _controllers.customerController.loginCustomer
}, {
  pathName: '/customers',
  method: 'GET',
  methodName: 'getAllCustomer',
  controller: _controllers.customerController.getAllCustomer
}, {
  pathName: '/customers',
  method: 'POST',
  methodName: 'createCustomer',
  controller: _controllers.customerController.createCustomer
}, {
  pathName: '/customers/:id',
  method: 'GET',
  methodName: 'getCustomer',
  controller: _controllers.customerController.getCustomer
}, {
  pathName: '/customers/:id',
  method: 'PATCH',
  methodName: 'updateCustomer',
  controller: _controllers.customerController.updateCustomer
}, {
  pathName: '/customers/:id',
  method: 'DELETE',
  methodName: 'deleteCustomer',
  controller: _controllers.customerController.deleteCustomer
}];
var _default = customerRouter;
exports["default"] = _default;