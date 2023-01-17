'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseError = exports.parseDateTime = void 0;
require("source-map-support/register");
var _moment = _interopRequireDefault(require("moment"));
require("moment-timezone");
var _constants = _interopRequireDefault(require("../constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var parseError = function parseError(error) {
  return {
    errName: (error === null || error === void 0 ? void 0 : error.name) || 'Error',
    errMessage: (error === null || error === void 0 ? void 0 : error.message) || 'Internal Server Error'
  };
};
exports.parseError = parseError;
var parseDateTime = function parseDateTime(dateTime) {
  return (0, _moment["default"])(dateTime).add(7, 'hours').tz(_constants["default"].TIMEZONE_DEFAULT).utc().format();
};
exports.parseDateTime = parseDateTime;