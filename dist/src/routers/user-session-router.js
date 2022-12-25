'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description User Session router
 */
var userSessionRouter = [{
  pathName: '/users-session/:userID',
  method: 'GET',
  methodName: 'getUserTimelineSession',
  controller: _controllers.userSessionController.getUserTimelineSession
}, {
  pathName: '/users-session',
  method: 'POST',
  methodName: 'createUserSession',
  controller: _controllers.userSessionController.createUserSession
}, {
  pathName: '/users-session/:id',
  method: 'PATCH',
  methodName: 'updateUserSession',
  controller: _controllers.userSessionController.updateUserSession
}, {
  pathName: '/users-session/:id',
  method: 'DELETE',
  methodName: 'deleteUserSession',
  controller: _controllers.userSessionController.deleteUserSession
}];
var _default = userSessionRouter;
exports["default"] = _default;