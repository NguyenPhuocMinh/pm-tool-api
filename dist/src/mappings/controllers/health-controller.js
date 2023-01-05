'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _baseController = _interopRequireDefault(require("./base-controller"));
var _constants = _interopRequireDefault(require("../../constants"));
var _logger = _interopRequireDefault(require("../../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.HEALTH_CONTROLLER);

/**
 * @description Health Check Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var healthCheck = function healthCheck(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function healthCheck Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeHealth, _constants["default"].actions.MsgActionHealthCheck);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function healthCheck Controller has been end'
  });
};
var healthController = {
  healthCheck: healthCheck
};
var _default = healthController;
exports["default"] = _default;