'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logWarn = exports.logVerbose = exports.logSilly = exports.logInfo = exports.logHttp = exports.logError = exports.logDebug = exports.logData = exports["default"] = void 0;
require("source-map-support/register");
var _winston = _interopRequireDefault(require("winston"));
var _conf = require("../../conf");
var _constants = _interopRequireDefault(require("../../constants"));
var _utils = _interopRequireDefault(require("../../utils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var logManager = function logManager() {
  var appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';
  var structName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  var logger = _winston["default"].createLogger({
    levels: _conf.options.loggerOptions.levels,
    format: _winston["default"].format.combine(_winston["default"].format(function (info) {
      return _objectSpread(_objectSpread({}, info), {}, {
        level: info.level.toUpperCase()
      });
    })(), _winston["default"].format.colorize(), _winston["default"].format.simple(), _winston["default"].format.timestamp({
      format: _constants["default"].DATE_TIMESTAMP_FORMAT
    }), _winston["default"].format.label({
      label: _utils["default"].formatLabelLog(appName, structName)
    }), _winston["default"].format.printf(function (info) {
      return _utils["default"].formatInfoLog(info);
    })),
    transports: [new _winston["default"].transports.Console({
      level: 'data'
    })]
  });
  return logger;
};
var _default = logManager;
exports["default"] = _default;
var logError = function logError(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.error(message, meta);
};
exports.logError = logError;
var logWarn = function logWarn(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.warn(message, meta);
};
exports.logWarn = logWarn;
var logInfo = function logInfo(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.info(message, meta);
};
exports.logInfo = logInfo;
var logDebug = function logDebug(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.debug(message, meta);
};
exports.logDebug = logDebug;
var logHttp = function logHttp(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.http(message, meta);
};
exports.logHttp = logHttp;
var logVerbose = function logVerbose(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.verbose(message, meta);
};
exports.logVerbose = logVerbose;
var logSilly = function logSilly(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.silly(message, meta);
};
exports.logSilly = logSilly;
var logData = function logData(appName, structName, message, meta) {
  var logger = logManager(appName, structName);
  return logger.data(message, meta);
};
exports.logData = logData;