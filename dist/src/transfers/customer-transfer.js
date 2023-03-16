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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.CUSTOMER_TRANSFER);
var customerTransfer = function customerTransfer(data) {
  loggerFactory.data('Func customerTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      firstName = _data.firstName,
      lastName = _data.lastName,
      email = _data.email,
      phoneNumber = _data.phoneNumber,
      photoUrl = _data.photoUrl,
      address = _data.address,
      activated = _data.activated,
      createdAt = _data.createdAt,
      updatedAt = _data.updatedAt;
    response.id = _id;
    response.firstName = firstName;
    response.lastName = lastName;
    response.email = email;
    response.phoneNumber = phoneNumber;
    response.photoUrl = photoUrl;
    response.address = address;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;
    loggerFactory.data('Func customerTransfer has data');
    return response;
  }
  loggerFactory.data('Func customerTransfer without data');
  return response;
};
var _default = customerTransfer;
exports["default"] = _default;