'use strict';

import Promise from 'bluebird';
import { assign } from 'lodash';

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
    const query = helpers.queryHelper(req.query);
    const sort = helpers.sortHelper(req.query);

    const projects = await repository.findAll({
      type: 'ProjectModel',
      filter: query,
      projection: {
        __v: 0,
        createdAt: 0,
        createdBy: 0,
        updatedAt: 0,
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

    const response = await commons.dataResponsesMapper(projects);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllProject Orchestrator has been end'
    });

    return {
      result: {
        data: response,
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
    const error = validators.validatorProject(req.body);

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

    let doc = assign(req.body, {
      slug: slug
    });

    doc = helpers.attributeHelper(null, doc, 'create');

    const data = await repository.createOne({
      type: 'ProjectModel',
      doc
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

const projectOrchestrator = {
  getAllProject,
  createProject
};

export default projectOrchestrator;
