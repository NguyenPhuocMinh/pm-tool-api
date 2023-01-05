'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successResponse = exports.errorResponse = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
var _constants = _interopRequireDefault(require("../constants"));
var _ = _interopRequireDefault(require("./"));
var _utils = _interopRequireDefault(require("../utils"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_BUILDS.RESPONSE_BUILD);
var successResponse = function successResponse(toolBox, args) {
  try {
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function successResponse has been start'
    });
    var res = toolBox.res;
    var header = (0, _lodash.get)(args, 'headers');
    var templateSuccessResponse = _["default"].newSuccessTemplate(toolBox, args);
    var headers = (0, _lodash.assign)({}, header !== null && header !== void 0 ? header : {}, {
      'X-Return-Code': templateSuccessResponse.returnCode
    });
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function successResponse has been end'
    });
    return res.status(templateSuccessResponse.statusCode).set(headers).send(templateSuccessResponse);
  } catch (err) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function successResponse has been error',
      args: _utils["default"].parseError(err)
    });
    throw err;
  }
};
exports.successResponse = successResponse;
var errorResponse = function errorResponse(toolBox, args) {
  try {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been start',
      args: args
    });
    var res = toolBox.res;
    var templateErrorResponse = _["default"].newErrorTemplate(toolBox, args);
    var headers = {
      'X-Return-Code': templateErrorResponse.returnCode
    };
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been end'
    });
    return res.status(templateErrorResponse.statusCode).set(headers).send(templateErrorResponse);
  } catch (err) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function errorResponse has been error',
      args: _utils["default"].parseError(err)
    });
    throw err;
  }
};
exports.errorResponse = errorResponse;