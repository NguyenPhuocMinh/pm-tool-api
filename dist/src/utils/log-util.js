'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertLogMsg = exports.convertLogArgs = void 0;
require("source-map-support/register");
var _chalk = _interopRequireDefault(require("chalk"));
var _conf = require("../conf");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var symbolInfo = _conf.options.loggerOptions.symbols.info;
var symbolWarn = _conf.options.loggerOptions.symbols.warn;
var symbolDebug = _conf.options.loggerOptions.symbols.debug;
var symbolError = _conf.options.loggerOptions.symbols.error;
var symbolHttp = _conf.options.loggerOptions.symbols.http;
var symbolVerbose = _conf.options.loggerOptions.symbols.verbose;
var symbolSilly = _conf.options.loggerOptions.symbols.silly;
var symbolData = _conf.options.loggerOptions.symbols.data;
var colorInfo = _conf.options.loggerOptions.colors.info;
var colorWarn = _conf.options.loggerOptions.colors.warn;
var colorDebug = _conf.options.loggerOptions.colors.debug;
var colorError = _conf.options.loggerOptions.colors.error;
var colorHttp = _conf.options.loggerOptions.colors.http;
var colorVerbose = _conf.options.loggerOptions.colors.verbose;
var colorSilly = _conf.options.loggerOptions.colors.silly;
var colorData = _conf.options.loggerOptions.colors.data;
var colorDefault = _conf.options.loggerOptions.colors["default"];
var convertLogMsg = function convertLogMsg(level, label, message, timestamp) {
  switch (level) {
    case symbolInfo:
      return {
        levelLog: _chalk["default"].hex(colorInfo).bold('INFO'),
        labelLog: _chalk["default"].hex(colorInfo).bold(label),
        messageLog: _chalk["default"].hex(colorInfo).bold(message),
        timestampLog: _chalk["default"].hex(colorInfo).bold(timestamp)
      };
    case symbolWarn:
      return {
        levelLog: _chalk["default"].hex(colorWarn).bold('WARN'),
        labelLog: _chalk["default"].hex(colorWarn).bold(label),
        messageLog: _chalk["default"].hex(colorWarn).bold(message),
        timestampLog: _chalk["default"].hex(colorWarn).bold(timestamp)
      };
    case symbolDebug:
      return {
        levelLog: _chalk["default"].hex(colorDebug).bold('DEBUG'),
        labelLog: _chalk["default"].hex(colorDebug).bold(label),
        messageLog: _chalk["default"].hex(colorDebug).bold(message),
        timestampLog: _chalk["default"].hex(colorDebug).bold(timestamp)
      };
    case symbolError:
      return {
        levelLog: _chalk["default"].hex(colorError).bold('ERROR'),
        labelLog: _chalk["default"].hex(colorError).bold(label),
        messageLog: _chalk["default"].hex(colorError).bold(message),
        timestampLog: _chalk["default"].hex(colorError).bold(timestamp)
      };
    case symbolHttp:
      return {
        levelLog: _chalk["default"].hex(colorHttp).bold('HTTP'),
        labelLog: _chalk["default"].hex(colorHttp).bold(label),
        messageLog: _chalk["default"].hex(colorHttp).bold(message),
        timestampLog: _chalk["default"].hex(colorHttp).bold(timestamp)
      };
    case symbolVerbose:
      return {
        levelLog: _chalk["default"].hex(colorVerbose).bold('VERBOSE'),
        labelLog: _chalk["default"].hex(colorVerbose).bold(label),
        messageLog: _chalk["default"].hex(colorVerbose).bold(message),
        timestampLog: _chalk["default"].hex(colorVerbose).bold(timestamp)
      };
    case symbolSilly:
      return {
        levelLog: _chalk["default"].hex(colorSilly).bold('SILLY'),
        labelLog: _chalk["default"].hex(colorSilly).bold(label),
        messageLog: _chalk["default"].hex(colorSilly).bold(message),
        timestampLog: _chalk["default"].hex(colorSilly).bold(timestamp)
      };
    case symbolData:
      return {
        levelLog: _chalk["default"].hex(colorData).bold('DATA'),
        labelLog: _chalk["default"].hex(colorData).bold(label),
        messageLog: _chalk["default"].hex(colorData).bold(message),
        timestampLog: _chalk["default"].hex(colorData).bold(timestamp)
      };
    default:
      return {
        levelLog: _chalk["default"].hex(colorDefault).bold('NO LEVEL'),
        labelLog: _chalk["default"].hex(colorDefault).bold(label),
        messageLog: _chalk["default"].hex(colorDefault).bold(message),
        timestampLog: _chalk["default"].hex(colorDefault).bold(timestamp)
      };
  }
};
exports.convertLogMsg = convertLogMsg;
var convertLogArgs = function convertLogArgs(level, args) {
  var argsLog = '';
  if (typeof args === 'undefined') {
    return {
      argsLog: argsLog
    };
  }
  argsLog = JSON.stringify(args);
  switch (level) {
    case symbolInfo:
      return {
        argsLog: _chalk["default"].hex(colorInfo).bold(argsLog)
      };
    case symbolWarn:
      return {
        argsLog: _chalk["default"].hex(colorWarn).bold(argsLog)
      };
    case symbolDebug:
      return {
        argsLog: _chalk["default"].hex(colorDebug).bold(argsLog)
      };
    case symbolError:
      return {
        argsLog: _chalk["default"].hex(colorError).bold(argsLog)
      };
    case symbolHttp:
      return {
        argsLog: _chalk["default"].hex(colorHttp).bold(argsLog)
      };
    case symbolVerbose:
      return {
        argsLog: _chalk["default"].hex(colorVerbose).bold(argsLog)
      };
    case symbolSilly:
      return {
        argsLog: _chalk["default"].hex(colorSilly).bold(argsLog)
      };
    case symbolData:
      return {
        argsLog: _chalk["default"].hex(colorData).bold(argsLog)
      };
    default:
      return {
        argsLog: _chalk["default"].hex(colorDefault).bold(argsLog)
      };
  }
};
exports.convertLogArgs = convertLogArgs;