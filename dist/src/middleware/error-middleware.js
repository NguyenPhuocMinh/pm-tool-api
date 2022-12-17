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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_MIDDLEWARE.ERROR_MIDDLEWARE);
var errorMiddleware = function errorMiddleware(_err, req, res, next) {
  loggerFactory.error('Function errorMiddleware has been start');
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  var internalServerError = _commons["default"].newError('E001');
  if (_err.stack) {
    loggerFactory.error('Function errorMiddleware has been end without error internal server');
    console.error('error stack', _err.stack);
    return _builds["default"].errorResponse(toolBox, internalServerError);
  }
  loggerFactory.error('Function errorMiddleware has been end without error', {
    args: _err.name
  });
  return _builds["default"].errorResponse(toolBox, _err);
};
var _default = errorMiddleware;
exports["default"] = _default;