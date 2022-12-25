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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.USER_ONLINE_CONTROLLER);

/**
 * @description Get All User Online Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllUserOnline = function getAllUserOnline(req, res, next) {
  loggerFactory.info("Function getAllUserOnline Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUserOnline, _constants["default"].actions.MsgActionUserOnlineGetAll);
  loggerFactory.info("Function getAllUserOnline Controller has been end");
};
var userOnlineController = {
  getAllUserOnline: getAllUserOnline
};
var _default = userOnlineController;
exports["default"] = _default;