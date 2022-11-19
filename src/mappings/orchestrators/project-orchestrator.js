'use strict';

import Promise from 'bluebird';
import { assign } from 'lodash';

import constants from '@constants';
import { formatSlug, formatErrorMessage } from '@utils';

// core
import logger from '@core/logger';
import dbManager from '@core/database';
import {
  buildNewError,
  createFilterPagination,
  createFindQuery,
  createSortOrderQuery,
  convertDataResponseMap,
  checkDuplicate,
  attributeFilter
} from '@core/common';

import { projectDTO } from '@shared/dtos';

const loggerFactory = logger.createLogger(
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
    loggerFactory.info(`Function getAllProject has been start`);

    const { skip, limit } = createFilterPagination(req.query);
    const query = createFindQuery(req.query);
    const sort = createSortOrderQuery(req.query);

    const projects = await dbManager.findAll({
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

    const total = await dbManager.count({
      type: 'ProjectModel',
      filter: query
    });

    const response = await convertDataResponseMap(projects);

    loggerFactory.info(`Function getAllProject has been end`);

    return {
      result: {
        data: response,
        total
      },
      msg: 'ProjectGetAllSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function getAllProject has error`, {
      args: formatErrorMessage(err)
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
    loggerFactory.info(`Function CreateProject has been start`);

    const { name } = req.body;

    const slug = formatSlug(name);

    // check duplicate slug
    const isDuplicate = await checkDuplicate('ProjectModel', {
      slug
    });

    if (isDuplicate) {
      throw buildNewError('DuplicateNameProject');
    }

    let doc = assign(req.body, {
      slug: slug
    });

    doc = attributeFilter(doc, 'create');

    const data = await dbManager.createOne({
      type: 'ProjectModel',
      doc
    });

    const result = projectDTO(data);

    loggerFactory.info(`Function CreateProject has been end`);

    return {
      result: {
        data: result
      },
      msg: 'ProjectCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function CreateProject has error`, {
      args: formatErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const projectOrchestrator = {
  getAllProject,
  createProject
};

export default projectOrchestrator;
