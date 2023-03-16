'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorCustomerRegister = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.CATEGORY_VALIDATOR);
var schemaCustomerRegister = _joi["default"].object({
  firstName: _joi["default"].string().required(),
  lastName: _joi["default"].string().required(),
  phoneNumber: _joi["default"].string().required()
});
var validatorCustomerRegister = function validatorCustomerRegister(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorCustomerRegister has been start with data',
    args: data
  });
  var _schemaCustomerRegist = schemaCustomerRegister.validate(data, {
      allowUnknown: true
    }),
    error = _schemaCustomerRegist.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorCustomerRegister has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorCustomerRegister has been end without error'
  });
  return null;
};
exports.validatorCustomerRegister = validatorCustomerRegister;