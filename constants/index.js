'use strict';

const APP_NAME = 'pm-tool-api';

const STRUCT_NAME_SERVER = 'server';
const STRUCT_NAME_ROUTER = 'router';
const STRUCT_NAME_DATABASE = 'database';
const STRUCT_NAME_ORCHESTRATOR = 'orchestrator';

/**
 * @description MIDDLEWARES
 */
const LOG_MIDDLEWARE = 'log-middleware';

const STRUCT_MIDDLEWARES = {
  LOG_MIDDLEWARE
};

/**
 * @description CONTROLLERS
 */
const BASE_CONTROLLER = 'base-controller';
const HOME_CONTROLLER = 'home-controller';
const ORGANIZATION_CONTROLLER = 'organization-controller';
const PROJECT_CONTROLLER = 'project-controller';

const STRUCT_CONTROLLERS = {
  BASE_CONTROLLER,
  HOME_CONTROLLER,
  ORGANIZATION_CONTROLLER,
  PROJECT_CONTROLLER
};

/**
 * @description ORCHESTRATORS
 */
const BASE_ORCHESTRATOR = 'base-orchestrator';
const HOME_ORCHESTRATOR = 'home-orchestrator';
const ORGANIZATION_ORCHESTRATOR = 'organization-orchestrator';
const PROJECT_ORCHESTRATOR = 'project-orchestrator';

const STRUCT_ORCHESTRATORS = {
  BASE_ORCHESTRATOR,
  HOME_ORCHESTRATOR,
  ORGANIZATION_ORCHESTRATOR,
  PROJECT_ORCHESTRATOR
};

/**
 * @description DTOS
 */

const ORGANIZATION_DTO = 'organization-dto';
const PROJECT_DTO = 'project-dto';

const STRUCT_DTO = {
  ORGANIZATION_DTO,
  PROJECT_DTO
};

/**
 * @description COMMON
 */
const ERROR_COMMON = 'error-common';
const RESPONSE_COMMON = 'response-common';
const TEMPLATE_COMMON = 'template-common';
const LOOKUP_COMMON = 'lookup-common';
const CONFIGURE_COMMON = 'configure-common';
const VALIDATE_COMMON = 'validate-common';

const STRUCT_COMMON = {
  ERROR_COMMON,
  RESPONSE_COMMON,
  TEMPLATE_COMMON,
  LOOKUP_COMMON,
  CONFIGURE_COMMON,
  VALIDATE_COMMON
};

const DATE_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const TIMEZONE_DEFAULT = 'Asia/Ho_Chi_Minh';
const DEFAULT_SYSTEM = 'system';
const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 1000;

const HTTP_STATUS = {
  SUCCESS: '200',
  CREATED: '201',
  ACCEPTED: '202',
  BAD_REQUEST: '400',
  UN_AUTHORIZATION: '401',
  FORBIDDEN: '403',
  NOT_FOUND: '404',
  METHOD_NOT_ALLOW: '405',
  DUPLICATE: '409',
  INTERNAL_SERVER_ERROR: '500'
};

/**
 * @description TYPES
 */
const types = {
  MsgTypeHome: 'HOME',
  MsgTypeOrganization: 'ORGANIZATION',
  MsgTypeProject: 'PROJECT'
};

/**
 * @description HOME ACTIONS
 */
const homeActions = {
  MsgActionHomePage: 'HOME_PAGE'
};

/**
 * @description ORGANIZATION ACTIONS
 */
const organizationActions = {
  MsgActionOrganizationGetList: 'ORGANIZATION_GET_LIST',
  MsgActionOrganizationCreate: 'ORGANIZATION_CREATE',
  MsgActionOrganizationGetID: 'ORGANIZATION_GET_ID',
  MsgActionOrganizationEdit: 'ORGANIZATION_EDIT',
  MsgActionOrganizationDelete: 'ORGANIZATION_DELETE'
};

/**
 * @description PROJECT ACTIONS
 */
const projectActions = {
  MsgActionProjectGetList: 'PROJECT_GET_LIST',
  MsgActionProjectCreate: 'PROJECT_CREATE'
};

const actions = {
  ...homeActions,
  ...organizationActions,
  ...projectActions
};

const constants = {
  types,
  actions,
  DATE_TIMESTAMP_FORMAT,
  TIMEZONE_DEFAULT,
  DEFAULT_SYSTEM,
  DEFAULT_SKIP,
  DEFAULT_LIMIT,
  HTTP_STATUS,
  APP_NAME,
  STRUCT_NAME_SERVER,
  STRUCT_NAME_ROUTER,
  STRUCT_NAME_DATABASE,
  STRUCT_NAME_ORCHESTRATOR,
  STRUCT_DTO,
  STRUCT_COMMON,
  STRUCT_MIDDLEWARES,
  STRUCT_CONTROLLERS,
  STRUCT_ORCHESTRATORS
};

export default constants;
