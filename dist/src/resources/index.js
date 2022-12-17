'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "errorCodes", {
  enumerable: true,
  get: function get() {
    return _errorCodes["default"];
  }
});
Object.defineProperty(exports, "successCodes", {
  enumerable: true,
  get: function get() {
    return _successCodes["default"];
  }
});
require("source-map-support/register");
var _errorCodes = _interopRequireDefault(require("./error-codes"));
var _successCodes = _interopRequireDefault(require("./success-codes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }