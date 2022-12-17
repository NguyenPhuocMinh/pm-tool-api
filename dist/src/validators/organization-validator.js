'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorOrganization = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.ORGANIZATION_VALIDATOR);
var schemaOrganization = _joi["default"].object({
  name: _joi["default"].string().required()
});
var validatorOrganization = function validatorOrganization(data) {
  loggerFactory.debug('Function validatorOrganization has been start with data', {
    args: data
  });
  var _schemaOrganization$v = schemaOrganization.validate(data),
    error = _schemaOrganization$v.error;
  if (error) {
    loggerFactory.debug('Function validatorOrganization has been end with error', {
      args: error
    });
    return error;
  }
  loggerFactory.debug('Function validatorOrganization has been end without error');
  return null;
};
exports.validatorOrganization = validatorOrganization;