"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "privateAuthorization", {
  enumerable: true,
  get: function get() {
    return _privateAuthorization["default"];
  }
});
Object.defineProperty(exports, "publicAuthorization", {
  enumerable: true,
  get: function get() {
    return _publicAuthorization["default"];
  }
});
require("source-map-support/register");
var _publicAuthorization = _interopRequireDefault(require("./public-authorization"));
var _privateAuthorization = _interopRequireDefault(require("./private-authorization"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }