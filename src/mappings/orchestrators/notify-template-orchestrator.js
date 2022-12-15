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

const loggerFactory = loggerManager(
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
    loggerFactory.info(`Function getAllNotifyTemplate has been start`);

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query);
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

    loggerFactory.info(`Function getAllNotifyTemplate has been end`);

    return {
      result: {
        data,
        total
      },
      msg: 'NotifyTemplateS001'
    };
  } catch (err) {
    loggerFactory.error(`Function getAllNotifyTemplate has error`, {
      args: utils.formatErrorMsg(err)
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
    loggerFactory.info(`Function createNotifyTemplate has been start`);

    // validate input
    const error = validators.validatorNotifyTemplateCreate(req.body);

    if (error) {
      throw commons.newError('NotifyTemplateE001');
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

    loggerFactory.info(`Function createNotifyTemplate has been end`);
    return {
      result: {
        data
      },
      msg: 'NotifyTemplateS002'
    };
  } catch (err) {
    loggerFactory.error(`Function createNotifyTemplate has error`, {
      args: utils.formatErrorMsg(err)
    });
    return Promise.reject(err);
  }
};

const notifyOrchestrator = {
  getAllNotifyTemplate,
  createNotifyTemplate
};

export default notifyOrchestrator;
