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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.PROJECT_CONTROLLER);

/**
 * @description Get All Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllProject = function getAllProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProject Controller has been end'
  });
};

/**
 * @description Create Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createProject = function createProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createProject Controller has been end'
  });
};

/**
 * @description Get Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getProject = function getProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getProject Controller has been end'
  });
};

/**
 * @description Update Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateProject = function updateProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateProject Controller has been end'
  });
};

/**
 * @description Delete Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteProject = function deleteProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteProject Controller has been end'
  });
};

/**
 * @description Get All Team In Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllTeamInProject = function getAllTeamInProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeamInProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectGetAllTeamInProject);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeamInProject Controller has been end'
  });
};

/**
 * @description Get All Team Not On Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllTeamNotOnProject = function getAllTeamNotOnProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeamNotOnProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectGetAllTeamNotOnProject);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllTeamNotOnProject Controller has been end'
  });
};

/**
 * @description Add Teams To Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var addTeamsToProject = function addTeamsToProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addTeamsToProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectAddTeamsToProject);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addTeamsToProject Controller has been end'
  });
};

/**
 * @description Remove Teams From Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var removeTeamsFromProject = function removeTeamsFromProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeTeamsFromProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectRemoveTeamsFromProject);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeTeamsFromProject Controller has been end'
  });
};
var projectController = {
  getAllProject: getAllProject,
  createProject: createProject,
  getProject: getProject,
  updateProject: updateProject,
  deleteProject: deleteProject,
  getAllTeamInProject: getAllTeamInProject,
  getAllTeamNotOnProject: getAllTeamNotOnProject,
  addTeamsToProject: addTeamsToProject,
  removeTeamsFromProject: removeTeamsFromProject
};
var _default = projectController;
exports["default"] = _default;