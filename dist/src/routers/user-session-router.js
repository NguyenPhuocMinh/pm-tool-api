'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Session router
 */
var sessionRouter = [{
  pathName: '/users/sessions/:userID',
  method: 'GET',
  methodName: 'getUserTimelineSession',
  controller: _controllers.userSessionController.getUserTimelineSession
}, {
  pathName: '/users/sessions',
  method: 'POST',
  methodName: 'createUserSession',
  controller: _controllers.userSessionController.createUserSession
}, {
  pathName: '/users/sessions/:id',
  method: 'PATCH',
  methodName: 'updateUserSession',
  controller: _controllers.userSessionController.updateUserSession
}, {
  pathName: '/users/sessions/:id',
  method: 'DELETE',
  methodName: 'deleteUserSession',
  controller: _controllers.userSessionController.deleteUserSession
}];
var _default = sessionRouter;
exports["default"] = _default;