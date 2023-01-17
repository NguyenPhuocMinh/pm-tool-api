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
}, {
  pathName: '/projects/:id',
  method: 'GET',
  methodName: 'getProject',
  controller: _controllers.projectController.getProject
}, {
  pathName: '/projects/:id',
  method: 'PUT',
  methodName: 'updateProject',
  controller: _controllers.projectController.updateProject
}, {
  pathName: '/projects/:id',
  method: 'DELETE',
  methodName: 'deleteProject',
  controller: _controllers.projectController.deleteProject
}, {
  pathName: '/projects/:id/teams-in-projects',
  method: 'GET',
  methodName: 'getAllTeamInProject',
  controller: _controllers.projectController.getAllTeamInProject
}, {
  pathName: '/projects/:id/teams-not-on-projects',
  method: 'GET',
  methodName: 'getAllTeamNotOnProject',
  controller: _controllers.projectController.getAllTeamNotOnProject
}, {
  pathName: '/projects/:id/add-teams-to-projects',
  method: 'PATCH',
  methodName: 'addTeamsToProject',
  controller: _controllers.projectController.addTeamsToProject
}, {
  pathName: '/projects/:id/remove-teams-from-projects',
  method: 'PATCH',
  methodName: 'removeTeamsFromProject',
  controller: _controllers.projectController.removeTeamsFromProject
}];
var _default = projectRouter;
exports["default"] = _default;