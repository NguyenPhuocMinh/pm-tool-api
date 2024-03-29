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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.USER_SESSION_CONTROLLER);

/**
 * @description Get All User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getUserTimelineSession = function getUserTimelineSession(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getUserTimelineSession Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUserSession, _constants["default"].actions.MsgActionUserSessionTimeline);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getUserTimelineSession Controller has been end'
  });
};

/**
 * @description Create User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createUserSession = function createUserSession(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createUserSession Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUserSession, _constants["default"].actions.MsgActionUserSessionCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createUserSession Controller has been end'
  });
};

/**
 * @description Update User Session Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateUserSession = function updateUserSession(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateUserSession Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUserSession, _constants["default"].actions.MsgActionUserSessionUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateUserSession Controller has been end'
  });
};

/**
 * @description Delete User Session By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteUserSession = function deleteUserSession(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteUserSession Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeUserSession, _constants["default"].actions.MsgActionUserSessionDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteUserSession Controller has been end'
  });
};
var userSessionController = {
  getUserTimelineSession: getUserTimelineSession,
  createUserSession: createUserSession,
  updateUserSession: updateUserSession,
  deleteUserSession: deleteUserSession
};
var _default = userSessionController;
exports["default"] = _default;