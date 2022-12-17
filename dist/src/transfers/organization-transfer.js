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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.ORGANIZATION_TRANSFER);
var organizationTransfer = function organizationTransfer(data) {
  loggerFactory.data('Func organizationTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      name = _data.name,
      activated = _data.activated,
      createdAt = _data.createdAt,
      updatedAt = _data.updatedAt;
    response.id = _id;
    response.name = name;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;
    loggerFactory.data('Func organizationTransfer has data');
    return response;
  }
  loggerFactory.data('Func organizationTransfer without data');
  return response;
};
var _default = organizationTransfer;
exports["default"] = _default;