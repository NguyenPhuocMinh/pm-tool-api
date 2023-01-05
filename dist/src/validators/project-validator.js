'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorProject = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.PROJECT_VALIDATOR);
var schemaProject = _joi["default"].object({
  name: _joi["default"].string().required()
});
var validatorProject = function validatorProject(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProject has been start with data',
    args: data
  });
  var _schemaProject$valida = schemaProject.validate(data),
    error = _schemaProject$valida.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorProject has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProject has been end without error'
  });
  return null;
};
exports.validatorProject = validatorProject;