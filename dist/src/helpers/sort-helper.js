'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var sortHelper = function sortHelper() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _sort = query._sort,
    _order = query._order;
  var sort = (0, _lodash.isEmpty)(_sort) ? 'createdAt' : _sort;
  var order = (0, _lodash.isEmpty)(_order) ? -1 : _order === 'asc' ? 1 : -1;
  return _defineProperty({}, sort, order);
};
var _default = sortHelper;
exports["default"] = _default;