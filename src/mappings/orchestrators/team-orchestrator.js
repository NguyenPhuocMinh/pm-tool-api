'use strict';

import Promise from 'bluebird';
import { isEmpty } from 'lodash';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';
import transfers from '@transfers';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';
// validators
import validators from '@validators';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.TEAM_ORCHESTRATOR
);

/**
 * @description Get All Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeam Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const teams = await repository.findAll({
      type: 'TeamModel',
      filter: query,
      projection: {
        __v: 0,
        createdBy: 0,
        updatedBy: 0
      },
      options: {
        skip,
        limit,
        sort
      }
    });

    const total = await repository.count({
      type: 'TeamModel',
      filter: query
    });

    const response = await Promise.map(
      teams,
      (data) => {
        return transfers.teamTransfer(data);
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'teamS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createTeam Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorTeamCreateOrUpdate(req.body);

    if (error) {
      throw commons.newError('teamE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('TeamModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('teamE002');
    }

    req.body = helpers.attributeHelper(req, req.body, 'create');

    const team = await repository.createOne({
      type: 'TeamModel',
      doc: {
        slug,
        ...req.body
      }
    });

    const response = transfers.teamTransfer(team);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Team By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getTeam Orchestrator has been start'
    });

    const { id } = req.params;

    const team = await getTeamFunc(id);

    const response = transfers.teamTransfer(team);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Team By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateTeam Orchestrator has been start'
    });

    const { id } = req.params;

    // validate inputs
    const error = validators.validatorTeamCreateOrUpdate(req.body);

    if (error) {
      throw commons.newError('teamE001');
    }

    const { name, activated } = req.body;

    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('TeamModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('teamE002');
    }

    const team = await getTeamFunc(id);

    team.name = name;
    team.activated = activated;
    await team.save();

    const response = transfers.teamTransfer(team);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Team By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteTeam Orchestrator has been start'
    });

    const { id } = req.params;

    const team = await getTeamFunc(id);

    if (team.members.length > 0) {
      throw commons.newError('teamE004');
    }

    const response = await repository.deleteOne({
      type: 'TeamModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Member In Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllMemberInTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllMemberInTeam Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('teamE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(
      req.query,
      ['email'],
      [{ deleted: false }, { activated: true }, { team: { $eq: id } }]
    );

    const members = await repository.findAll({
      type: 'UserModel',
      filter: query,
      options: {
        sort,
        skip,
        limit
      }
    });

    const total = await repository.count({
      type: 'UserModel',
      filter: query
    });

    const response = await Promise.map(
      members,
      (data) => {
        data = data.toJSON();
        return {
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        };
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllMemberInTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'teamS006'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllMemberInTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Member Not On Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllMemberNotOnTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllMemberNotOnTeam Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('teamE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(
      req.query,
      ['email'],
      [
        { deleted: false },
        { activated: true },
        { isAdmin: false },
        { team: { $exists: false } }
      ]
    );

    const members = await repository.findAll({
      type: 'UserModel',
      filter: query,
      options: {
        sort,
        skip,
        limit,
        populate: [
          {
            path: 'team'
          }
        ]
      }
    });

    const total = await repository.count({
      type: 'UserModel',
      filter: query
    });

    const response = await Promise.map(
      members,
      (data) => {
        data = data.toJSON();
        return {
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        };
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllMemberNotOnTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'teamS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllMemberNotOnTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Members To Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addMembersToTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addMembersToTeam Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddMembersToTeam(req.body);

    if (error) {
      throw commons.newError('teamE001');
    }

    const { updatedAt, updatedBy, members } = helpers.attributeHelper(
      req,
      req.body
    );

    const team = await getTeamFunc(id);

    team.members.push(members);
    team.updatedAt = updatedAt;
    team.updatedBy = updatedBy;
    await team.save();

    // update team in user into db
    await repository.updateMany({
      type: 'UserModel',
      filter: {
        _id: {
          $in: members
        }
      },
      doc: {
        team: id,
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    const response = transfers.teamTransfer(team);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addMembersToTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS008'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function addMembersToTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Remove Members From Team Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const removeMembersFromTeam = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function removeMembersFromTeam Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddMembersToTeam(req.body);

    if (error) {
      throw commons.newError('teamE001');
    }

    const { updatedAt, updatedBy, members } = helpers.attributeHelper(
      req,
      req.body
    );

    if (isEmpty(id)) {
      throw commons.newError('teamE003');
    }

    const response = await repository.updateMany({
      type: 'TeamModel',
      filter: {
        _id: id
      },
      doc: {
        $pull: {
          members: members
        },
        updatedAt,
        updatedBy
      }
    });

    // update team in user into db
    await repository.updateMany({
      type: 'UserModel',
      filter: {
        _id: {
          $in: members
        }
      },
      doc: {
        $unset: {
          team: 1
        },
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function removeMembersFromTeam Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'teamS009'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function removeMembersToTeam Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Team By Id Helper
 * @param {*} id
 */
const getTeamFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('teamE003');
    }

    const team = await repository.getOne({
      type: 'TeamModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'project',
            select: 'name description'
          },
          {
            path: 'members',
            select: 'firstName lastName email'
          }
        ]
      }
    });

    return team;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getTeamFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const teamOrchestrator = {
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

export default teamOrchestrator;
