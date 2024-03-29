'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorPermission = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.PERMISSION_VALIDATOR);
var schemaPermission = _joi["default"].object({
  name: _joi["default"].string().required()
});
var validatorPermission = function validatorPermission(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorPermission has been start with data',
    args: data
  });
  var _schemaPermission$val = schemaPermission.validate(data),
    error = _schemaPermission$val.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorPermission has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorPermission has been end without error'
  });
  return null;
};
exports.validatorPermission = validatorPermission;