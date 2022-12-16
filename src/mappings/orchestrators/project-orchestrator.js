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

const loggerFactory = loggerManager(
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
    loggerFactory.info(`Function getAllProject Orchestrator has been start`);

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

    loggerFactory.info(`Function getAllProject Orchestrator has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'ProjectS001'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllProject Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function createProject Orchestrator has been start`);

    // validate inputs
    const error = validators.validatorProject(req.body);

    if (error) {
      throw commons.newError('ProjectE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('ProjectModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('ProjectE002');
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

    loggerFactory.info(`Function createProject Orchestrator has been end`);

    return {
      result: {
        data: result
      },
      msg: 'ProjectS002'
    };
  } catch (err) {
    loggerFactory.info(`Function createProject Orchestrator has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const projectOrchestrator = {
  getAllProject,
  createProject
};

export default projectOrchestrator;