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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.TEAM_CONTROLLER);

/**
 * @description Get All Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllTeam = function getAllTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeam Controller has been end'
  });
};

/**
 * @description Create Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createTeam = function createTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createTeam Controller has been end'
  });
};

/**
 * @description Get Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getTeam = function getTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getTeam Controller has been end'
  });
};

/**
 * @description Update Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateTeam = function updateTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateTeam Controller has been end'
  });
};

/**
 * @description Update Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteTeam = function deleteTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteTeam Controller has been end'
  });
};

/**
 * @description Get All Member In Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllMemberInTeam = function getAllMemberInTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllMemberInTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamGetAllMemberInTeam);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllMemberInTeam Controller has been end'
  });
};

/**
 * @description Get All Member Not On Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllMemberNotOnTeam = function getAllMemberNotOnTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllMemberNotOnTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamGetAllMemberNotOnTeam);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllMemberNotOnTeam Controller has been end'
  });
};

/**
 * @description Add Members To Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var addMembersToTeam = function addMembersToTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addMembersToTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamAddMembersToTeam);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addMembersToTeam Controller has been end'
  });
};

/**
 * @description Remove Members To Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var removeMembersFromTeam = function removeMembersFromTeam(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeMembersFromTeam Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeTeam, _constants["default"].actions.MsgActionTeamRemoveMembersFromTeam);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeMembersFromTeam Controller has been end'
  });
};
var teamController = {
  getAllTeam: getAllTeam,
  createTeam: createTeam,
  getTeam: getTeam,
  updateTeam: updateTeam,
  deleteTeam: deleteTeam,
  getAllMemberInTeam: getAllMemberInTeam,
  getAllMemberNotOnTeam: getAllMemberNotOnTeam,
  addMembersToTeam: addMembersToTeam,
  removeMembersFromTeam: removeMembersFromTeam
};
var _default = teamController;
exports["default"] = _default;