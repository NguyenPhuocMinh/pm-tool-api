'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.PROJECT_CONTROLLER
);

/**
 * @description Get List Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const GetList = (req, res, next) => {
  loggerFactory.info(`Function GetList Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectGetList
  );
  loggerFactory.info(`Function GetList Controller has been end`);
};

/**
 * @description Create Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const Create = (req, res, next) => {
  loggerFactory.info(`Function Create Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeProject,
    constants.actions.MsgActionProjectCreate
  );
  loggerFactory.info(`Function Create Controller has been end`);
};

const ProjectController = {
  GetList,
  Create
};

export default ProjectController;
