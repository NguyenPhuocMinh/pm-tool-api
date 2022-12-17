'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorNotifyTemplateCreate = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.AUTH_VALIDATOR);
var schemaNotifyTemplateCreate = _joi["default"].object({
  topic: _joi["default"].string().required(),
  description: _joi["default"].string().required(),
  content: _joi["default"].string().required(),
  type: _joi["default"].string().required()
});
var validatorNotifyTemplateCreate = function validatorNotifyTemplateCreate(data) {
  loggerFactory.debug('Function validatorNotifyTemplateCreate has been start with data', {
    args: data
  });
  var _schemaNotifyTemplate = schemaNotifyTemplateCreate.validate(data, {
      allowUnknown: true
    }),
    error = _schemaNotifyTemplate.error;
  if (error) {
    loggerFactory.debug('Function validatorNotifyTemplateCreate has been end with error', {
      args: error
    });
    return error;
  }
  loggerFactory.debug('Function validatorNotifyTemplateCreate has been end without error');
  return null;
};
exports.validatorNotifyTemplateCreate = validatorNotifyTemplateCreate;