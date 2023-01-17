'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorProjectCreateOrUpdate = exports.validatorAddTeamsToProject = void 0;
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
var validatorProjectCreateOrUpdate = function validatorProjectCreateOrUpdate(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProjectCreateOrUpdate has been start with data',
    args: data
  });
  var _schemaProject$valida = schemaProject.validate(data, {
      allowUnknown: true
    }),
    error = _schemaProject$valida.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorProjectCreateOrUpdate has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProjectCreateOrUpdate has been end without error'
  });
  return null;
};
exports.validatorProjectCreateOrUpdate = validatorProjectCreateOrUpdate;
var schemaAddTeamsToProject = _joi["default"].object({
  teams: _joi["default"].array().required()
});
var validatorAddTeamsToProject = function validatorAddTeamsToProject(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorAddTeamsToProject has been start with data',
    args: data
  });
  var _schemaAddTeamsToProj = schemaAddTeamsToProject.validate(data, {
      allowUnknown: true
    }),
    error = _schemaAddTeamsToProj.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorAddTeamsToProject has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorAddMember has been end without error'
  });
  return null;
};
exports.validatorAddTeamsToProject = validatorAddTeamsToProject;