'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var APP_NAME = 'pm-tool-api';
var STRUCT_NAME_SERVER = 'server';
var STRUCT_NAME_ROUTER = 'router';
var STRUCT_NAME_DATABASE = 'database';
var STRUCT_NAME_ORCHESTRATOR = 'orchestrator';
var STRUCT_NAME_PUBLISHER = 'publisher';

/**
 * @description MIDDLEWARE
 */
var LOG_MIDDLEWARE = 'log-middleware';
var AUTH_MIDDLEWARE = 'auth-middleware';
var ROUTER_MIDDLEWARE = 'router-middleware';
var ERROR_MIDDLEWARE = 'error-middleware';
var SOCKET_MIDDLEWARE = 'socket-middleware';
var STRUCT_MIDDLEWARE = {
  LOG_MIDDLEWARE: LOG_MIDDLEWARE,
  AUTH_MIDDLEWARE: AUTH_MIDDLEWARE,
  ROUTER_MIDDLEWARE: ROUTER_MIDDLEWARE,
  ERROR_MIDDLEWARE: ERROR_MIDDLEWARE,
  SOCKET_MIDDLEWARE: SOCKET_MIDDLEWARE
};

/**
 * @description BUILD
 */
var TEMPLATE_BUILD = 'template-build';
var RESPONSE_BUILD = 'response-build';
var LOOKUP_BUILD = 'lookup-build';
var STRUCT_BUILDS = {
  TEMPLATE_BUILD: TEMPLATE_BUILD,
  RESPONSE_BUILD: RESPONSE_BUILD,
  LOOKUP_BUILD: LOOKUP_BUILD
};

/**
 * @description CONTROLLERS
 */
var BASE_CONTROLLER = 'base-controller';
var TEST_CONTROLLER = 'test-controller';
var SOCKET_CONTROLLER = 'socket-controller';
var AUTH_CONTROLLER = 'auth-controller';
var CONFIG_CONTROLLER = 'config-controller';
var HOME_CONTROLLER = 'home-controller';
var HEALTH_CONTROLLER = 'health-controller';
var CATEGORY_CONTROLLER = 'category-controller';
var PRODUCT_CONTROLLER = 'product-controller';
var ORGANIZATION_CONTROLLER = 'organization-controller';
var PROJECT_CONTROLLER = 'project-controller';
var TEAM_CONTROLLER = 'team-controller';
var ROLE_CONTROLLER = 'role-controller';
var PERMISSION_CONTROLLER = 'permission-controller';
var USER_CONTROLLER = 'user-controller';
var USER_SESSION_CONTROLLER = 'user-session-controller';
var USER_ONLINE_CONTROLLER = 'user-online-controller';
var NOTIFY_CONTROLLER = 'notify-controller';
var NOTIFY_USER_CONTROLLER = 'notify-user-controller';
var NOTIFY_TEMPLATE_CONTROLLER = 'notify-template-controller';
var CUSTOMER_CONTROLLER = 'customer-controller';
var STRUCT_CONTROLLERS = {
  BASE_CONTROLLER: BASE_CONTROLLER,
  TEST_CONTROLLER: TEST_CONTROLLER,
  SOCKET_CONTROLLER: SOCKET_CONTROLLER,
  AUTH_CONTROLLER: AUTH_CONTROLLER,
  CONFIG_CONTROLLER: CONFIG_CONTROLLER,
  HOME_CONTROLLER: HOME_CONTROLLER,
  HEALTH_CONTROLLER: HEALTH_CONTROLLER,
  CATEGORY_CONTROLLER: CATEGORY_CONTROLLER,
  PRODUCT_CONTROLLER: PRODUCT_CONTROLLER,
  ORGANIZATION_CONTROLLER: ORGANIZATION_CONTROLLER,
  PROJECT_CONTROLLER: PROJECT_CONTROLLER,
  TEAM_CONTROLLER: TEAM_CONTROLLER,
  ROLE_CONTROLLER: ROLE_CONTROLLER,
  PERMISSION_CONTROLLER: PERMISSION_CONTROLLER,
  USER_CONTROLLER: USER_CONTROLLER,
  USER_SESSION_CONTROLLER: USER_SESSION_CONTROLLER,
  USER_ONLINE_CONTROLLER: USER_ONLINE_CONTROLLER,
  NOTIFY_CONTROLLER: NOTIFY_CONTROLLER,
  NOTIFY_USER_CONTROLLER: NOTIFY_USER_CONTROLLER,
  NOTIFY_TEMPLATE_CONTROLLER: NOTIFY_TEMPLATE_CONTROLLER,
  CUSTOMER_CONTROLLER: CUSTOMER_CONTROLLER
};

