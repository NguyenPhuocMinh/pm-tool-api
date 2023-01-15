'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authError = _interopRequireDefault(require("./error/auth-error"));
var _commonError = _interopRequireDefault(require("./error/common-error"));
var _organizationError = _interopRequireDefault(require("./error/organization-error"));
var _projectError = _interopRequireDefault(require("./error/project-error"));
var _teamError = _interopRequireDefault(require("./error/team-error"));
var _roleError = _interopRequireDefault(require("./error/role-error"));
var _permissionError = _interopRequireDefault(require("./error/permission-error"));
var _userError = _interopRequireDefault(require("./error/user-error"));
var _userSessionError = _interopRequireDefault(require("./error/user-session-error"));
var _notifyError = _interopRequireDefault(require("./error/notify-error"));
var _notifyUserError = _interopRequireDefault(require("./error/notify-user-error"));
var _notifyTemplateError = _interopRequireDefault(require("./error/notify-template-error"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var errorCodes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _authError["default"]), _commonError["default"]), _organizationError["default"]), _projectError["default"]), _teamError["default"]), _roleError["default"]), _permissionError["default"]), _userError["default"]), _userSessionError["default"]), _notifyError["default"]), _notifyUserError["default"]), _notifyTemplateError["default"]);
var _default = errorCodes;
exports["default"] = _default;