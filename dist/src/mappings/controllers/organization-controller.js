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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.ORGANIZATION_CONTROLLER);

/**
 * @description Get All Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllOrganization = function getAllOrganization(req, res, next) {
  loggerFactory.info("Function getAllOrganization Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGetAll);
  loggerFactory.info("Function getAllOrganization Controller has been end");
};

/**
 * @description Create Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createOrganization = function createOrganization(req, res, next) {
  loggerFactory.info("Function createOrganization Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationCreate);
  loggerFactory.info("Function createOrganization Controller has been end");
};

/**
 * @description Get Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getOrganization = function getOrganization(req, res, next) {
  loggerFactory.info("Function getOrganization Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGet);
  loggerFactory.info("Function getOrganization Controller has been end");
};

/**
 * @description Edit Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateOrganization = function updateOrganization(req, res, next) {
  loggerFactory.info("Function updateOrganization Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationUpdate);
  loggerFactory.info("Function updateOrganization Controller has been end");
};

/**
 * @description Delete Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteOrganization = function deleteOrganization(req, res, next) {
  loggerFactory.info("Function deleteOrganization Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationDelete);
  loggerFactory.info("Function deleteOrganization Controller has been end");
};
var organizationController = {
  getAllOrganization: getAllOrganization,
  createOrganization: createOrganization,
  getOrganization: getOrganization,
  updateOrganization: updateOrganization,
  deleteOrganization: deleteOrganization
};
var _default = organizationController;
exports["default"] = _default;