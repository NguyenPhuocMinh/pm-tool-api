'use strict';

const APP_NAME = 'pm-tool-api';

const STRUCT_NAME_SERVER = 'server';
const STRUCT_NAME_ROUTER = 'router';
const STRUCT_NAME_DB_MANAGER = 'db-manager';
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

const STRUCT_CONTROLLERS = {
  BASE_CONTROLLER,
  HOME_CONTROLLER
};

/**
 * @description ORCHESTRATORS
 */
const BASE_ORCHESTRATOR = 'base-orchestrator';
const HOME_ORCHESTRATOR = 'home-orchestrator';

const STRUCT_ORCHESTRATORS = {
  BASE_ORCHESTRATOR,
  HOME_ORCHESTRATOR
};

/**
 * @description COMMON
 */
const ERROR_COMMON = 'error-common';
const RESPONSE_COMMON = 'response-common';
const TEMPLATE_COMMON = 'template-common';
const LOOKUP_COMMON = 'lookup-common';

const STRUCT_COMMON = {
  ERROR_COMMON,
  RESPONSE_COMMON,
  TEMPLATE_COMMON,
  LOOKUP_COMMON
};

const DATE_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';

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
  MsgTypeTest: 'TEST'
};

/**
 * @description HOME ACTIONS
 */
const homeActions = {
  MsgActionHomePage: 'HOME_PAGE',
  MsgActionTest: 'GET_TEST'
};

const actions = {
  ...homeActions
};

const constants = {
  types,
  actions,
  DATE_TIMESTAMP_FORMAT,
  HTTP_STATUS,
  APP_NAME,
  STRUCT_NAME_SERVER,
  STRUCT_NAME_ROUTER,
  STRUCT_NAME_DB_MANAGER,
  STRUCT_NAME_ORCHESTRATOR,
  STRUCT_COMMON,
  STRUCT_MIDDLEWARES,
  STRUCT_CONTROLLERS,
  STRUCT_ORCHESTRATORS
};

export default constants;
