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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.USER_CONTROLLER);

/**
 * @description Get All User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllUser = function getAllUser(req, res, next) {
  loggerFactory.info("Function getAllUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserGetAll);
  loggerFactory.info("Function getAllUser Controller has been end");
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createUser = function createUser(req, res, next) {
  loggerFactory.info("Function createUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserCreate);
  loggerFactory.info("Function createUser Controller has been end");
};

/**
 * @description Create User Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getUser = function getUser(req, res, next) {
  loggerFactory.info("Function getUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserGet);
  loggerFactory.info("Function getUser Controller has been end");
};

/**
 * @description Update User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateUser = function updateUser(req, res, next) {
  loggerFactory.info("Function updateUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserUpdate);
  loggerFactory.info("Function updateUser Controller has been end");
};

/**
 * @description Delete User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteUser = function deleteUser(req, res, next) {
  loggerFactory.info("Function deleteUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserDelete);
  loggerFactory.info("Function deleteUser Controller has been end");
};

/**
 * @description Change Pass User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var changePassUser = function changePassUser(req, res, next) {
  loggerFactory.info("Function changePassUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserChangePass);
  loggerFactory.info("Function changePassUser Controller has been end");
};

/**
 * @description Set Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var setPassUser = function setPassUser(req, res, next) {
  loggerFactory.info("Function setPassUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserSetPass);
  loggerFactory.info("Function setPassUser Controller has been end");
};

/**
 * @description Reset Password User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var resetPassUser = function resetPassUser(req, res, next) {
  loggerFactory.info("Function resetPassUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserResetPass);
  loggerFactory.info("Function resetPassUser Controller has been end");
};

/**
 * @description Add Role To User By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var addRolesToUser = function addRolesToUser(req, res, next) {
  loggerFactory.info("Function addRolesToUser Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUser, _constants["default"].actions.MsgActionUserAddRoles);
  loggerFactory.info("Function addRolesToUser Controller has been end");
};
var userController = {
  getAllUser: getAllUser,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  changePassUser: changePassUser,
  setPassUser: setPassUser,
  resetPassUser: resetPassUser,
  addRolesToUser: addRolesToUser
};
var _default = userController;
exports["default"] = _default;