'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authPermission = _interopRequireDefault(require("./auth-permission"));
var _categoryPermission = _interopRequireDefault(require("./category-permission"));
var _productPermission = _interopRequireDefault(require("./product-permission"));
var _organizationPermission = _interopRequireDefault(require("./organization-permission"));
var _projectPermission = _interopRequireDefault(require("./project-permission"));
var _teamPermission = _interopRequireDefault(require("./team-permission"));
var _rolePermission = _interopRequireDefault(require("./role-permission"));
var _perPermission = _interopRequireDefault(require("./per-permission"));
var _userPermission = _interopRequireDefault(require("./user-permission"));
var _userSessionPermission = _interopRequireDefault(require("./user-session-permission"));
var _userOnlinePermission = _interopRequireDefault(require("./user-online-permission"));
var _notifyTemplatePermission = _interopRequireDefault(require("./notify-template-permission"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var permissions = {
  admin: {
    auth: _authPermission["default"],
    categories: _categoryPermission["default"],
    products: _productPermission["default"],
    organizations: _organizationPermission["default"],
    projects: _projectPermission["default"],
    teams: _teamPermission["default"],
    roles: _rolePermission["default"],
    permissions: _perPermission["default"],
    users: _userPermission["default"],
    userSessions: _userSessionPermission["default"],
    userOnlines: _userOnlinePermission["default"],
    notifyTemplates: _notifyTemplatePermission["default"]
  }
};
var _default = permissions;
exports["default"] = _default;