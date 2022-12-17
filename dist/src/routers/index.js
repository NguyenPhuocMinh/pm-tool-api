'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _express = _interopRequireDefault(require("express"));
var _lodash = require("lodash");
var _constants = _interopRequireDefault(require("../constants"));
var _utils = _interopRequireDefault(require("../utils"));
var _logger = _interopRequireDefault(require("../core/logger"));
var _middleware = require("../middleware");
var _authRouter = _interopRequireDefault(require("./auth-router"));
var _configRouter = _interopRequireDefault(require("./config-router"));
var _homeRouter = _interopRequireDefault(require("./home-router"));
var _healthRouter = _interopRequireDefault(require("./health-router"));
var _organizationRouter = _interopRequireDefault(require("./organization-router"));
var _projectRouter = _interopRequireDefault(require("./project-router"));
var _roleRouter = _interopRequireDefault(require("./role-router"));
var _permissionRouter = _interopRequireDefault(require("./permission-router"));
var _userRouter = _interopRequireDefault(require("./user-router"));
var _userSessionRouter = _interopRequireDefault(require("./user-session-router"));
var _notifyRouter = _interopRequireDefault(require("./notify-router"));
var _notifyUserRouter = _interopRequireDefault(require("./notify-user-router"));
var _notifyTemplateRouter = _interopRequireDefault(require("./notify-template-router"));
var _systemLogRouter = _interopRequireDefault(require("./system-log-router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var router = _express["default"].Router();
var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_NAME_ROUTER);
var routes = [].concat(_toConsumableArray(_authRouter["default"]), _toConsumableArray(_configRouter["default"]), _toConsumableArray(_homeRouter["default"]), _toConsumableArray(_healthRouter["default"]), _toConsumableArray(_organizationRouter["default"]), _toConsumableArray(_projectRouter["default"]), _toConsumableArray(_roleRouter["default"]), _toConsumableArray(_permissionRouter["default"]), _toConsumableArray(_userRouter["default"]), _toConsumableArray(_userSessionRouter["default"]), _toConsumableArray(_notifyRouter["default"]), _toConsumableArray(_notifyUserRouter["default"]), _toConsumableArray(_notifyTemplateRouter["default"]), _toConsumableArray(_systemLogRouter["default"]));

/**
 * @description Init layer router
 * @returns {Array}
 */
var routers = routes.map(function (route) {
  try {
    loggerFactory.data("Layer route", {
      args: route
    });
    var pathName = (0, _lodash.get)(route, 'pathName');
    var method = (0, _lodash.get)(route, 'method');
    var controller = (0, _lodash.get)(route, 'controller');
    router[(0, _lodash.toLower)(method)](pathName, _middleware.authMiddleware, controller);
    return router;
  } catch (err) {
    loggerFactory.error("Layer route has error", {
      args: _utils["default"].formatErrorMsg(err)
    });
    throw err;
  }
});
var _default = routers;
exports["default"] = _default;