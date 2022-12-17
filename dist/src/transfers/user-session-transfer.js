'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.USER_SESSION_TRANSFER);
var userSessionTransfer = function userSessionTransfer(data) {
  loggerFactory.data('Func userSessionTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      user = _data.user,
      userAgent = _data.userAgent,
      ipAddress = _data.ipAddress,
      startAccess = _data.startAccess,
      lastAccess = _data.lastAccess;
    response.id = _id;
    response.user = user;
    response.userAgent = userAgent;
    response.ipAddress = ipAddress;
    response.startAccess = startAccess;
    response.lastAccess = lastAccess;
    loggerFactory.data('Func userSessionTransfer has data');
    return response;
  }
  loggerFactory.data('Func userSessionTransfer without data');
  return response;
};
var _default = userSessionTransfer;
exports["default"] = _default;