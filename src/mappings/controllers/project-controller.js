'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.PROJECT_CONTROLLER
);

/**
 * @description Get All Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProject Controller has been end'
  });
};

/**
 * @description Create Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createProject Controller has been end'
  });
};

/**
 * @description Get Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getProject Controller has been end'
  });
};

/**
 * @description Update Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateProject Controller has been end'
  });
};

/**
 * @description Delete Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteProject Controller has been end'
  });
};

/**
 * @description Get All Team In Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllTeamInProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeamInProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGetAllTeamInProject
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeamInProject Controller has been end'
  });
};

/**
 * @description Get All Team Not On Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllTeamNotOnProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeamNotOnProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGetAllTeamNotOnProject
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeamNotOnProject Controller has been end'
  });
};

/**
 * @description Add Teams To Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addTeamsToProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addTeamsToProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectAddTeamsToProject
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addTeamsToProject Controller has been end'
  });
};

/**
 * @description Remove Teams From Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const removeTeamsFromProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeTeamsFromProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectRemoveTeamsFromProject
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeTeamsFromProject Controller has been end'
  });
};

const projectController = {
  getAllProject,
  createProject,
  getProject,
  updateProject,
  deleteProject,
  getAllTeamInProject,
  getAllTeamNotOnProject,
  addTeamsToProject,
  removeTeamsFromProject
};

export default projectController;
