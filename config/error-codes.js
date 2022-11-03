'use strict';

const errorCodes = {
  TokenNotFound: {
    message: 'common.notifications.errors.tokenNotFound',
    returnCode: 3000,
    statusCode: 401
  },
  TokenExpiredError: {
    message: 'common.notifications.errors.tokenExpiredError',
    returnCode: 3001,
    statusCode: 401
  },
  TokenFormatError: {
    message: 'common.notifications.errors.tokenFormatError',
    returnCode: 3002,
    statusCode: 401
  },
  OrchestratorHandlerNotFound: {
    message: 'common.notifications.errors.orchestratorHandlerNotFound',
    returnCode: 3003,
    statusCode: 400
  },
  SchemaNotFound: {
    message: 'common.notifications.errors.schemaNotFound',
    returnCode: 3004,
    statusCode: 400
  },
  OrganizationNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3005,
    statusCode: 400
  },
  DuplicateNameOrganization: {
    message: 'resources.organizations.notifications.errors.duplicateName',
    returnCode: 3006,
    statusCode: 400
  },
  DuplicateNameProject: {
    message: 'resources.projects.notifications.errors.duplicateName',
    returnCode: 3007,
    statusCode: 400
  }
};

export default errorCodes;
