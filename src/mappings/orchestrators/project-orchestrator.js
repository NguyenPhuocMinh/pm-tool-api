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
  constants.STRUCT_ORCHESTRATORS.PROJECT_ORCHESTRATOR
);

/**
 * @description Get All Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllProject Orchestrator has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const projects = await repository.findAll({
      type: 'ProjectModel',
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
      type: 'ProjectModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(projects);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllProject Orchestrator has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'projectS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createProject = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createProject Orchestrator has been start'
    });

    // validate inputs
    const error = validators.validatorProjectCreateOrUpdate(req.body);

    if (error) {
      throw commons.newError('projectE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('ProjectModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('projectE002');
    }

    req.body = helpers.attributeHelper(req, req.body, 'create');

    const data = await repository.createOne({
      type: 'ProjectModel',
      doc: {
        slug,
        ...req.body
      }
    });

    const result = transfers.projectTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createProject Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'projectS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Project By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getProject = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getProject Orchestrator has been start'
    });

    const { id } = req.params;

    const project = await getProjectFunc(id);

    const result = transfers.projectTransfer(project);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getProject Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'projectS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Project By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateProject = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateProject Orchestrator has been start'
    });

    const { id } = req.params;

    const project = await getProjectFunc(id);

    // validate inputs
    const error = validators.validatorProjectCreateOrUpdate(req.body);

    if (error) {
      throw commons.newError('projectE001');
    }

    const { name } = req.body;

    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('ProjectModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('projectE002');
    }

    req.body = helpers.attributeHelper(req, req.body);

    const { description, activated, startDay, endDay, updatedAt, updatedBy } =
      req.body;

    project.name = name;
    project.description = description;
    project.activated = activated;
    project.startDay = startDay;
    project.endDay = endDay;
    project.updatedAt = updatedAt;
    project.updatedBy = updatedBy;
    await project.save();

    const result = transfers.projectTransfer(project);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateProject Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'projectS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Project By Id Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteProject = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteProject Orchestrator has been start'
    });

    const { id } = req.params;

    const project = await getProjectFunc(id);

    if (project.teams.length > 0) {
      throw commons.newError('projectE004');
    }

    const result = await repository.deleteOne({
      type: 'ProjectModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteProject Orchestrator has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'projectS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Team In Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllTeamInProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeamInProject Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('project003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { deleted: false },
      { activated: true },
      { project: { $eq: id } }
    ]);

    const teams = await repository.findAll({
      type: 'TeamModel',
      filter: query,
      options: {
        sort,
        skip,
        limit
      }
    });

    const total = await repository.count({
      type: 'TeamModel',
      filter: query
    });

    const response = await Promise.map(
      teams,
      (data) => {
        data = data.toJSON();
        return {
          id: data._id,
          name: data.name
        };
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeamInProject Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'projectS006'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllTeamInProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Team Not On Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllTeamNotOnProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeamNotOnProject Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('teamE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { deleted: false },
      { activated: true },
      { project: { $exists: false } }
    ]);

    const teams = await repository.findAll({
      type: 'TeamModel',
      filter: query,
      options: {
        sort,
        skip,
        limit
      }
    });

    const total = await repository.count({
      type: 'TeamModel',
      filter: query
    });

    const response = await Promise.map(
      teams,
      (data) => {
        data = data.toJSON();
        return {
          id: data._id,
          name: data.name,
          activated: data.activated
        };
      },
      { concurrency: 5 }
    );

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllTeamNotOnProject Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'projectS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllTeamNotOnProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Teams To Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addTeamsToProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addTeamsToProject Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddTeamsToProject(req.body);

    if (error) {
      throw commons.newError('projectE001');
    }

    const { updatedAt, updatedBy, teams } = helpers.attributeHelper(
      req,
      req.body
    );

    const project = await getProjectFunc(id);

    project.teams.push(teams);
    project.updatedAt = updatedAt;
    project.updatedBy = updatedBy;
    await project.save();

    // update project in team into db
    await repository.updateMany({
      type: 'TeamModel',
      filter: {
        _id: {
          $in: teams
        }
      },
      doc: {
        project: id,
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    const response = transfers.projectTransfer(project);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addTeamsToProject Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'projectS008'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function addTeamsToProject Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Remove Teams From Project Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const removeTeamsFromProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function removeTeamsFromProject Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddTeamsToProject(req.body);

    if (error) {
      throw commons.newError('projectE001');
    }

    const { updatedAt, updatedBy, teams } = helpers.attributeHelper(
      req,
      req.body
    );

    if (isEmpty(id)) {
      throw commons.newError('projectE003');
    }

    const response = await repository.updateMany({
      type: 'ProjectModel',
      filter: {
        _id: id
      },
      doc: {
        $pull: {
          teams: teams
        },
        updatedAt,
        updatedBy
      }
    });

    // update project in user into db
    await repository.updateMany({
      type: 'TeamModel',
      filter: {
        _id: {
          $in: teams
        }
      },
      doc: {
        $unset: {
          project: 1
        },
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function removeTeamsFromProject Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'projectS009'
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
 * @description Get Project By Id Helper
 * @param {*} id
 */
const getProjectFunc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('projectE003');
    }

    const project = await repository.getOne({
      type: 'ProjectModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'organization',
            select: 'id name description'
          },
          {
            path: 'teams',
            select: 'id name'
          }
        ]
      }
    });

    return project;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getProjectFunc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const projectOrchestrator = {
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

export default projectOrchestrator;
