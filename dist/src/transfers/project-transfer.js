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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.PROJECT_TRANSFER);
var projectTransfer = function projectTransfer(data) {
  loggerFactory.data('Func projectTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      name = _data.name,
      startDay = _data.startDay,
      endDay = _data.endDay,
      activated = _data.activated,
      createdAt = _data.createdAt;
    response.id = _id;
    response.name = name;
    response.startDay = startDay;
    response.endDay = endDay;
    response.activated = activated;
    response.createdAt = createdAt;
    loggerFactory.data('Func projectTransfer has data');
    return response;
  }
  loggerFactory.data('Func projectTransfer without data');
  return response;
};
var _default = projectTransfer;
exports["default"] = _default;