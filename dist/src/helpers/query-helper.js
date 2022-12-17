'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
var _slugHelper = _interopRequireDefault(require("./slug-helper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var queryHelper = function queryHelper() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var search = query.search;
  var _query = {
    $and: [{
      deleted: false
    }]
  };
  if (!(0, _lodash.isEmpty)(search)) {
    var _search = (0, _slugHelper["default"])(search);
    var querySearch = {
      $or: []
    };
    var searchDefault = ['slug'];
    var searchAttributes = [].concat(searchDefault, _toConsumableArray(attributes));
    searchAttributes.forEach(function (property) {
      var searchRegex = {};
      searchRegex[property] = {
        $regexp: _search
      };
      // eslint-disable-next-line dot-notation
      querySearch['$or'].push(searchRegex);
    });

    // eslint-disable-next-line dot-notation
    _query['$and'].push(querySearch);
  }
  if (!(0, _lodash.isEmpty)(fields)) {
    fields.forEach(function (field) {
      // eslint-disable-next-line dot-notation
      _query['$and'].push(field);
    });
  }
  return _query;
};
var _default = queryHelper;
exports["default"] = _default;