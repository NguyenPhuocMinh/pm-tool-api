'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
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
  loggerFactory.info(`Function getAllOrganization Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGetAll
  );
  loggerFactory.info(`Function getAllOrganization Controller has been end`);
};

/**
 * @description Create Organization Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createOrganization = (req, res, next) => {
  loggerFactory.info(`Function createOrganization Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationCreate
  );
  loggerFactory.info(`Function createOrganization Controller has been end`);
};

/**
 * @description Get Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getOrganizationByID = (req, res, next) => {
  loggerFactory.info(`Function getOrganizationByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGetID
  );
  loggerFactory.info(`Function getOrganizationByID Controller has been end`);
};

/**
 * @description Edit Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const editOrganizationByID = (req, res, next) => {
  loggerFactory.info(`Function editOrganizationByID Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationEdit
  );
  loggerFactory.info(`Function editOrganizationByID Controller has been end`);
};

/**
 * @description Delete Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteOrganizationByID = (req, res, next) => {
  loggerFactory.info(
    `Function deleteOrganizationByID Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationDelete
  );
  loggerFactory.info(`Function deleteOrganizationByID Controller has been end`);
};

const organizationController = {
  getAllOrganization,
  createOrganization,
  getOrganizationByID,
  editOrganizationByID,
  deleteOrganizationByID
};

export default organizationController;
