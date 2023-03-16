'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authTransfer = _interopRequireDefault(require("./auth-transfer"));
var _categoryTransfer = _interopRequireDefault(require("./category-transfer"));
var _productTransfer = _interopRequireDefault(require("./product-transfer"));
var _customerTransfer = _interopRequireDefault(require("./customer-transfer"));
var _organizationTransfer = _interopRequireDefault(require("./organization-transfer"));
var _projectTransfer = _interopRequireDefault(require("./project-transfer"));
var _teamTransfer = _interopRequireDefault(require("./team-transfer"));
var _roleTransfer = _interopRequireDefault(require("./role-transfer"));
var _permissionTransfer = _interopRequireDefault(require("./permission-transfer"));
var _userTransfer = _interopRequireDefault(require("./user-transfer"));
var _userSessionTransfer = _interopRequireDefault(require("./user-session-transfer"));
var _userOnlineTransfer = _interopRequireDefault(require("./user-online-transfer"));
var _notifyTransfer = _interopRequireDefault(require("./notify-transfer"));
var _notifyUserTransfer = _interopRequireDefault(require("./notify-user-transfer"));
var _notifyTemplateTransfer = _interopRequireDefault(require("./notify-template-transfer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  authTransfer: _authTransfer["default"],
  categoryTransfer: _categoryTransfer["default"],
  productTransfer: _productTransfer["default"],
  customerTransfer: _customerTransfer["default"],
  organizationTransfer: _organizationTransfer["default"],
  projectTransfer: _projectTransfer["default"],
  teamTransfer: _teamTransfer["default"],
  roleTransfer: _roleTransfer["default"],
  permissionTransfer: _permissionTransfer["default"],
  userTransfer: _userTransfer["default"],
  userSessionTransfer: _userSessionTransfer["default"],
  userOnlineTransfer: _userOnlineTransfer["default"],
  notifyTransfer: _notifyTransfer["default"],
  notifyUserTransfer: _notifyUserTransfer["default"],
  notifyTemplateTransfer: _notifyTemplateTransfer["default"]
};
exports["default"] = _default;