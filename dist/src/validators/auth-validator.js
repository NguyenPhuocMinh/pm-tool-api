'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorLogin = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.AUTH_VALIDATOR);
var schemaLogin = _joi["default"].object({
  email: _joi["default"].string().required().email(),
  password: _joi["default"].string().required().min(6)
  // .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
});

var validatorLogin = function validatorLogin(data) {
  loggerFactory.debug('Function validatorLogin has been start with data', {
    args: data
  });
  var _schemaLogin$validate = schemaLogin.validate(data),
    error = _schemaLogin$validate.error;
  if (error) {
    loggerFactory.debug('Function validatorLogin has been end with error', {
      args: error
    });
    return error;
  }
  loggerFactory.debug('Function validatorLogin has been end without error');
  return null;
};
exports.validatorLogin = validatorLogin;