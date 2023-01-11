'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _controllers = require("../mappings/controllers");
/**
 * @description Auth router
 */
var authRouter = [{
  pathName: '/auth/logins',
  method: 'POST',
  methodName: 'signIn',
  controller: _controllers.authController.signIn
}, {
  pathName: '/auth/logouts',
  method: 'POST',
  methodName: 'signOut',
  controller: _controllers.authController.signOut
}, {
  pathName: '/auth/whoami',
  method: 'POST',
  methodName: 'whoami',
  controller: _controllers.authController.whoami
}, {
  pathName: '/auth/refreshTokens',
  method: 'POST',
  methodName: 'refreshToken',
  controller: _controllers.authController.refreshToken
}, {
  pathName: '/auth/revokeTokens',
  method: 'POST',
  methodName: 'revokeToken',
  controller: _controllers.authController.revokeToken
}];
var _default = authRouter;
exports["default"] = _default;