'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.ORGANIZATION_CONTROLLER
);

/**
 * @description Get All Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllOrganization Controller has been end'
  });
};

/**
 * @description Create Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createOrganization Controller has been end'
  });
};

/**
 * @description Get Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getOrganization Controller has been end'
  });
};

/**
 * @description Edit Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateOrganization Controller has been end'
  });
};

/**
 * @description Delete Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteOrganization Controller has been end'
  });
};

/**
 * @description Get All Project In Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllProjectInOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProjectInOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGetAllProjectInOrganization
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProjectInOrganization Controller has been end'
  });
};

/**
 * @description Get All Project Not On Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllProjectNotOnOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProjectNotOnOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGetAllProjectNotOnOrganization
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllProjectNotOnOrganization Controller has been end'
  });
};

/**
 * @description Add Projects To Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addProjectsToOrganization = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addProjectsToOrganization Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationAddProjectsToOrganization
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addProjectsToOrganization Controller has been end'
  });
};

/**
 * @description Remove Projects From Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const removeProjectsFromProject = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeProjectsFromProject Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationRemoveProjectsToOrganization
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeProjectsFromProject Controller has been end'
  });
};

const organizationController = {
  getAllOrganization,
  createOrganization,
  getOrganization,
  updateOrganization,
  deleteOrganization,
  getAllProjectInOrganization,
  getAllProjectNotOnOrganization,
  addProjectsToOrganization,
  removeProjectsFromProject
};

export default organizationController;
