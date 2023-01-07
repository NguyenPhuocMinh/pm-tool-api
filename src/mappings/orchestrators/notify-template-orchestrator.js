'use strict';

import Promise from 'bluebird';

import constants from '@constants';
import commons from '@commons';
import helpers from '@helpers';
import utils from '@utils';

// core
import loggerManager from '@core/logger';
// layers
import repository from '@layers/repository';
// transfers
import transfers from '@transfers';
// validators
import validators from '@validators';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_ORCHESTRATORS.NOTIFY_TEMPLATE_ORCHESTRATOR
);

/**
 * @description Get All Notify Template Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllNotifyTemplate = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyTemplate has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      {
        deleted: false
      }
    ]);
    const sort = helpers.sortHelper(req.query);

    const notifyTemplates = await repository.findAll({
      type: 'NotifyTemplateModel',
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
      type: 'NotifyTemplateModel',
      filter: query
    });

    const data = await commons.dataResponsesMapper(notifyTemplates);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllNotifyTemplate has been end'
    });

    return {
      result: {
        data,
        total
      },
      msg: 'notifyTemplateS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllNotifyTemplate has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Notify Template Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createNotifyTemplate = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createNotifyTemplate has been start'
    });

    // validate input
    const error = validators.validatorNotifyTemplateCreate(req.body);

    if (error) {
      throw commons.newError('notifyTemplateE001');
    }

    req.body = helpers.attributeHelper(req, req.body, 'create');

    const { topic } = req.body;

    const slug = helpers.slugHelper(topic);

    const notifyTemplate = await repository.createOne({
      type: 'NotifyTemplateModel',
      doc: {
        ...req.body,
        slug
      }
    });

    const data = transfers.notifyTemplateTransfer(notifyTemplate);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createNotifyTemplate has been start'
    });

    return {
      result: {
        data
      },
      msg: 'notifyTemplateS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createNotifyTemplate has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const notifyOrchestrator = {
  getAllNotifyTemplate,
  createNotifyTemplate
};

export default notifyOrchestrator;
