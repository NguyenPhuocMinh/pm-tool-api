'use strict';

import baseController from './base-controller';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.TEAM_CONTROLLER
);

/**
 * @description Get All Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamGetAll
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllTeam Controller has been end'
  });
};

/**
 * @description Create Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamCreate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function createTeam Controller has been end'
  });
};

/**
 * @description Get Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamGet
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getTeam Controller has been end'
  });
};

/**
 * @description Update Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamUpdate
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function updateTeam Controller has been end'
  });
};

/**
 * @description Update Team By Id Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamDelete
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function deleteTeam Controller has been end'
  });
};

/**
 * @description Get All Member In Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllMemberInTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllMemberInTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamGetAllMemberInTeam
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllMemberInTeam Controller has been end'
  });
};

/**
 * @description Get All Member Not On Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllMemberNotOnTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllMemberNotOnTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamGetAllMemberNotOnTeam
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function getAllMemberNotOnTeam Controller has been end'
  });
};

/**
 * @description Add Members To Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addMembersToTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addMembersToTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamAddMembersToTeam
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function addMembersToTeam Controller has been end'
  });
};

/**
 * @description Remove Members To Team Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const removeMembersFromTeam = (req, res, next) => {
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeMembersFromTeam Controller has been start'
  });
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTeam,
    constants.actions.MsgActionTeamRemoveMembersFromTeam
  );
  logger.log({
    level: constants.LOG_LEVELS.INFO,
    message: 'Function removeMembersFromTeam Controller has been end'
  });
};

const teamController = {
  getAllTeam,
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam,
  getAllMemberInTeam,
  getAllMemberNotOnTeam,
  addMembersToTeam,
  removeMembersFromTeam
};

export default teamController;
