'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newError = void 0;
require("source-map-support/register");
var _resources = require("../resources");
var _constants = _interopRequireDefault(require("../constants"));
var _utils = _interopRequireDefault(require("../utils"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_COMMON.ERROR_COMMON);

/**
 * @description Handler error common
 * @param {*} msg
 */
var newError = function newError() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  try {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function newError has been start'
    });
    var error = {};
    if (Object.prototype.hasOwnProperty.call(_resources.errorCodes, msg)) {
      error.name = msg;
      error.message = _resources.errorCodes[msg].message;
      error.description = _resources.errorCodes[msg].description;
      error.returnCode = _resources.errorCodes[msg].returnCode;
      error.statusCode = _resources.errorCodes[msg].statusCode;
    } else {
      error.name = msg;
      error.message = "Error name [".concat(msg, "] not supported");
      error.description = _resources.errorCodes[msg].description;
      error.returnCode = 9999;
      error.statusCode = 400;
    }
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function newError has been end'
    });
    return error;
  } catch (err) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function newError has error',
      args: _utils["default"].parseError(err)
    });
    throw err;
  }
};
exports.newError = newError;