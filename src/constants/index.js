'use strict';

const APP_NAME = 'pm-tool-api';

const STRUCT_NAME_SERVER = 'server';
const STRUCT_NAME_ROUTER = 'router';
const STRUCT_NAME_DATABASE = 'database';
const STRUCT_NAME_ORCHESTRATOR = 'orchestrator';

/**
 * @description MIDDLEWARE
 */
const LOG_MIDDLEWARE = 'log-middleware';
const AUTH_MIDDLEWARE = 'auth-middleware';
const ROUTER_MIDDLEWARE = 'router-middleware';
const ERROR_MIDDLEWARE = 'error-middleware';

const STRUCT_MIDDLEWARE = {
  LOG_MIDDLEWARE,
  AUTH_MIDDLEWARE,
  ROUTER_MIDDLEWARE,
  ERROR_MIDDLEWARE
};

/**
 * @description BUILD
 */
const TEMPLATE_BUILD = 'template-build';
const RESPONSE_BUILD = 'response-build';
const LOOKUP_BUILD = 'lookup-build';

const STRUCT_BUILDS = {
  TEMPLATE_BUILD,
  RESPONSE_BUILD,
  LOOKUP_BUILD
};

/**
 * @description CONTROLLERS
 */
const BASE_CONTROLLER = 'base-controller';
const AUTH_CONTROLLER = 'auth-controller';
const HOME_CONTROLLER = 'home-controller';
const HEALTH_CONTROLLER = 'health-controller';
const ORGANIZATION_CONTROLLER = 'organization-controller';
const PROJECT_CONTROLLER = 'project-controller';
const ROLE_CONTROLLER = 'role-controller';
const PERMISSION_CONTROLLER = 'permission-controller';
const USER_CONTROLLER = 'user-controller';
const USER_SESSION_CONTROLLER = 'user-session-controller';

const STRUCT_CONTROLLERS = {
  BASE_CONTROLLER,
  AUTH_CONTROLLER,
  HOME_CONTROLLER,
  HEALTH_CONTROLLER,
  ORGANIZATION_CONTROLLER,
  PROJECT_CONTROLLER,
  ROLE_CONTROLLER,
  PERMISSION_CONTROLLER,
  USER_CONTROLLER,
  USER_SESSION_CONTROLLER
};

/**
 * @description ORCHESTRATORS
 */
const BASE_ORCHESTRATOR = 'base-orchestrator';
const AUTH_ORCHESTRATOR = 'auth-orchestrator';
const HOME_ORCHESTRATOR = 'home-orchestrator';
const HEALTH_ORCHESTRATOR = 'health-orchestrator';
const ORGANIZATION_ORCHESTRATOR = 'organization-orchestrator';
const PROJECT_ORCHESTRATOR = 'project-orchestrator';
const ROLE_ORCHESTRATOR = 'role-orchestrator';
const PERMISSION_ORCHESTRATOR = 'permission-orchestrator';
const USER_ORCHESTRATOR = 'user-orchestrator';
const USER_SESSION_ORCHESTRATOR = 'user-session-orchestrator';

const STRUCT_ORCHESTRATORS = {
  BASE_ORCHESTRATOR,
  AUTH_ORCHESTRATOR,
  HOME_ORCHESTRATOR,
  HEALTH_ORCHESTRATOR,
  ORGANIZATION_ORCHESTRATOR,
  PROJECT_ORCHESTRATOR,
  ROLE_ORCHESTRATOR,
  PERMISSION_ORCHESTRATOR,
  USER_ORCHESTRATOR,
  USER_SESSION_ORCHESTRATOR
};

/**
 * @description SERVICES
 */

const REDIS_SERVICE = 'redis-service';

const STRUCT_SERVICES = {
  REDIS_SERVICE
};

/**
 * @description VALIDATORS
 */
const AUTH_VALIDATOR = 'auth-validator';

const STRUCT_VALIDATORS = {
  AUTH_VALIDATOR
};

