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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.PERMISSION_CONTROLLER);

/**
 * @description Get All Permission Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllPermission = function getAllPermission(req, res, next) {
  loggerFactory.info("Function getAllPermission Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionGetAll);
  loggerFactory.info("Function getAllPermission Controller has been end");
};

/**
 * @description Create Permission Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createPermission = function createPermission(req, res, next) {
  loggerFactory.info("Function createPermission Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionCreate);
  loggerFactory.info("Function createPermission Controller has been end");
};

/**
 * @description Get Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getPermission = function getPermission(req, res, next) {
  loggerFactory.info("Function getPermission Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionGet);
  loggerFactory.info("Function getPermission Controller has been end");
};

/**
 * @description Edit Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updatePermission = function updatePermission(req, res, next) {
  loggerFactory.info("Function updatePermission Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionUpdate);
  loggerFactory.info("Function updatePermission Controller has been end");
};

/**
 * @description Delete Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deletePermission = function deletePermission(req, res, next) {
  loggerFactory.info("Function deletePermissionByID Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionDelete);
  loggerFactory.info("Function deletePermissionByID Controller has been end");
};

/**
 * @description Add Roles To Permission By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var addRolesToPermission = function addRolesToPermission(req, res, next) {
  loggerFactory.info("Function addRolesToPermissionByID Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypePermission, _constants["default"].actions.MsgActionPermissionAddRoles);
  loggerFactory.info("Function addRolesToPermissionByID Controller has been end");
};
var permissionController = {
  getAllPermission: getAllPermission,
  createPermission: createPermission,
  getPermission: getPermission,
  updatePermission: updatePermission,
  deletePermission: deletePermission,
  addRolesToPermission: addRolesToPermission
};
var _default = permissionController;
exports["default"] = _default;