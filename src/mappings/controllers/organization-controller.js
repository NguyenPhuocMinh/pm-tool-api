'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
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
const getOrganization = (req, res, next) => {
  loggerFactory.info(`Function getOrganization Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationGet
  );
  loggerFactory.info(`Function getOrganization Controller has been end`);
};

/**
 * @description Edit Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateOrganization = (req, res, next) => {
  loggerFactory.info(`Function updateOrganization Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationUpdate
  );
  loggerFactory.info(`Function updateOrganization Controller has been end`);
};

/**
 * @description Delete Organization By ID Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteOrganization = (req, res, next) => {
  loggerFactory.info(
    `Function deleteOrganization Controller has been start`
  );
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeOrganization,
    constants.actions.MsgActionOrganizationDelete
  );
  loggerFactory.info(`Function deleteOrganization Controller has been end`);
};

const organizationController = {
  getAllOrganization,
  createOrganization,
  getOrganization,
  updateOrganization,
  deleteOrganization
};

export default organizationController;
