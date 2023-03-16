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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.CUSTOMER_CONTROLLER);

/**
 * @description Register Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var registerCustomer = function registerCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function registerCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerRegister);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function registerCustomer Controller has been end'
  });
};

/**
 * @description Login Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var loginCustomer = function loginCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function loginCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerLogin);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function loginCustomer Controller has been end'
  });
};

/**
 * @description Get All Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllCustomer = function getAllCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllCustomer Controller has been end'
  });
};

/**
 * @description Create Customer Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createCustomer = function createCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createCustomer Controller has been end'
  });
};

/**
 * @description Get Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getCustomer = function getCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getCustomer Controller has been end'
  });
};

/**
 * @description Edit Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateCustomer = function updateCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateCustomer Controller has been end'
  });
};

/**
 * @description Delete Customer By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteCustomer = function deleteCustomer(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteCustomer Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCustomer, _constants["default"].actions.MsgActionCustomerDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteCustomer Controller has been end'
  });
};
var customerController = {
  registerCustomer: registerCustomer,
  loginCustomer: loginCustomer,
  getAllCustomer: getAllCustomer,
  createCustomer: createCustomer,
  getCustomer: getCustomer,
  updateCustomer: updateCustomer,
  deleteCustomer: deleteCustomer
};
var _default = customerController;
exports["default"] = _default;