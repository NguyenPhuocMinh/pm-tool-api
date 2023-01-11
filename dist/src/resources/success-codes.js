'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _testSuccess = _interopRequireDefault(require("./success/test-success"));
var _socketSuccess = _interopRequireDefault(require("./success/socket-success"));
var _authSuccess = _interopRequireDefault(require("./success/auth-success"));
var _commonSuccess = _interopRequireDefault(require("./success/common-success"));
var _organizationSuccess = _interopRequireDefault(require("./success/organization-success"));
var _projectSuccess = _interopRequireDefault(require("./success/project-success"));
var _roleSuccess = _interopRequireDefault(require("./success/role-success"));
var _permissionSuccess = _interopRequireDefault(require("./success/permission-success"));
var _userSuccess = _interopRequireDefault(require("./success/user-success"));
var _userSessionSuccess = _interopRequireDefault(require("./success/user-session-success"));
var _userOnlineSuccess = _interopRequireDefault(require("./success/user-online-success"));
var _notifySuccess = _interopRequireDefault(require("./success/notify-success"));
var _notifyUserSuccess = _interopRequireDefault(require("./success/notify-user-success"));
var _notifyTemplateSuccess = _interopRequireDefault(require("./success/notify-template-success"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var successCodes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _testSuccess["default"]), _socketSuccess["default"]), _authSuccess["default"]), _commonSuccess["default"]), _organizationSuccess["default"]), _projectSuccess["default"]), _roleSuccess["default"]), _permissionSuccess["default"]), _userSuccess["default"]), _userSessionSuccess["default"]), _userOnlineSuccess["default"]), _notifySuccess["default"]), _notifyUserSuccess["default"]), _notifyTemplateSuccess["default"]);
var _default = successCodes;
exports["default"] = _default;