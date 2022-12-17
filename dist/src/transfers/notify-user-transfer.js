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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.NOTIFY_USER_TRANSFER);
var notifyUserTransfer = function notifyUserTransfer(data) {
  loggerFactory.data('Func notifyUserTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      user = _data.user,
      sender = _data.sender,
      template = _data.template,
      details = _data.details,
      createdAt = _data.createdAt;
    response.id = _id;
    response.sender = convertDataUser(sender);
    response.receiver = convertDataUser(user);
    response.template = convertTemplate(template);
    response.details = details;
    response.createdAt = createdAt;
    loggerFactory.data('Func notifyUserTransfer has data');
    return response;
  }
  loggerFactory.data('Func notifyUserTransfer without data');
  return response;
};
var convertDataUser = function convertDataUser(data) {
  var firstName = data.firstName,
    lastName = data.lastName;
  return {
    firstName: firstName,
    lastName: lastName
  };
};
var convertTemplate = function convertTemplate(template) {
  var topic = template.topic,
    description = template.description,
    content = template.content,
    type = template.type;
  return {
    topic: topic,
    description: description,
    content: content,
    type: type
  };
};
var _default = notifyUserTransfer;
exports["default"] = _default;