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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.SYSTEM_LOG_CONTROLLER);

/**
 * @description Get All System Log Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllSystemLog = function getAllSystemLog(req, res, next) {
  loggerFactory.info("Function getAllSystemLog Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeSystemLog, _constants["default"].actions.MsgActionSystemLogGetAll);
  loggerFactory.info("Function getAllSystemLog Controller has been end");
};
var systemLogController = {
  getAllSystemLog: getAllSystemLog
};
var _default = systemLogController;
exports["default"] = _default;