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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.USER_ONLINE_TRANSFER);
var userOnlineTransfer = function userOnlineTransfer(data, request) {
  loggerFactory.data('Func userOnlineTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      firstName = _data.firstName,
      lastName = _data.lastName;
    var userAgent = request.headers['user-agent'];
    var ipAddress = request.headers.host;
    response.id = _id;
    response.fullName = "".concat(lastName, " ").concat(firstName);
    response.userAgent = userAgent;
    response.ipAddress = ipAddress;
    loggerFactory.data('Func userOnlineTransfer has data');
    return response;
  }
  loggerFactory.data('Func userOnlineTransfer without data');
  return response;
};
var _default = userOnlineTransfer;
exports["default"] = _default;