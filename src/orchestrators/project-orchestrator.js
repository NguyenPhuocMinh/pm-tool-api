'use strict';

import Promise from 'bluebird';
import { assign } from 'lodash';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';
import formatUtils from '../../utils/format-util';

import errorCommon from '../../core/common/error-common';
import configureCommon from '../../core/common/configure-common';

import dbManager from '../../core/database';
import { projectDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.PROJECT_ORCHESTRATOR
);

const getAllProject = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function getAllProject has been start`);

    const { skip, limit } = configureCommon.createFilterPagination(req.query);
    const query = configureCommon.createFindQuery(req.query);
    const sort = configureCommon.createSortOrderQuery(req.query);

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

    const response = await configureCommon.convertDataResponseMap(projects);

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
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const createProject = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function CreateProject has been start`);

    const { name } = req.body;

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.checkDuplicate('ProjectModel', {
      slug
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameProject');
    }

    let doc = assign(req.body, {
      slug: slug
    });

    doc = configureCommon.attributeFilter(doc, 'create');

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
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const projectOrchestrator = {
  getAllProject,
  createProject
};

export default projectOrchestrator;
