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
  method: 'PUT',
  methodName: 'updateOrganization',
  controller: _controllers.organizationController.updateOrganization
}, {
  pathName: '/organizations/:id',
  method: 'DELETE',
  methodName: 'deleteOrganization',
  controller: _controllers.organizationController.deleteOrganization
}, {
  pathName: '/organizations/:id/projects-in-organizations',
  method: 'GET',
  methodName: 'getAllProjectInOrganization',
  controller: _controllers.organizationController.getAllProjectInOrganization
}, {
  pathName: '/organizations/:id/projects-not-on-organizations',
  method: 'GET',
  methodName: 'getAllProjectNotOnOrganization',
  controller: _controllers.organizationController.getAllProjectNotOnOrganization
}, {
  pathName: '/organizations/:id/add-projects-to-organizations',
  method: 'PATCH',
  methodName: 'addProjectsToOrganization',
  controller: _controllers.organizationController.addProjectsToOrganization
}, {
  pathName: '/organizations/:id/remove-projects-from-organizations',
  method: 'PATCH',
  methodName: 'removeProjectsFromProject',
  controller: _controllers.organizationController.removeProjectsFromProject
}];
var _default = organizationRouter;
exports["default"] = _default;