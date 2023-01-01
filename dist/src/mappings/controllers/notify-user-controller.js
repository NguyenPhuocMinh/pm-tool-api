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

/**
 * @description Read One Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var readNotifyUser = function readNotifyUser(req, res, next) {
  loggerFactory.info("Function readNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserRead);
  loggerFactory.info("Function readNotifyUser Controller has been end");
};

/**
 * @description Read All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var readAllNotifyUser = function readAllNotifyUser(req, res, next) {
  loggerFactory.info("Function readAllNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserReadAll);
  loggerFactory.info("Function readAllNotifyUser Controller has been end");
};

/**
 * @description Trash Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var trashNotifyUser = function trashNotifyUser(req, res, next) {
  loggerFactory.info("Function trashNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserTrash);
  loggerFactory.info("Function trashNotifyUser Controller has been end");
};

/**
 * @description Trash All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var trashAllNotifyUser = function trashAllNotifyUser(req, res, next) {
  loggerFactory.info("Function trashAllNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserTrashAll);
  loggerFactory.info("Function trashAllNotifyUser Controller has been end");
};

/**
 * @description Trash All Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllDataTrashNotifyUser = function getAllDataTrashNotifyUser(req, res, next) {
  loggerFactory.info("Function getAllDataTrashNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserGetAllDataTrash);
  loggerFactory.info("Function getAllDataTrashNotifyUser Controller has been end");
};

/**
 * @description Roll Back Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var rollBackDataTrashNotifyUser = function rollBackDataTrashNotifyUser(req, res, next) {
  loggerFactory.info("Function rollBackDataTrashNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserRollBackDataTrash);
  loggerFactory.info("Function rollBackDataTrashNotifyUser Controller has been end");
};

/**
 * @description Roll Back Data Notify Of User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var rollBackAllDataTrashNotifyUser = function rollBackAllDataTrashNotifyUser(req, res, next) {
  loggerFactory.info("Function rollBackAllDataTrashNotifyUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyUser, _constants["default"].actions.MsgActionNotifyUserRollBackAllDataTrash);
  loggerFactory.info("Function rollBackAllDataTrashNotifyUser Controller has been end");
};
var notifyUserController = {
  getAllNotifyUser: getAllNotifyUser,
  getDetailNotifyUser: getDetailNotifyUser,
  getAllDataNotifyUser: getAllDataNotifyUser,
  getAllUnReadNotifyUser: getAllUnReadNotifyUser,
  readNotifyUser: readNotifyUser,
  readAllNotifyUser: readAllNotifyUser,
  trashNotifyUser: trashNotifyUser,
  trashAllNotifyUser: trashAllNotifyUser,
  getAllDataTrashNotifyUser: getAllDataTrashNotifyUser,
  rollBackDataTrashNotifyUser: rollBackDataTrashNotifyUser,
  rollBackAllDataTrashNotifyUser: rollBackAllDataTrashNotifyUser
};
var _default = notifyUserController;
exports["default"] = _default;