'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorUserSetPass = exports.validatorUserResetPass = exports.validatorUserChangePass = exports.validatorUser = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.USER_VALIDATOR);
var schemaUser = _joi["default"].object({
  firstName: _joi["default"].string().required(),
  lastName: _joi["default"].string().required(),
  email: _joi["default"].string().email()
});
var validatorUser = function validatorUser(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUser has been start with data',
    args: data
  });
  var _schemaUser$validate = schemaUser.validate(data),
    error = _schemaUser$validate.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorUser has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUser has been end without error'
  });
  return null;
};
exports.validatorUser = validatorUser;
var schemaSetPass = _joi["default"].object({
  password: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  passwordConfirm: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/).valid(_joi["default"].ref('password'))
});
var validatorUserSetPass = function validatorUserSetPass(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserSetPass has been start with data',
    args: data
  });
  var _schemaSetPass$valida = schemaSetPass.validate(data, {
      allowUnknown: true
    }),
    error = _schemaSetPass$valida.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorUserSetPass has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserSetPass has been end without error'
  });
  return null;
};
exports.validatorUserSetPass = validatorUserSetPass;
var schemaResetPass = _joi["default"].object({
  password: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  passwordConfirm: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/).valid(_joi["default"].ref('password'))
});
var validatorUserResetPass = function validatorUserResetPass(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserResetPass has been start with data',
    args: data
  });
  var _schemaResetPass$vali = schemaResetPass.validate(data),
    error = _schemaResetPass$vali.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorUserResetPass has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserResetPass has been end without error'
  });
  return null;
};
exports.validatorUserResetPass = validatorUserResetPass;
var schemaChangePass = _joi["default"].object({
  currentPassword: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
  newPassword: _joi["default"].string().required().min(6).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/).valid(_joi["default"].ref('currentPassword'))
});
var validatorUserChangePass = function validatorUserChangePass(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserChangePass has been start with data',
    args: data
  });
  var _schemaChangePass$val = schemaChangePass.validate(data),
    error = _schemaChangePass$val.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorUserChangePass has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorUserChangePass has been end without error'
  });
  return null;
};
exports.validatorUserChangePass = validatorUserChangePass;