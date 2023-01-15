'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorTeamCreateOrUpdate = exports.validatorAddMembersToTeam = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.TEAM_VALIDATOR);
var schemaCreateOrUpdateTeam = _joi["default"].object({
  name: _joi["default"].string().required()
});
var validatorTeamCreateOrUpdate = function validatorTeamCreateOrUpdate(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorTeamCreateOrUpdate has been start with data',
    args: data
  });
  var _schemaCreateOrUpdate = schemaCreateOrUpdateTeam.validate(data, {
      allowUnknown: true
    }),
    error = _schemaCreateOrUpdate.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorTeamCreateOrUpdate has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorTeamCreateOrUpdate has been end without error'
  });
  return null;
};
exports.validatorTeamCreateOrUpdate = validatorTeamCreateOrUpdate;
var schemaAddMembersToTeam = _joi["default"].object({
  members: _joi["default"].array().required()
});
var validatorAddMembersToTeam = function validatorAddMembersToTeam(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorAddMember has been start with data',
    args: data
  });
  var _schemaAddMembersToTe = schemaAddMembersToTeam.validate(data, {
      allowUnknown: true
    }),
    error = _schemaAddMembersToTe.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorAddMember has been end with error',
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
exports.validatorAddMembersToTeam = validatorAddMembersToTeam;