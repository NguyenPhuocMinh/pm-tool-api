'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _organizationModel = _interopRequireDefault(require("./organization-model"));
var _projectModel = _interopRequireDefault(require("./project-model"));
var _roleModel = _interopRequireDefault(require("./role-model"));
var _permissionModel = _interopRequireDefault(require("./permission-model"));
var _userModel = _interopRequireDefault(require("./user-model"));
var _userSessionModel = _interopRequireDefault(require("./user-session-model"));
var _notifyModel = _interopRequireDefault(require("./notify-model"));
var _notifyConfigModel = _interopRequireDefault(require("./notify-config-model"));
var _notifyTemplateModel = _interopRequireDefault(require("./notify-template-model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var models = [_organizationModel["default"], _projectModel["default"], _roleModel["default"], _permissionModel["default"], _userModel["default"], _userSessionModel["default"], _notifyModel["default"], _notifyConfigModel["default"], _notifyTemplateModel["default"]];
var _default = models;
exports["default"] = _default;