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
  OrganizationIDNotFound: {
    message: 'resources.organizations.notifications.errors.idNotFound',
    returnCode: 3007,
    statusCode: 400
  },
  ProjectNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3008,
    statusCode: 400
  },
  DuplicateNameProject: {
    message: 'resources.projects.notifications.errors.duplicateName',
    returnCode: 3009,
    statusCode: 400
  },
  ProjectIDNotFound: {
    message: 'resources.projects.notifications.errors.idNotFound',
    returnCode: 3010,
    statusCode: 400
  },
  RoleNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3011,
    statusCode: 400
  },
  DuplicateNameRole: {
    message: 'resources.projects.notifications.errors.duplicateName',
    returnCode: 3012,
    statusCode: 400
  },
  RoleIDNotFound: {
    message: 'resources.projects.notifications.errors.idNotFound',
    returnCode: 3013,
    statusCode: 400
  },
  PermissionNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3014,
    statusCode: 400
  },
  DuplicateNamePermission: {
    message: 'resources.projects.notifications.errors.duplicateName',
    returnCode: 3015,
    statusCode: 400
  },
  PermissionIDNotFound: {
    message: 'resources.projects.notifications.errors.idNotFound',
    returnCode: 3016,
    statusCode: 400
  }
};

export default errorCodes;
