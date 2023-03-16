'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorProduct = void 0;
require("source-map-support/register");
var _joi = _interopRequireDefault(require("joi"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_VALIDATORS.CATEGORY_VALIDATOR);
var schemaProduct = _joi["default"].object({
  name: _joi["default"].string().required(),
  image: _joi["default"].string().required(),
  price: _joi["default"].number().required(),
  discount: _joi["default"].number().required(),
  category: _joi["default"].string().required()
});
var validatorProduct = function validatorProduct(data) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProduct has been start with data',
    args: data
  });
  var _schemaProduct$valida = schemaProduct.validate(data, {
      allowUnknown: true
    }),
    error = _schemaProduct$valida.error;
  if (error) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function validatorProduct has been end with error',
      args: error
    });
    return error;
  }
  logger.log({
    level: _constants["default"].LOG_LEVELS.DEBUG,
    message: 'Function validatorProduct has been end without error'
  });
  return null;
};
exports.validatorProduct = validatorProduct;