/**
 * @description TRANSFERS
 */
const AUTH_TRANSFER = 'auth-transfer';
const ORGANIZATION_TRANSFER = 'organization-transfer';
const PROJECT_TRANSFER = 'project-transfer';
const ROLE_TRANSFER = 'role-transfer';
const PERMISSION_TRANSFER = 'permission-transfer';
const USER_TRANSFER = 'user-transfer';
const USER_SESSION_TRANSFER = 'user-transfer';

const STRUCT_TRANSFERS = {
  AUTH_TRANSFER,
  ORGANIZATION_TRANSFER,
  PROJECT_TRANSFER,
  ROLE_TRANSFER,
  PERMISSION_TRANSFER,
  USER_TRANSFER,
  USER_SESSION_TRANSFER
};

/**
 * @description COMMONS
 */
const ERROR_COMMON = 'error-common';
const MAPPER_COMMON = 'mapper-common';

const STRUCT_COMMON = {
  ERROR_COMMON,
  MAPPER_COMMON
};

/**
 * @description ADAPTERS
 */
const REDIS_ADAPTER = 'redis-adapter';
const SOCKET_ADAPTER = 'socket-adapter';

const STRUCT_ADAPTERS = {
  REDIS_ADAPTER,
  SOCKET_ADAPTER
};

/**
 * @description LAYERS
 */
const REPOSITORY_LAYER = 'repository-layer';

const STRUCT_LAYERS = {
  REPOSITORY_LAYER
};

/**
 * @description WORKERS
 */
const SOCKET_WORKER = 'socket-worker';

const STRUCT_WORKER = {
  SOCKET_WORKER
};

/**
 * @description SHARES
 */
const VALIDATOR_SCHEMA = 'validator-schema';

const STRUCT_SHARES = {
  VALIDATOR_SCHEMA
};

/**
 * @description SOCKET EVENTS
 */
const SOCKET_EVENTS = {
  SOCKET_ROOM: 'pm-tool-room',
  SOCKET_USER_LOGIN: 'socket_user_login',
  SOCKET_USER_LOGOUT: 'socket_user_logout',
  SOCKET_USER_ONLINE: 'socket_user_online'
};

const DATE_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const TIMEZONE_DEFAULT = 'Asia/Ho_Chi_Minh';
const DEFAULT_SYSTEM = 'SYSTEM';
const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 1000;
const DEFAULT_PASSWORD = 'KeepS3cr3t!';
const ATTRIBUTE_TOKEN_KEY = 'Authorization';
const DEFAULT_EXPIRES_TOKEN = 900; // => 15 minutes
const DEFAULT_EXPIRES_REFRESH_TOKEN = '1d';

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
  MsgTypeAuth: 'AUTH',
  MsgTypeHome: 'HOME',
  MsgTypeHealth: 'HEALTH',
  MsgTypeOrganization: 'ORGANIZATION',
  MsgTypeProject: 'PROJECT',
  MsgTypeRole: 'ROLE',
  MsgTypePermission: 'PERMISSION',
  MsgTypeUser: 'USER',
  MsgTypeUserSession: 'USER_SESSION'
};

/**
 * @description AUTH ACTIONS
 */
const authActions = {
  MsgActionSignIn: 'AUTH_SIGN_IN',
  MsgActionSignOut: 'AUTH_SIGN_OUT',
  MsgActionWhoAmI: 'AUTH_WHOAMI',
  MsgActionRefreshToken: 'AUTH_REFRESH_TOKEN',
  MsgActionRevokeToken: 'AUTH_REVOKE_TOKEN'
};

/**
 * @description HOME ACTIONS
 */
const homeActions = {
  MsgActionHomePage: 'HOME_PAGE',
  MsgActionHealthCheck: 'HEALTH_CHECK'
};

/**
 * @description HEALTH ACTIONS
 */
const HealthActions = {
  MsgActionHealthCheck: 'HEALTH_CHECK'
};

/**
 * @description ORGANIZATION ACTIONS
 */
