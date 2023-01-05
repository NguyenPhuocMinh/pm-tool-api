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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.AUTH_CONTROLLER);

/**
 * @description Sign In Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var signIn = function signIn(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function signIn Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeAuth, _constants["default"].actions.MsgActionSignIn);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function signIn Controller has been end'
  });
};

/**
 * @description Sign Out Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var signOut = function signOut(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function signOut Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeAuth, _constants["default"].actions.MsgActionSignOut);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function signOut Controller has been end'
  });
};

/**
 * @description Who Am I Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var whoami = function whoami(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function whoami Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeAuth, _constants["default"].actions.MsgActionWhoAmI);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function whoami Controller has been end'
  });
};

/**
 * @description Refresh Token Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var refreshToken = function refreshToken(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function refreshToken Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeAuth, _constants["default"].actions.MsgActionRefreshToken);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function refreshToken Controller has been end'
  });
};

/**
 * @description Revoke Token Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var revokeToken = function revokeToken(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function revokeToken Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeAuth, _constants["default"].actions.MsgActionRevokeToken);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function revokeToken Controller has been end'
  });
};
var authController = {
  signIn: signIn,
  signOut: signOut,
  whoami: whoami,
  refreshToken: refreshToken,
  revokeToken: revokeToken
};
var _default = authController;
exports["default"] = _default;