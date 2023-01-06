'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newSuccessTemplate = exports.newErrorTemplate = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
var _resources = require("../resources");
var _constants = _interopRequireDefault(require("../constants"));
var _utils = _interopRequireDefault(require("../utils"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_BUILDS.TEMPLATE_BUILD);
var newSuccessTemplate = function newSuccessTemplate(toolBox) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var req = toolBox.req;
  var msg = args.msg,
    result = args.result;
  try {
    var path = req.path,
      method = req.method;
    var template = {};
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function newSuccessTemplate has been start',
      args: {
        msg: msg
      }
    });
    if (Object.prototype.hasOwnProperty.call(_resources.successCodes, msg)) {
      template.result = !(0, _lodash.isEmpty)(result) ? result : null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = _resources.successCodes[msg].message;
      template.description = _resources.successCodes[msg].description;
      template.returnCode = _resources.successCodes[msg].returnCode;
      template.statusCode = _resources.successCodes[msg].statusCode;
    } else {
      template.result = null;
      template.method = method;
      template.endpoint = path;
      template.name = msg;
      template.message = "Message name [".concat(msg, "] not supported");
      template.description = _resources.successCodes[msg].description;
      template.returnCode = 1000;
      template.statusCode = 400;
    }
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function newSuccessTemplate has been end'
    });
    return template;
  } catch (err) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function newSuccessTemplate has been error',
      args: _utils["default"].parseError(err)
    });
    throw err;
  }
};
exports.newSuccessTemplate = newSuccessTemplate;
var newErrorTemplate = function newErrorTemplate(toolBox) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var req = toolBox.req;
  try {
    var path = req.path,
      method = req.method;
    var template = {};
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function newErrorTemplate has been start'
    });
    template.result = null;
    template.method = method;
    template.endpoint = path;
    template.name = args.name;
    template.message = args.message || 'Internal Error Server';
    template.description = args.description;
    template.returnCode = args.returnCode || 0;
    template.statusCode = args.statusCode || 500;
    logger.log({
      level: _constants["default"].LOG_LEVELS.INFO,
      message: 'Function newErrorTemplate has been end'
    });
    return template;
  } catch (err) {
    logger.log({
      level: _constants["default"].LOG_LEVELS.ERROR,
      message: 'Function newErrorTemplate has been error',
      args: _utils["default"].parseError(err)
    });
    throw err;
  }
};
exports.newErrorTemplate = newErrorTemplate;