/**
 * @description ORCHESTRATORS
 */
var BASE_ORCHESTRATOR = 'base-orchestrator';
var TEST_ORCHESTRATOR = 'test-orchestrator';
var SOCKET_ORCHESTRATOR = 'socket-orchestrator';
var AUTH_ORCHESTRATOR = 'auth-orchestrator';
var CONFIG_ORCHESTRATOR = 'config-orchestrator';
var HOME_ORCHESTRATOR = 'home-orchestrator';
var HEALTH_ORCHESTRATOR = 'health-orchestrator';
var CATEGORY_ORCHESTRATOR = 'category-orchestrator';
var PRODUCT_ORCHESTRATOR = 'product-orchestrator';
var CUSTOMER_ORCHESTRATOR = 'customer-orchestrator';
var ORGANIZATION_ORCHESTRATOR = 'organization-orchestrator';
var PROJECT_ORCHESTRATOR = 'project-orchestrator';
var TEAM_ORCHESTRATOR = 'team-orchestrator';
var ROLE_ORCHESTRATOR = 'role-orchestrator';
var PERMISSION_ORCHESTRATOR = 'permission-orchestrator';
var USER_ORCHESTRATOR = 'user-orchestrator';
var USER_SESSION_ORCHESTRATOR = 'user-session-orchestrator';
var USER_ONLINE_ORCHESTRATOR = 'user-online-orchestrator';
var NOTIFY_ORCHESTRATOR = 'notify-orchestrator';
var NOTIFY_USER_ORCHESTRATOR = 'notify-user-orchestrator';
var NOTIFY_TEMPLATE_ORCHESTRATOR = 'notify-template-orchestrator';
var STRUCT_ORCHESTRATORS = {
  BASE_ORCHESTRATOR: BASE_ORCHESTRATOR,
  TEST_ORCHESTRATOR: TEST_ORCHESTRATOR,
  SOCKET_ORCHESTRATOR: SOCKET_ORCHESTRATOR,
  AUTH_ORCHESTRATOR: AUTH_ORCHESTRATOR,
  CONFIG_ORCHESTRATOR: CONFIG_ORCHESTRATOR,
  HOME_ORCHESTRATOR: HOME_ORCHESTRATOR,
  HEALTH_ORCHESTRATOR: HEALTH_ORCHESTRATOR,
  CATEGORY_ORCHESTRATOR: CATEGORY_ORCHESTRATOR,
  PRODUCT_ORCHESTRATOR: PRODUCT_ORCHESTRATOR,
  CUSTOMER_ORCHESTRATOR: CUSTOMER_ORCHESTRATOR,
  ORGANIZATION_ORCHESTRATOR: ORGANIZATION_ORCHESTRATOR,
  PROJECT_ORCHESTRATOR: PROJECT_ORCHESTRATOR,
  TEAM_ORCHESTRATOR: TEAM_ORCHESTRATOR,
  ROLE_ORCHESTRATOR: ROLE_ORCHESTRATOR,
  PERMISSION_ORCHESTRATOR: PERMISSION_ORCHESTRATOR,
  USER_ORCHESTRATOR: USER_ORCHESTRATOR,
  USER_SESSION_ORCHESTRATOR: USER_SESSION_ORCHESTRATOR,
  USER_ONLINE_ORCHESTRATOR: USER_ONLINE_ORCHESTRATOR,
  NOTIFY_ORCHESTRATOR: NOTIFY_ORCHESTRATOR,
  NOTIFY_USER_ORCHESTRATOR: NOTIFY_USER_ORCHESTRATOR,
  NOTIFY_TEMPLATE_ORCHESTRATOR: NOTIFY_TEMPLATE_ORCHESTRATOR
};

/**
 * @description VALIDATORS
 */
