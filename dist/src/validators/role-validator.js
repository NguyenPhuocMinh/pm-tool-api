'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorRole = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.ROLE_VALIDATOR);
var schemaRole = _joi["default"].object({
  name: _joi["default"].string().required()
});
var validatorRole = function validatorRole(data) {
  loggerFactory.debug('Function validatorRole has been start with data', {
    args: data
  });
  var _schemaRole$validate = schemaRole.validate(data),
    error = _schemaRole$validate.error;
  if (error) {
    loggerFactory.debug('Function validatorRole has been end with error', {
      args: error
    });
    return error;
  }
  loggerFactory.debug('Function validatorRole has been end without error');
  return null;
};
exports.validatorRole = validatorRole;