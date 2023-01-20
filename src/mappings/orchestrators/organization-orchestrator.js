'use strict';

import Promise from 'bluebird';
import { assign, isEmpty } from 'lodash';

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
  constants.STRUCT_ORCHESTRATORS.ORGANIZATION_ORCHESTRATOR
);

/**
 * @description Get All Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllOrganization has been start'
    });

    const { skip, limit } = helpers.paginationHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [{ deleted: false }]);
    const sort = helpers.sortHelper(req.query);

    const organizations = await repository.findAll({
      type: 'OrganizationModel',
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
      type: 'OrganizationModel',
      filter: query
    });

    const result = await commons.dataResponsesMapper(organizations);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getAllOrganization has been end'
    });

    return {
      result: {
        data: result,
        total
      },
      msg: 'organizationS001'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getAllOrganization has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const createOrganization = async (toolBox) => {
  const { req } = toolBox;

  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createOrganization has been start'
    });

    // validate inputs
    const error = validators.validatorOrganization(req.body);

    if (error) {
      throw commons.newError('organizationE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);

    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('OrganizationModel', {
      slug
    });

    if (isDuplicate) {
      throw commons.newError('organizationE002');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = helpers.attributeHelper(req, organization, 'create');

    const data = await repository.createOne({
      type: 'OrganizationModel',
      doc: organization
    });

    const result = transfers.organizationTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function createOrganization has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'organizationS002'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function createOrganization has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getOrganization has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    const organization = await getOrganizationFuc(id);

    const result = transfers.organizationTransfer(organization);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function getOrganization has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'organizationS003'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getOrganization has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Update Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const updateOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateOrganization has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    // validate inputs
    const error = validators.validatorOrganization(req.body);

    if (error) {
      throw commons.newError('organizationE001');
    }

    const { name } = req.body;
    const slug = helpers.slugHelper(name);
    // check duplicate slug
    const isDuplicate = await helpers.duplicateHelper('OrganizationModel', {
      slug,
      _id: { $ne: id }
    });

    if (isDuplicate) {
      throw commons.newError('organizationE002');
    }

    let organization = assign(req.body, {
      slug: slug
    });

    organization = helpers.attributeHelper(req, organization);

    const data = await repository.updateOne({
      type: 'OrganizationModel',
      id,
      organization
    });

    const result = transfers.organizationTransfer(data);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function updateOrganization has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'organizationS004'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function updateOrganization has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Delete Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const deleteOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteOrganization has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    const result = await repository.deleteOne({
      type: 'OrganizationModel',
      id
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function deleteOrganization has been end'
    });

    return {
      result: {
        data: result
      },
      msg: 'organizationS005'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function deleteOrganization has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Project In Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllProjectInOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function getAllProjectInOrganization Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('organization003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { deleted: false },
      { activated: true },
      { organization: { $eq: id } }
    ]);

    const projects = await repository.findAll({
      type: 'ProjectModel',
      filter: query,
      options: {
        sort,
        skip,
        limit
      }
    });

    const total = await repository.count({
      type: 'ProjectModel',
      filter: query
    });

    const response = await Promise.map(
      projects,
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
      message: 'Function getAllProjectInOrganization Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'organizationS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function getAllProjectInOrganization Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get All Project Not On Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const getAllProjectNotOnOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function getAllProjectNotOnOrganization Orchestrator has been start'
    });

    const { id } = req.params;

    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    const { skip, limit } = helpers.paginationHelper(req.query);
    const sort = helpers.sortHelper(req.query);
    const query = helpers.queryHelper(req.query, null, [
      { deleted: false },
      { activated: true },
      { organization: { $exists: false } }
    ]);

    const projects = await repository.findAll({
      type: 'ProjectModel',
      filter: query,
      options: {
        sort,
        skip,
        limit
      }
    });

    const total = await repository.count({
      type: 'ProjectModel',
      filter: query
    });

    const response = await Promise.map(
      projects,
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
      message:
        'Function getAllProjectNotOnOrganization Orchestrator has been end'
    });

    return {
      result: {
        data: response,
        total
      },
      msg: 'organizationS007'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message:
        'Function getAllProjectNotOnOrganization Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Add Projects To Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const addProjectsToOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addProjectsToOrganization Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddProjectsToOrganization(req.body);

    if (error) {
      throw commons.newError('organizationE001');
    }

    const { updatedAt, updatedBy, projects } = helpers.attributeHelper(
      req,
      req.body
    );

    const organization = await getOrganizationFuc(id);

    organization.projects.push(projects);
    organization.updatedAt = updatedAt;
    organization.updatedBy = updatedBy;
    await organization.save();

    // update organization in project into db
    await repository.updateMany({
      type: 'ProjectModel',
      filter: {
        _id: {
          $in: projects
        }
      },
      doc: {
        organization: id,
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    const response = transfers.projectTransfer(organization);

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message: 'Function addProjectsToOrganization Orchestrator has been end'
    });

    return {
      result: {
        data: response
      },
      msg: 'organizationS008'
    };
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function addProjectsToOrganization Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Remove Projects From Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
const removeProjectsFromOrganization = async (toolBox) => {
  const { req } = toolBox;
  try {
    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function removeProjectsFromOrganization Orchestrator has been start'
    });

    const { id } = req.params;

    // validator inputs
    const error = validators.validatorAddProjectsToOrganization(req.body);

    if (error) {
      throw commons.newError('organizationE001');
    }

    const { updatedAt, updatedBy, projects } = helpers.attributeHelper(
      req,
      req.body
    );

    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    const response = await repository.updateMany({
      type: 'OrganizationModel',
      filter: {
        _id: id
      },
      doc: {
        $pull: {
          projects: projects
        },
        updatedAt,
        updatedBy
      }
    });

    // unset organization in project into db
    await repository.updateMany({
      type: 'ProjectModel',
      filter: {
        _id: {
          $in: projects
        }
      },
      doc: {
        $unset: {
          organization: 1
        },
        updatedAt: updatedAt,
        updatedBy: updatedBy
      }
    });

    logger.log({
      level: constants.LOG_LEVELS.INFO,
      message:
        'Function removeProjectsFromOrganization Orchestrator has been end'
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
      message:
        'Function removeProjectsFromOrganization Orchestrator has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

/**
 * @description Get Organization By Id Helper
 * @param {*} id
 */
const getOrganizationFuc = async (id) => {
  try {
    if (isEmpty(id)) {
      throw commons.newError('organizationE003');
    }

    const organization = await repository.getOne({
      type: 'OrganizationModel',
      id,
      projection: {
        __v: 0
      },
      options: {
        populate: [
          {
            path: 'projects',
            select: 'id name description',
            populate: [
              {
                path: 'teams',
                select: 'id name'
              }
            ]
          }
        ]
      }
    });

    return organization;
  } catch (err) {
    logger.log({
      level: constants.LOG_LEVELS.ERROR,
      message: 'Function getOrganizationFuc has been error',
      args: utils.parseError(err)
    });
    return Promise.reject(err);
  }
};

const organizationOrchestrator = {
  getAllOrganization,
  createOrganization,
  getOrganization,
  updateOrganization,
  deleteOrganization,
  getAllProjectInOrganization,
  getAllProjectNotOnOrganization,
  addProjectsToOrganization,
  removeProjectsFromOrganization
};

export default organizationOrchestrator;
