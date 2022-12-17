'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Organization router
 */
var organizationRouter = [{
  pathName: '/organizations',
  method: 'GET',
  methodName: 'getAllOrganization',
  controller: _controllers.organizationController.getAllOrganization
}, {
  pathName: '/organizations',
  method: 'POST',
  methodName: 'createOrganization',
  controller: _controllers.organizationController.createOrganization
}, {
  pathName: '/organizations/:id',
  method: 'GET',
  methodName: 'getOrganization',
  controller: _controllers.organizationController.getOrganization
}, {
  pathName: '/organizations/:id',
  method: 'PATCH',
  methodName: 'updateOrganization',
  controller: _controllers.organizationController.updateOrganization
}, {
  pathName: '/organizations/:id',
  method: 'DELETE',
  methodName: 'deleteOrganization',
  controller: _controllers.organizationController.deleteOrganization
}];
var _default = organizationRouter;
exports["default"] = _default;