var AUTH_VALIDATOR = 'auth-validator';
var CATEGORY_VALIDATOR = 'category-validator';
var PRODUCT_VALIDATOR = 'product-validator';
var ORGANIZATION_VALIDATOR = 'organization-validator';
var PROJECT_VALIDATOR = 'project-validator';
var TEAM_VALIDATOR = 'team-validator';
var ROLE_VALIDATOR = 'role-validator';
var PERMISSION_VALIDATOR = 'permission-validator';
var USER_VALIDATOR = 'user-validator';
var STRUCT_VALIDATORS = {
  AUTH_VALIDATOR: AUTH_VALIDATOR,
  CATEGORY_VALIDATOR: CATEGORY_VALIDATOR,
  PRODUCT_VALIDATOR: PRODUCT_VALIDATOR,
  ORGANIZATION_VALIDATOR: ORGANIZATION_VALIDATOR,
  PROJECT_VALIDATOR: PROJECT_VALIDATOR,
  TEAM_VALIDATOR: TEAM_VALIDATOR,
  ROLE_VALIDATOR: ROLE_VALIDATOR,
  PERMISSION_VALIDATOR: PERMISSION_VALIDATOR,
  USER_VALIDATOR: USER_VALIDATOR
};

/**
 * @description TRANSFERS
 */
var AUTH_TRANSFER = 'auth-transfer';
var CATEGORY_TRANSFER = 'category-transfer';
var PRODUCT_TRANSFER = 'product-transfer';
var CUSTOMER_TRANSFER = 'customer-transfer';
var ORGANIZATION_TRANSFER = 'organization-transfer';
var PROJECT_TRANSFER = 'project-transfer';
var TEAM_TRANSFER = 'team-transfer';
var ROLE_TRANSFER = 'role-transfer';
var PERMISSION_TRANSFER = 'permission-transfer';
var USER_TRANSFER = 'user-transfer';
var USER_SESSION_TRANSFER = 'user-session-transfer';
var USER_ONLINE_TRANSFER = 'user--online-transfer';
var NOTIFY_TRANSFER = 'notify-transfer';
var NOTIFY_USER_TRANSFER = 'notify-user-transfer';
var NOTIFY_TEMPLATE_TRANSFER = 'notify-template-transfer';
var STRUCT_TRANSFERS = {
  AUTH_TRANSFER: AUTH_TRANSFER,
  CATEGORY_TRANSFER: CATEGORY_TRANSFER,
  PRODUCT_TRANSFER: PRODUCT_TRANSFER,
  CUSTOMER_TRANSFER: CUSTOMER_TRANSFER,
  ORGANIZATION_TRANSFER: ORGANIZATION_TRANSFER,
  PROJECT_TRANSFER: PROJECT_TRANSFER,
  TEAM_TRANSFER: TEAM_TRANSFER,
  ROLE_TRANSFER: ROLE_TRANSFER,
  PERMISSION_TRANSFER: PERMISSION_TRANSFER,
  USER_TRANSFER: USER_TRANSFER,
  USER_SESSION_TRANSFER: USER_SESSION_TRANSFER,
  USER_ONLINE_TRANSFER: USER_ONLINE_TRANSFER,
  NOTIFY_TRANSFER: NOTIFY_TRANSFER,
  NOTIFY_USER_TRANSFER: NOTIFY_USER_TRANSFER,
  NOTIFY_TEMPLATE_TRANSFER: NOTIFY_TEMPLATE_TRANSFER
};

/**
 * @description COMMONS
 */
var ERROR_COMMON = 'error-common';
var MAPPER_COMMON = 'mapper-common';
var STRUCT_COMMON = {
  ERROR_COMMON: ERROR_COMMON,
  MAPPER_COMMON: MAPPER_COMMON
};

/**
 * @description ADAPTERS
 */
var REDIS_ADAPTER = 'redis-adapter';
var SOCKET_ADAPTER = 'socket-adapter';
var CRON_ADAPTER = 'cron-adapter';
var AMQP_ADAPTER = 'amqp-adapter';
var STRUCT_ADAPTERS = {
  REDIS_ADAPTER: REDIS_ADAPTER,
  SOCKET_ADAPTER: SOCKET_ADAPTER,
  CRON_ADAPTER: CRON_ADAPTER,
  AMQP_ADAPTER: AMQP_ADAPTER
};

/**
 * @description LAYERS
 */
var REPOSITORY_LAYER = 'repository-layer';
var STRUCT_LAYERS = {
  REPOSITORY_LAYER: REPOSITORY_LAYER
};

/**
 * @description WORKERS
 */
var SOCKET_WORKER = 'socket-worker';
var CRON_WORKER = 'cron-worker';
var STRUCT_WORKER = {
  SOCKET_WORKER: SOCKET_WORKER,
  CRON_WORKER: CRON_WORKER
};