const organizationActions = {
  MsgActionOrganizationGetAll: 'ORGANIZATION_GET_ALL',
  MsgActionOrganizationCreate: 'ORGANIZATION_CREATE',
  MsgActionOrganizationGet: 'ORGANIZATION_GET',
  MsgActionOrganizationUpdate: 'ORGANIZATION_UPDATE',
  MsgActionOrganizationDelete: 'ORGANIZATION_DELETE'
};

/**
 * @description PROJECT ACTIONS
 */
const projectActions = {
  MsgActionProjectGetAll: 'PROJECT_GET_ALL',
  MsgActionProjectCreate: 'PROJECT_CREATE'
};

/**
 * @description ROLE ACTIONS
 */
const roleActions = {
  MsgActionRoleGetAll: 'ROLE_GET_ALL',
  MsgActionRoleCreate: 'ROLE_CREATE',
  MsgActionRoleGet: 'ROLE_GET',
  MsgActionRoleUpdate: 'ROLE_UPDATE',
  MsgActionRoleDelete: 'ROLE_DELETE',
  MsgActionRoleGetUsers: 'ROLE_GET_USERS',
  MsgActionRoleGetPermissions: 'ROLE_GET_PERMISSIONS',
  MsgActionRoleAddPermissions: 'ROLE_ADD_PERMISSIONS'
};

/**
 * @description PERMISSION ACTIONS
 */
const permissionActions = {
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
const userActions = {
  MsgActionUserGetAll: 'USER_GET_ALL',
  MsgActionUserCreate: 'USER_CREATE',
  MsgActionUserGet: 'USER_GET',
  MsgActionUserUpdate: 'USER_UPDATE',
  MsgActionUserDelete: 'USER_DELETE',
  MsgActionUserChangePass: 'USER_CHANGE_PASS',
  MsgActionUserAddRoles: 'USER_ADD_ROLES',
  MsgActionUserSetPass: 'USER_SET_PASS',
  MsgActionUserResetPass: 'USER_RESET_PASS'
};

/**
 * @description USER SESSION ACTIONS
 */
const userSessionActions = {
  MsgActionUserSessionTimeline: 'USER_SESSION_TIME_LINE',
  MsgActionUserSessionGetAll: 'USER_SESSION_GET_ALL',
  MsgActionUserSessionCreate: 'USER_SESSION_CREATE',
  MsgActionUserSessionUpdate: 'USER_SESSION_UPDATE',
  MsgActionUserSessionDelete: 'USER_SESSION_DELETE'
};

const actions = {
  ...authActions,
  ...homeActions,
  ...HealthActions,
  ...organizationActions,
  ...projectActions,
  ...roleActions,
  ...permissionActions,
  ...userActions,
  ...userSessionActions
};

const constants = {
  types,
  actions,
  DATE_TIMESTAMP_FORMAT,
  TIMEZONE_DEFAULT,
  DEFAULT_SYSTEM,
  DEFAULT_SKIP,
  DEFAULT_LIMIT,
  DEFAULT_PASSWORD,
  ATTRIBUTE_TOKEN_KEY,
  DEFAULT_EXPIRES_TOKEN,
  DEFAULT_EXPIRES_REFRESH_TOKEN,
  HTTP_STATUS,
  APP_NAME,
  STRUCT_NAME_SERVER,
  STRUCT_NAME_ROUTER,
  STRUCT_NAME_DATABASE,
  STRUCT_NAME_ORCHESTRATOR,
  STRUCT_MIDDLEWARE,
  STRUCT_BUILDS,
  STRUCT_CONTROLLERS,
  STRUCT_ORCHESTRATORS,
  STRUCT_SERVICES,
  STRUCT_VALIDATORS,
  STRUCT_COMMON,
  STRUCT_ADAPTERS,
  STRUCT_TRANSFERS,
  STRUCT_LAYERS,
  STRUCT_WORKER,
  STRUCT_SHARES,
  SOCKET_EVENTS
};

export default constants;
