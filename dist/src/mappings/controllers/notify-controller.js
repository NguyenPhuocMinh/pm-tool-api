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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.NOTIFY_CONTROLLER);

/**
 * @description Get Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getNotifyById = function getNotifyById(req, res, next) {
  loggerFactory.info("Function getNotifyById Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyGet);
  loggerFactory.info("Function getNotifyById Controller has been end");
};

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllNotifyOfUser = function getAllNotifyOfUser(req, res, next) {
  loggerFactory.info("Function getAllNotifyOfUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyOfUserGetAll);
  loggerFactory.info("Function getAllNotifyOfUser Controller has been end");
};

/**
 * @description Notify Change Password Temporary Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var notifyChangePasswordTemporary = function notifyChangePasswordTemporary(req, res, next) {
  loggerFactory.info("Function notifyChangePasswordTemporary Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyChangePasswordTemporary);
  loggerFactory.info("Function notifyChangePasswordTemporary Controller has been end");
};

/**
 * @description Notify Update Read Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var notifyUpdateRead = function notifyUpdateRead(req, res, next) {
  loggerFactory.info("Function notifyUpdateRead Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotify, _constants["default"].actions.MsgActionNotifyUpdateRead);
  loggerFactory.info("Function notifyUpdateRead Controller has been end");
};
var notifyController = {
  getAllNotifyOfUser: getAllNotifyOfUser,
  getNotifyById: getNotifyById,
  notifyChangePasswordTemporary: notifyChangePasswordTemporary,
  notifyUpdateRead: notifyUpdateRead
};
var _default = notifyController;
exports["default"] = _default;