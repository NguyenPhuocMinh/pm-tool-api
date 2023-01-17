'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _moment = _interopRequireDefault(require("moment"));
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
      description = _data.description,
      startDay = _data.startDay,
      endDay = _data.endDay,
      organization = _data.organization,
      teams = _data.teams,
      activated = _data.activated,
      createdAt = _data.createdAt;
    response.id = _id;
    response.name = name;
    response.description = description;
    response.startDay = (0, _moment["default"])(startDay);
    response.endDay = (0, _moment["default"])(endDay);
    response.activated = activated;
    response.organizationId = convertData(organization).id;
    response.organizationName = convertData(organization).name;
    response.teams = !(0, _lodash.isEmpty)(teams) ? teams.map(function (team) {
      return convertData(team);
    }) : [];
    response.createdAt = createdAt;
    loggerFactory.data('Func projectTransfer has data');
    return response;
  }
  loggerFactory.data('Func projectTransfer without data');
  return response;
};
var convertData = function convertData(data) {
  var _data$_id, _data$name;
  return {
    id: (_data$_id = data === null || data === void 0 ? void 0 : data._id) !== null && _data$_id !== void 0 ? _data$_id : '-',
    name: (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '-'
  };
};
var _default = projectTransfer;
exports["default"] = _default;