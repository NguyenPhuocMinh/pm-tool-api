'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieUnStore = exports.cookieStore = void 0;
require("source-map-support/register");
var _constants = _interopRequireDefault(require("../constants"));
var _conf = require("../conf");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ATTRIBUTE_TOKEN_KEY = _constants["default"].ATTRIBUTE_TOKEN_KEY;
var cookieStore = function cookieStore(response, token) {
  response.cookie(ATTRIBUTE_TOKEN_KEY, token, _conf.options.cookieOptions);
};
exports.cookieStore = cookieStore;
var cookieUnStore = function cookieUnStore(response) {
  response.clearCookie(ATTRIBUTE_TOKEN_KEY);
};
exports.cookieUnStore = cookieUnStore;