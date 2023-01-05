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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.NOTIFY_CONTROLLER);

/**
 * @description Get Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getNotifyById = function getNotifyById(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getNotifyById Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getNotifyById Controller has been end'
  });
};

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllNotifyOfUser = function getAllNotifyOfUser(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllNotifyOfUser Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyOfUserGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllNotifyOfUser Controller has been end'
  });
};

/**
 * @description Notify Change Password Temporary Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var notifyChangePasswordTemporary = function notifyChangePasswordTemporary(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function notifyChangePasswordTemporary Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyChangePasswordTemporary);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function notifyChangePasswordTemporary Controller has been end'
  });
};
var notifyController = {
  getAllNotifyOfUser: getAllNotifyOfUser,
  getNotifyById: getNotifyById,
  notifyChangePasswordTemporary: notifyChangePasswordTemporary
};
var _default = notifyController;
exports["default"] = _default;