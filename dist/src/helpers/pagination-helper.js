'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _constants = _interopRequireDefault(require("../constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var paginationHelper = function paginationHelper() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _start = query._start || _constants["default"].DEFAULT_SKIP;
  var _end = query._end || _constants["default"].DEFAULT_LIMIT;
  var skip = parseInt(_start);
  var limit = parseInt(_end);
  limit = limit - skip;
  return {
    skip: skip,
    limit: limit
  };
};
var _default = paginationHelper;
exports["default"] = _default;