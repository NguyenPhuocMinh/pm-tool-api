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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.NOTIFY_TEMPLATE_CONTROLLER);

/**
 * @description Create Notify Template Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllNotifyTemplate = function getAllNotifyTemplate(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllNotifyTemplate Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyTemplate, _constants["default"].actions.MsgActionNotifyTemplateGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllNotifyTemplate Controller has been end'
  });
};

/**
 * @description Notify Update Read Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createNotifyTemplate = function createNotifyTemplate(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createNotifyTemplate Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeNotifyTemplate, _constants["default"].actions.MsgActionNotifyTemplateCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createNotifyTemplate Controller has been end'
  });
};
var notifyTemplateController = {
  getAllNotifyTemplate: getAllNotifyTemplate,
  createNotifyTemplate: createNotifyTemplate
};
var _default = notifyTemplateController;
exports["default"] = _default;