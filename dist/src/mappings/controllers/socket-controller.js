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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.TEST_CONTROLLER);

/**
 * @description Get Socket Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getSocket = function getSocket(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getSocket Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeSocket, _constants["default"].actions.MsgActionGetSocket);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getSocket Controller has been end'
  });
};

/**
 * @description Post Socket Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var postSocket = function postSocket(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function postSocket Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeSocket, _constants["default"].actions.MsgActionPostSocket);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function postSocket Controller has been end'
  });
};
var socketController = {
  getSocket: getSocket,
  postSocket: postSocket
};
var _default = socketController;
exports["default"] = _default;