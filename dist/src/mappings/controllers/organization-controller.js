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

var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.ORGANIZATION_CONTROLLER);

/**
 * @description Get All Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllOrganization = function getAllOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGetAll);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllOrganization Controller has been end'
  });
};

/**
 * @description Create Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createOrganization = function createOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationCreate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function createOrganization Controller has been end'
  });
};

/**
 * @description Get Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getOrganization = function getOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGet);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getOrganization Controller has been end'
  });
};

/**
 * @description Edit Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var updateOrganization = function updateOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationUpdate);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function updateOrganization Controller has been end'
  });
};

/**
 * @description Delete Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var deleteOrganization = function deleteOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationDelete);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function deleteOrganization Controller has been end'
  });
};

/**
 * @description Get All Project In Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllProjectInOrganization = function getAllProjectInOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProjectInOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGetAllProjectInOrganization);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProjectInOrganization Controller has been end'
  });
};

/**
 * @description Get All Project Not On Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllProjectNotOnOrganization = function getAllProjectNotOnOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProjectNotOnOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationGetAllProjectNotOnOrganization);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function getAllProjectNotOnOrganization Controller has been end'
  });
};

/**
 * @description Add Projects To Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var addProjectsToOrganization = function addProjectsToOrganization(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addProjectsToOrganization Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationAddProjectsToOrganization);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function addProjectsToOrganization Controller has been end'
  });
};

/**
 * @description Remove Projects From Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var removeProjectsFromProject = function removeProjectsFromProject(req, res, next) {
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeProjectsFromProject Controller has been start'
  });
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeOrganization, _constants["default"].actions.MsgActionOrganizationRemoveProjectsToOrganization);
  logger.log({
    level: _constants["default"].LOG_LEVELS.INFO,
    message: 'Function removeProjectsFromProject Controller has been end'
  });
};
var organizationController = {
  getAllOrganization: getAllOrganization,
  createOrganization: createOrganization,
  getOrganization: getOrganization,
  updateOrganization: updateOrganization,
  deleteOrganization: deleteOrganization,
  getAllProjectInOrganization: getAllProjectInOrganization,
  getAllProjectNotOnOrganization: getAllProjectNotOnOrganization,
  addProjectsToOrganization: addProjectsToOrganization,
  removeProjectsFromProject: removeProjectsFromProject
};
var _default = organizationController;
exports["default"] = _default;