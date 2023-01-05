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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.ROLE_CONTROLLER);

/**
 * @description Get All Role Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllRole = function getAllRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllRole Controller has been end'
  });
};

/**
 * @description Create Role Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createRole = function createRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createRole Controller has been end'
  });
};

/**
 * @description Get Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getRole = function getRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getRole Controller has been end'
  });
};

/**
 * @description Edit Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateRole = function updateRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateRole Controller has been end'
  });
};

/**
 * @description Delete Role By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteRole = function deleteRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteRole Controller has been end'
  });
};

/**
 * @description Get User In Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getUsersInRole = function getUsersInRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getUsersInRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleGetUsers);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getUsersInRole Controller has been end'
  });
};

/**
 * @description Get Permission In Role By Role ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getPermissionsInRole = function getPermissionsInRole(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getPermissionsInRole Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeRole, _constants["default"].actions.MsgActionRoleGetPermissions);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getPermissionsInRole Controller has been end'
  });
};
var roleController = {
  getAllRole: getAllRole,
  createRole: createRole,
  getRole: getRole,
  updateRole: updateRole,
  deleteRole: deleteRole,
  getUsersInRole: getUsersInRole,
  getPermissionsInRole: getPermissionsInRole
};
var _default = roleController;
exports["default"] = _default;