/**
 * @description SHARES
 */
var VALIDATOR_SCHEMA = 'validator-schema';
var VALIDATOR_PHONE = 'validator-phone';
var STRUCT_SHARES = {
  VALIDATOR_SCHEMA: VALIDATOR_SCHEMA,
  VALIDATOR_PHONE: VALIDATOR_PHONE
};

/**
 * @description SOCKET EVENTS
 */
var SOCKET_EVENTS = {
  SOCKET_ROOM: 'pm-tool-room',
  SOCKET_USER_LOGIN: 'socket_user_login',
  SOCKET_USER_LOGOUT: 'socket_user_logout',
  SOCKET_USER_ONLINE: 'socket_user_online'
};

/**
 * @description QUEUE
 */
var AMQP_QUEUES = {
  TEST_QUEUE: 'TEST_QUEUE',
  SEND_NOTIFY_CHANGE_PASSWORD_QUEUE: 'SEND_NOTIFY_CHANGE_PASSWORD_QUEUE'
};
var DATE_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var TIMEZONE_DEFAULT = 'Asia/Ho_Chi_Minh';
var DEFAULT_SYSTEM = 'SYSTEM';
var DEFAULT_SKIP = 0;
var DEFAULT_LIMIT = 1000;
var DEFAULT_PASSWORD = 'KeepS3cr3t!';
var ATTRIBUTE_TOKEN_KEY = 'Authorization';
var DEFAULT_EXPIRES_TOKEN = 900; // => 15 minutes
var DEFAULT_EXPIRES_REFRESH_TOKEN = '1d';
var HTTP_STATUS = {
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
var LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  HTTP: 'http',
  VERBOSE: 'verbose',
  DEBUG: 'debug',
  SILLY: 'silly',
  DATA: 'data'
};
var CRON_EXPRESSIONS = {
  MINUTES: {
    TEN: '*/10 * * * *',
    // At every 30 minutes
    THIRTY: '*/30 * * * *' // At every 30 minutes
  },

  HOURS: {
    ONE: '* 00 1 * * *' // At every 1 hour
  }
};

/**
 * @description TYPES
 */
var types = {
  MsgTypeTest: 'TEST',
  MsgTypeSocket: 'SOCKET',
  MsgTypeAuth: 'AUTH',
  MsgTypeConfig: 'CONFIG',
  MsgTypeHome: 'HOME',
  MsgTypeHealth: 'HEALTH',
  MsgTypeCategory: 'CATEGORY',
  MsgTypeProduct: 'PRODUCT',
  MsgTypeCustomer: 'CUSTOMER',
  MsgTypeOrganization: 'ORGANIZATION',
  MsgTypeProject: 'PROJECT',
  MsgTypeTeam: 'TEAM',
  MsgTypeRole: 'ROLE',
  MsgTypePermission: 'PERMISSION',
  MsgTypeUser: 'USER',
  MsgTypeUserSession: 'USER_SESSION',
  MsgTypeUserOnline: 'USER_ONLINE',
  MsgTypeNotify: 'NOTIFY',
  MsgTypeNotifyUser: 'NOTIFY_USER',
  MsgTypeNotifyTemplate: 'NOTIFY_TEMPLATE'
};

/**
 * @description TEST ACTIONS
 */
var testActions = {
  MsgActionTestSendQueue: 'TEST_SEND_QUEUE'
};

/**
 * @description SOCKET ACTIONS
 */
var socketActions = {
  MsgActionGetSocket: 'GET_SOCKET',
  MsgActionPostSocket: 'POST_SOCKET'
};

/**
 * @description AUTH ACTIONS
 */
var authActions = {
  MsgActionSignIn: 'AUTH_SIGN_IN',
  MsgActionSignOut: 'AUTH_SIGN_OUT',
  MsgActionWhoAmI: 'AUTH_WHOAMI',
  MsgActionRefreshToken: 'AUTH_REFRESH_TOKEN',
  MsgActionRevokeToken: 'AUTH_REVOKE_TOKEN'
};

/**
 * @description CONFIG ACTIONS
 */
var configActions = {
  MsgActionGetDataConfigJson: 'DATA_CONFIG_JSON'
};

/**
 * @description HOME ACTIONS
 */
