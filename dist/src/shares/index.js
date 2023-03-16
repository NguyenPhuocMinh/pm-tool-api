'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _validatorSchema = _interopRequireDefault(require("./validator-schema"));
var _validatorPhone = _interopRequireDefault(require("./validator-phone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  validatorSchema: _validatorSchema["default"],
  validatorPhone: _validatorPhone["default"]
};
exports["default"] = _default;