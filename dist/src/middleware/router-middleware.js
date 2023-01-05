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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_MIDDLEWARE.ROUTER_MIDDLEWARE);
var routerMiddleware = function routerMiddleware(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.WARN,
    message: 'Function routerMiddleware has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  var routerNotFoundError = _commons["default"].newError('e002');
  logger.log({
    level: _constants["default"].LOG_LEVELS.WARN,
    message: 'Function routerMiddleware has been end'
  });
  return _builds["default"].errorResponse(toolBox, routerNotFoundError);
};
var _default = routerMiddleware;
exports["default"] = _default;