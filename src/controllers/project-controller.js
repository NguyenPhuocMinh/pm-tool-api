'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
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
  loggerFactory.info(`Function getAllProject Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGetAll
  );
  loggerFactory.info(`Function getAllProject Controller has been end`);
};

/**
 * @description Create Project Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createProject = (req, res, next) => {
  loggerFactory.info(`Function createProject Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectCreate
  );
  loggerFactory.info(`Function createProject Controller has been end`);
};

const projectController = {
  getAllProject,
  createProject
};

export default projectController;
