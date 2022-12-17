'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _constants = _interopRequireDefault(require("../constants"));
var _commons = _interopRequireDefault(require("../commons"));
var _builds = _interopRequireDefault(require("../builds"));
var _logger = _interopRequireDefault(require("../core/logger"));
var _resources = require("../resources");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

// resource

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_MIDDLEWARE.ROUTER_MIDDLEWARE);
var routerMiddleware = function routerMiddleware(req, res, next) {
  loggerFactory.warn(_resources.R0004);
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  var routerNotFoundError = _commons["default"].newError('E002');
  loggerFactory.warn(_resources.R0005);
  return _builds["default"].errorResponse(toolBox, routerNotFoundError);
};
var _default = routerMiddleware;
exports["default"] = _default;