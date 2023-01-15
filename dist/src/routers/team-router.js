'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Team router
 */
var teamRouter = [{
  pathName: '/teams',
  method: 'GET',
  methodName: 'getAllTeam',
  controller: _controllers.teamController.getAllTeam
}, {
  pathName: '/teams',
  method: 'POST',
  methodName: 'createTeam',
  controller: _controllers.teamController.createTeam
}, {
  pathName: '/teams/:id',
  method: 'GET',
  methodName: 'getTeam',
  controller: _controllers.teamController.getTeam
}, {
  pathName: '/teams/:id',
  method: 'PUT',
  methodName: 'updateTeam',
  controller: _controllers.teamController.updateTeam
}, {
  pathName: '/teams/:id',
  method: 'DELETE',
  methodName: 'deleteTeam',
  controller: _controllers.teamController.deleteTeam
}, {
  pathName: '/teams/:id/membersInTeam',
  method: 'GET',
  methodName: 'getAllMemberInTeam',
  controller: _controllers.teamController.getAllMemberInTeam
}, {
  pathName: '/teams/:id/membersNotOnTeam',
  method: 'GET',
  methodName: 'getAllMemberNotOnTeam',
  controller: _controllers.teamController.getAllMemberNotOnTeam
}, {
  pathName: '/teams/:id/addMembersToTeam',
  method: 'PATCH',
  methodName: 'addMembersToTeam',
  controller: _controllers.teamController.addMembersToTeam
}, {
  pathName: '/teams/:id/removeMembersFromTeam',
  method: 'PATCH',
  methodName: 'removeMembersFromTeam',
  controller: _controllers.teamController.removeMembersFromTeam
}];
var _default = teamRouter;
exports["default"] = _default;