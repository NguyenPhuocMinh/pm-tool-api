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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.CATEGORY_CONTROLLER);

/**
 * @description Get All Category Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllCategory = function getAllCategory(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllCategory Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCategory, _constants["default"].actions.MsgActionCategoryGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllCategory Controller has been end'
  });
};

/**
 * @description Create Category Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createCategory = function createCategory(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createCategory Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCategory, _constants["default"].actions.MsgActionCategoryCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createCategory Controller has been end'
  });
};

/**
 * @description Get Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getCategory = function getCategory(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getCategory Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCategory, _constants["default"].actions.MsgActionCategoryGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getCategory Controller has been end'
  });
};

/**
 * @description Edit Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateCategory = function updateCategory(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateCategory Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCategory, _constants["default"].actions.MsgActionCategoryUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateCategory Controller has been end'
  });
};

/**
 * @description Delete Category By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteCategory = function deleteCategory(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteCategory Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeCategory, _constants["default"].actions.MsgActionCategoryDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteCategory Controller has been end'
  });
};
var categoryController = {
  getAllCategory: getAllCategory,
  createCategory: createCategory,
  getCategory: getCategory,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory
};
var _default = categoryController;
exports["default"] = _default;