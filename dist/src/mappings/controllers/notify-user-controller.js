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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.NOTIFY_USER_CONTROLLER);

/**
 * @description Get All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllNotifyUser = function getAllNotifyUser(req, res, next) {
  loggerFactory.info("Function getAllNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserGetAll);
  loggerFactory.info("Function getAllNotifyUser Controller has been end");
};

/**
 * @description Get Detail Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getDetailNotifyUser = function getDetailNotifyUser(req, res, next) {
  loggerFactory.info("Function getDetailNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserGetId);
  loggerFactory.info("Function getDetailNotifyUser Controller has been end");
};

/**
 * @description Get All Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllDataNotifyUser = function getAllDataNotifyUser(req, res, next) {
  loggerFactory.info("Function getAllDataNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserGetAllData);
  loggerFactory.info("Function getAllDataNotifyUser Controller has been end");
};

/**
 * @description Get All Unread Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllUnReadNotifyUser = function getAllUnReadNotifyUser(req, res, next) {
  loggerFactory.info("Function getAllUnReadNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserGetAllUnRead);
  loggerFactory.info("Function getAllUnReadNotifyUser Controller has been end");
};
var notifyUserController = {
  getAllNotifyUser: getAllNotifyUser,
  getDetailNotifyUser: getDetailNotifyUser,
  getAllDataNotifyUser: getAllDataNotifyUser,
  getAllUnReadNotifyUser: getAllUnReadNotifyUser
};
var _default = notifyUserController;
exports["default"] = _default;