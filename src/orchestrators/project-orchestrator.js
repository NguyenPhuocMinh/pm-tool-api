'use strict';

import Promise from 'bluebird';
import { assign } from 'lodash';

import constants from '../../constants';

import logUtils from '../../utils/log-util';
import returnUtils from '../../utils/return-util';
import formatUtils from '../../utils/format-util';

import errorCommon from '../../core/common/error-common';
import configureCommon from '../../core/common/configure-common';

import database from '../../core/database';
import { projectDTO } from '../dtos';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.PROJECT_ORCHESTRATOR
);

const GetList = async (toolBox) => {
  const { req } = toolBox;
  try {
    loggerFactory.info(`Function GetList has been start`);

    const { skip, limit } = configureCommon.CreateFilterPagination(req.query);
    const query = configureCommon.CreateFindQuery(req.query);
    const sort = configureCommon.CreateSortOrderQuery(req.query);

    const projects = await database.FindAll({
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

    const total = await database.Count({
      type: 'ProjectModel',
      filter: query
    });

    const response = await configureCommon.ConvertDataResponseMap(projects);

    return {
      result: {
        data: response,
        total
      },
      msg: 'ProjectGetListSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function GetList has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const Create = async (toolBox) => {
  const { req } = toolBox;

  try {
    loggerFactory.info(`Function Create has been start`);

    const { name } = req.body;

    const slug = formatUtils.formatSlug(name);

    // check duplicate slug
    const isDuplicate = await configureCommon.CheckDuplicate('ProjectModel', {
      slug
    });

    if (isDuplicate) {
      throw errorCommon.BuildNewError('DuplicateNameProject');
    }

    let doc = assign(req.body, {
      slug: slug
    });

    doc = configureCommon.AttributeFilter(doc, 'create');

    const data = await database.Create({
      type: 'ProjectModel',
      doc
    });

    const result = projectDTO(data);

    return {
      result: {
        data: result
      },
      msg: 'ProjectCreateSuccess'
    };
  } catch (err) {
    loggerFactory.info(`Function Create has error`, {
      args: returnUtils.returnErrorMessage(err)
    });
    return Promise.reject(err);
  }
};

const ProjectOrchestrator = {
  GetList,
  Create
};

export default ProjectOrchestrator;