var homeActions = {
  MsgActionHomePage: 'HOME_PAGE',
  MsgActionHealthCheck: 'HEALTH_CHECK'
};

/**
 * @description HEALTH ACTIONS
 */
var HealthActions = {
  MsgActionHealthCheck: 'HEALTH_CHECK'
};

/**
 * @description CATEGORY ACTIONS
 */
var categoryActions = {
  MsgActionCategoryGetAll: 'CATEGORY_GET_ALL',
  MsgActionCategoryCreate: 'CATEGORY_CREATE',
  MsgActionCategoryGet: 'CATEGORY_GET',
  MsgActionCategoryUpdate: 'CATEGORY_UPDATE',
  MsgActionCategoryDelete: 'CATEGORY_DELETE'
};

/**
 * @description PRODUCT ACTIONS
 */
var productActions = {
  MsgActionProductGetAll: 'PRODUCT_GET_ALL',
  MsgActionProductCreate: 'PRODUCT_CREATE',
  MsgActionProductGet: 'PRODUCT_GET',
  MsgActionProductUpdate: 'PRODUCT_UPDATE',
  MsgActionProductDelete: 'PRODUCT_DELETE'
};

/**
 * @description CUSTOMER ACTIONS
 */
var customerActions = {
  MsgActionCustomerRegister: 'CUSTOMER_REGISTER',
  MsgActionCustomerLogin: 'CUSTOMER_LOGIN',
  MsgActionCustomerGetAll: 'CUSTOMER_GET_ALL',
  MsgActionCustomerCreate: 'CUSTOMER_CREATE',
  MsgActionCustomerGet: 'CUSTOMER_GET',
  MsgActionCustomerUpdate: 'CUSTOMER_UPDATE',
  MsgActionCustomerDelete: 'CUSTOMER_DELETE'
};

/**
 * @description ORGANIZATION ACTIONS
 */
var organizationActions = {
  MsgActionOrganizationGetAll: 'ORGANIZATION_GET_ALL',
  MsgActionOrganizationCreate: 'ORGANIZATION_CREATE',
  MsgActionOrganizationGet: 'ORGANIZATION_GET',
  MsgActionOrganizationUpdate: 'ORGANIZATION_UPDATE',
  MsgActionOrganizationDelete: 'ORGANIZATION_DELETE',
  MsgActionOrganizationGetAllProjectInOrganization: 'ORGANIZATION_GET_ALL_PROJECT_IN_ORGANIZATION',
  MsgActionOrganizationGetAllProjectNotOnOrganization: 'ORGANIZATION_GET_ALL_PROJECT_NOT_ON_ORGANIZATION',
  MsgActionOrganizationAddProjectsToOrganization: 'ORGANIZATION_ADD_PROJECTS_TO_ORGANIZATION',
  MsgActionOrganizationRemoveProjectsToOrganization: 'ORGANIZATION_REMOVE_PROJECTS_TO_ORGANIZATION'
};

/**
 * @description PROJECT ACTIONS
 */
var projectActions = {
  MsgActionProjectGetAll: 'PROJECT_GET_ALL',
  MsgActionProjectCreate: 'PROJECT_CREATE',
  MsgActionProjectGet: 'PROJECT_GET',
  MsgActionProjectUpdate: 'PROJECT_UPDATE',
  MsgActionProjectDelete: 'PROJECT_DELETE',
  MsgActionProjectGetAllTeamInProject: 'PROJECT_GET_ALL_TEAM_IN_PROJECT',
  MsgActionProjectGetAllTeamNotOnProject: 'PROJECT_GET_ALL_TEAM_NOT_ON_PROJECT',
  MsgActionProjectAddTeamsToProject: 'PROJECT_ADD_TEAMS_TO_PROJECT',
  MsgActionProjectRemoveTeamsFromProject: 'PROJECT_REMOVE_TEAMS_FROM_PROJECT'
};

/**
 * @description TEAM ACTIONS
 */
var teamActions = {
  MsgActionTeamGetAll: 'TEAM_GET_ALL',
  MsgActionTeamCreate: 'TEAM_CREATE',
  MsgActionTeamGet: 'TEAM_GET',
  MsgActionTeamUpdate: 'TEAM_UPDATE',
  MsgActionTeamDelete: 'TEAM_DELETE',
  MsgActionTeamGetAllMemberInTeam: 'TEAM_GET_ALL_MEMBER_IN_TEAM',
  MsgActionTeamGetAllMemberNotOnTeam: 'TEAM_GET_ALL_MEMBER_NOT_ON_TEAM',
  MsgActionTeamAddMembersToTeam: 'TEAM_ADD_MEMBERS_TO_TEAM',
  MsgActionTeamRemoveMembersFromTeam: 'TEAM_REMOVE_MEMBERS_FROM_TEAM'
};

