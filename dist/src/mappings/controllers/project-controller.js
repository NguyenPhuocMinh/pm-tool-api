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

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_CONTROLLERS.PROJECT_CONTROLLER);

/**
 * @description Get All Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var getAllProject = function getAllProject(req, res, next) {
  loggerFactory.info("Function getAllProject Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectGetAll);
  loggerFactory.info("Function getAllProject Controller has been end");
};

/**
 * @description Create Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
var createProject = function createProject(req, res, next) {
  loggerFactory.info("Function createProject Controller has been start");
  var toolBox = {
    req: req,
    res: res,
    next: next
  };
  (0, _baseController["default"])(toolBox, _constants["default"].types.MsgTypeProject, _constants["default"].actions.MsgActionProjectCreate);
  loggerFactory.info("Function createProject Controller has been end");
};
var projectController = {
  getAllProject: getAllProject,
  createProject: createProject
};
var _default = projectController;
exports["default"] = _default;