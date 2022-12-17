'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessionUnStore = exports.sessionStore = void 0;
require("source-map-support/register");
var _constants = _interopRequireDefault(require("../constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ATTRIBUTE_TOKEN_KEY = _constants["default"].ATTRIBUTE_TOKEN_KEY;
var sessionStore = function sessionStore(request, token) {
  request.session[ATTRIBUTE_TOKEN_KEY] = token;
};
exports.sessionStore = sessionStore;
var sessionUnStore = function sessionUnStore(request) {
  delete request.session[ATTRIBUTE_TOKEN_KEY];
};
exports.sessionUnStore = sessionUnStore;