/**
 * @description ROLE ACTIONS
 */
var roleActions = {
  MsgActionRoleGetAll: 'ROLE_GET_ALL',
  MsgActionRoleCreate: 'ROLE_CREATE',
  MsgActionRoleGet: 'ROLE_GET',
  MsgActionRoleUpdate: 'ROLE_UPDATE',
  MsgActionRoleDelete: 'ROLE_DELETE',
  MsgActionRoleGetUsers: 'ROLE_GET_USERS',
  MsgActionRoleGetPermissions: 'ROLE_GET_PERMISSIONS'
};

/**
 * @description PERMISSION ACTIONS
 */
var permissionActions = {
  MsgActionPermissionGetAll: 'PERMISSION_GET_ALL',
  MsgActionPermissionCreate: 'PERMISSION_CREATE',
  MsgActionPermissionGet: 'PERMISSION_GET',
  MsgActionPermissionUpdate: 'PERMISSION_UPDATE',
  MsgActionPermissionDelete: 'PERMISSION_DELETE',
  MsgActionPermissionAddRoles: 'PERMISSION_ADD_ROLES'
};

/**
 * @description USER ACTIONS
 */
var userActions = {
  MsgActionUserGetAll: 'USER_GET_ALL',
  MsgActionUserCreate: 'USER_CREATE',
  MsgActionUserGet: 'USER_GET',
  MsgActionUserUpdate: 'USER_UPDATE',
  MsgActionUserDelete: 'USER_DELETE',
  MsgActionUserChangePass: 'USER_CHANGE_PASS',
  MsgActionUserSetPass: 'USER_SET_PASS',
  MsgActionUserResetPass: 'USER_RESET_PASS',
  MsgActionUserAddRoles: 'USER_ADD_ROLES'
};

/**
 * @description USER SESSION ACTIONS
 */
var userSessionActions = {
  MsgActionUserSessionTimeline: 'USER_SESSION_TIME_LINE',
  MsgActionUserSessionGetAll: 'USER_SESSION_GET_ALL',
  MsgActionUserSessionCreate: 'USER_SESSION_CREATE',
  MsgActionUserSessionUpdate: 'USER_SESSION_UPDATE',
  MsgActionUserSessionDelete: 'USER_SESSION_DELETE'
};

/**
 * @description USER ONLINE ACTIONS
 */
var userOnlineActions = {
  MsgActionUserOnlineGetAll: 'USER_ONLINE_GET_ALL'
};

/**
 * @description NOTIFY ACTIONS
 */
var notifyActions = {
  MsgActionNotifyGetAll: 'NOTIFY_GET_ALL',
  MsgActionNotifyGet: 'NOTIFY_GET',
  MsgActionNotifyOfUserGetAll: 'NOTIFY_OF_USER_GET_ALL',
  MsgActionNotifyChangePasswordTemporary: 'NOTIFY_CHANGE_PASSWORD_TEMPORARY'
};

/**
 * @description NOTIFY USER ACTIONS
 */
var notifyUserActions = {
  MsgActionNotifyUserGetAll: 'NOTIFY_USER_GET_ALL',
  MsgActionNotifyUserGetId: 'NOTIFY_USER_GET_ID',
  MsgActionNotifyUserChangePasswordTemporary: 'NOTIFY_USER_CHANGE_PASSWORD_TEMPORARY',
  MsgActionNotifyUserGetAllData: 'NOTIFY_USER_GET_ALL_DATA',
  MsgActionNotifyUserGetAllUnRead: 'NOTIFY_USER_GET_ALL_UNREAD',
  MsgActionNotifyUserRead: 'NOTIFY_USER_READ',
  MsgActionNotifyUserReadAll: 'NOTIFY_USER_READ_ALL',
  MsgActionNotifyUserTrash: 'NOTIFY_USER_TRASH',
  MsgActionNotifyUserTrashAll: 'NOTIFY_USER_TRASH_ALL',
  MsgActionNotifyUserGetAllDataTrash: 'NOTIFY_USER_GET_ALL_DATA_TRASH',
  MsgActionNotifyUserRollBackDataTrash: 'NOTIFY_USER_ROLL_BACK_DATA_TRASH',
  MsgActionNotifyUserRollBackAllDataTrash: 'NOTIFY_USER_ROLL_BACK_ALL_DATA_TRASH'
};

