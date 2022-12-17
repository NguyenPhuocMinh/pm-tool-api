'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _slugify = _interopRequireDefault(require("slugify"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var slugHelper = function slugHelper() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  return (0, _slugify["default"])(input, {
    locale: locale,
    lower: true
  });
};
var _default = slugHelper;
exports["default"] = _default;