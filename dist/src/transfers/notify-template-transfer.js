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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.NOTIFY_TEMPLATE_TRANSFER);
var notifyTemplateTransfer = function notifyTemplateTransfer(data) {
  loggerFactory.data('Func notifyTemplateTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      topic = _data.topic,
      description = _data.description,
      content = _data.content,
      type = _data.type,
      activated = _data.activated,
      createdAt = _data.createdAt;
    response.id = _id;
    response.topic = topic;
    response.description = description;
    response.content = content;
    response.type = type;
    response.activated = activated;
    response.createdAt = createdAt;
    loggerFactory.data('Func notifyTemplateTransfer has data');
    return response;
  }
  loggerFactory.data('Func notifyTemplateTransfer without data');
  return response;
};
var _default = notifyTemplateTransfer;
exports["default"] = _default;