/**
 * @description NOTIFY TEMPLATE ACTIONS
 */
var notifyTemplateActions = {
  MsgActionNotifyTemplateGetAll: 'NOTIFY_TEMPLATE_GET_ALL',
  MsgActionNotifyTemplateCreate: 'NOTIFY_TEMPLATE_CREATE'
};

/**
 * @description NOTIFY TYPES
 */
var notifyTypes = {
  NOTIFY_SYSTEM: 'a49ed2ae-b9ac-4dc3-9f1d-0d5d9387495a',
  NOTIFY_EVENT: '32f8fb40-b3a7-4fc9-beca-1fddde1ee80c',
  NOTIFY_WARNING: 'a153c32a-9413-4071-acb0-a0d5b4dc7e45',
  NOTIFY_IMPORTANT: 'c1026695-d5ff-4503-ac7a-ce45567fa772',
  NOTIFY_REMIND: '5ed78c94-5723-4231-a004-e6ba6a5f5b25',
  NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY: '10e62b29-a4d3-4f77-8f5d-1effa2e18484'
};

/**
 * @description SENDER SYSTEM
 */
var senders = {
  SENDER_SYSTEM: 'SYSTEM'
};
var actions = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, testActions), socketActions), authActions), configActions), homeActions), HealthActions), categoryActions), productActions), customerActions), organizationActions), projectActions), teamActions), roleActions), permissionActions), userActions), userSessionActions), userOnlineActions), notifyActions), notifyUserActions), notifyTemplateActions);
var constants = {
  types: types,
  actions: actions,
  DATE_TIMESTAMP_FORMAT: DATE_TIMESTAMP_FORMAT,
  TIMEZONE_DEFAULT: TIMEZONE_DEFAULT,
  DEFAULT_SYSTEM: DEFAULT_SYSTEM,
  DEFAULT_SKIP: DEFAULT_SKIP,
  DEFAULT_LIMIT: DEFAULT_LIMIT,
  DEFAULT_PASSWORD: DEFAULT_PASSWORD,
  ATTRIBUTE_TOKEN_KEY: ATTRIBUTE_TOKEN_KEY,
  DEFAULT_EXPIRES_TOKEN: DEFAULT_EXPIRES_TOKEN,
  DEFAULT_EXPIRES_REFRESH_TOKEN: DEFAULT_EXPIRES_REFRESH_TOKEN,
  HTTP_STATUS: HTTP_STATUS,
  LOG_LEVELS: LOG_LEVELS,
  APP_NAME: APP_NAME,
  STRUCT_NAME_SERVER: STRUCT_NAME_SERVER,
  STRUCT_NAME_ROUTER: STRUCT_NAME_ROUTER,
  STRUCT_NAME_DATABASE: STRUCT_NAME_DATABASE,
  STRUCT_NAME_ORCHESTRATOR: STRUCT_NAME_ORCHESTRATOR,
  STRUCT_NAME_PUBLISHER: STRUCT_NAME_PUBLISHER,
  STRUCT_MIDDLEWARE: STRUCT_MIDDLEWARE,
  STRUCT_BUILDS: STRUCT_BUILDS,
  STRUCT_CONTROLLERS: STRUCT_CONTROLLERS,
  STRUCT_ORCHESTRATORS: STRUCT_ORCHESTRATORS,
  STRUCT_VALIDATORS: STRUCT_VALIDATORS,
  STRUCT_COMMON: STRUCT_COMMON,
  STRUCT_ADAPTERS: STRUCT_ADAPTERS,
  STRUCT_TRANSFERS: STRUCT_TRANSFERS,
  STRUCT_LAYERS: STRUCT_LAYERS,
  STRUCT_WORKER: STRUCT_WORKER,
  STRUCT_SHARES: STRUCT_SHARES,
  SOCKET_EVENTS: SOCKET_EVENTS,
  AMQP_QUEUES: AMQP_QUEUES,
  CRON_EXPRESSIONS: CRON_EXPRESSIONS,
  notifyTypes: notifyTypes,
  senders: senders
};
var _default = constants;
exports["default"] = _default;