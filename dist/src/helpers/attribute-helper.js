'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _moment = _interopRequireDefault(require("moment"));
require("moment-timezone");
var _constants = _interopRequireDefault(require("../constants"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var attributeHelper = function attributeHelper(req) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var action = arguments.length > 2 ? arguments[2] : undefined;
  var holderID = req.holderID;
  var owner = !(0, _lodash.isEmpty)(holderID) ? holderID : _constants["default"].DEFAULT_SYSTEM;
  var nowMoment = (0, _moment["default"])().add(7, 'hours').tz(_constants["default"].TIMEZONE_DEFAULT).utc().format();
  if (action === 'create') {
    data.createdAt = nowMoment;
    data.createdBy = owner;
    data.updatedAt = nowMoment;
    data.updatedBy = owner;
  }
  data.updatedAt = nowMoment;
  data.updatedBy = owner;
  return data;
};
var _default = attributeHelper;
exports["default"] = _default;