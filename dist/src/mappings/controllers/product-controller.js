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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.PRODUCT_CONTROLLER);

/**
 * @description Get All Product Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllProduct = function getAllProduct(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProduct Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProduct, _constants["default"].actions.MsgActionProductGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProduct Controller has been end'
  });
};

/**
 * @description Create Product Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createProduct = function createProduct(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createProduct Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProduct, _constants["default"].actions.MsgActionProductCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createProduct Controller has been end'
  });
};

/**
 * @description Get Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getProduct = function getProduct(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getProduct Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProduct, _constants["default"].actions.MsgActionProductGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getProduct Controller has been end'
  });
};

/**
 * @description Edit Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateProduct = function updateProduct(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateProduct Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProduct, _constants["default"].actions.MsgActionProductUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateProduct Controller has been end'
  });
};

/**
 * @description Delete Product By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteProduct = function deleteProduct(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteProduct Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProduct, _constants["default"].actions.MsgActionProductDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteProduct Controller has been end'
  });
};
var roleController = {
  getAllProduct: getAllProduct,
  createProduct: createProduct,
  getProduct: getProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};
var _default = roleController;
exports["default"] = _default;