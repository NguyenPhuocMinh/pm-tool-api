'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLabelLog = exports.formatInfoLog = exports.formatFullName = exports.formatErrorMsg = void 0;
require("source-map-support/register");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var formatLabelLog = function formatLabelLog(appName, structName) {
  return "".concat(appName, ":").concat(structName);
};
exports.formatLabelLog = formatLabelLog;
var formatInfoLog = function formatInfoLog(info) {
  var label = info.label,
    level = info.level,
    message = info.message,
    timestamp = info.timestamp,
    args = info.args;
  var _utils$convertLogMsg = _["default"].convertLogMsg(level, label, message, timestamp),
    levelLog = _utils$convertLogMsg.levelLog,
    labelLog = _utils$convertLogMsg.labelLog,
    messageLog = _utils$convertLogMsg.messageLog,
    timestampLog = _utils$convertLogMsg.timestampLog;
  var _utils$convertLogArgs = _["default"].convertLogArgs(level, args),
    argsLog = _utils$convertLogArgs.argsLog;
  return "".concat(labelLog, " [").concat(timestampLog, "] [").concat(levelLog, "]: ").concat(messageLog, " ").concat(argsLog);
};
exports.formatInfoLog = formatInfoLog;
var formatErrorMsg = function formatErrorMsg(error) {
  return {
    name: (error === null || error === void 0 ? void 0 : error.name) || 'Error',
    message: (error === null || error === void 0 ? void 0 : error.message) || 'Internal Server Error'
  };
};
exports.formatErrorMsg = formatErrorMsg;
var formatFullName = function formatFullName() {
  var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';
  var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  return "".concat(lastName, " ").concat(firstName);
};
exports.formatFullName = formatFullName;