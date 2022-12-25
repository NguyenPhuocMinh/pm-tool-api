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
const CONFIG_CONTROLLER = 'config-controller';
const HOME_CONTROLLER = 'home-controller';
const HEALTH_CONTROLLER = 'health-controller';
const ORGANIZATION_CONTROLLER = 'organization-controller';
const PROJECT_CONTROLLER = 'project-controller';
const ROLE_CONTROLLER = 'role-controller';
const PERMISSION_CONTROLLER = 'permission-controller';
const USER_CONTROLLER = 'user-controller';
const USER_SESSION_CONTROLLER = 'user-session-controller';
const USER_ONLINE_CONTROLLER = 'user-online-controller';
const NOTIFY_CONTROLLER = 'notify-controller';
const NOTIFY_USER_CONTROLLER = 'notify-user-controller';
const NOTIFY_TEMPLATE_CONTROLLER = 'notify-template-controller';

const STRUCT_CONTROLLERS = {
  BASE_CONTROLLER,
  AUTH_CONTROLLER,
  CONFIG_CONTROLLER,
  HOME_CONTROLLER,
  HEALTH_CONTROLLER,
  ORGANIZATION_CONTROLLER,
  PROJECT_CONTROLLER,
  ROLE_CONTROLLER,
  PERMISSION_CONTROLLER,
  USER_CONTROLLER,
  USER_SESSION_CONTROLLER,
  USER_ONLINE_CONTROLLER,
  NOTIFY_CONTROLLER,
  NOTIFY_USER_CONTROLLER,
  NOTIFY_TEMPLATE_CONTROLLER
};

/**
 * @description ORCHESTRATORS
 */
const BASE_ORCHESTRATOR = 'base-orchestrator';
const AUTH_ORCHESTRATOR = 'auth-orchestrator';
const CONFIG_ORCHESTRATOR = 'config-orchestrator';
const HOME_ORCHESTRATOR = 'home-orchestrator';
const HEALTH_ORCHESTRATOR = 'health-orchestrator';
const ORGANIZATION_ORCHESTRATOR = 'organization-orchestrator';
const PROJECT_ORCHESTRATOR = 'project-orchestrator';
const ROLE_ORCHESTRATOR = 'role-orchestrator';
const PERMISSION_ORCHESTRATOR = 'permission-orchestrator';
const USER_ORCHESTRATOR = 'user-orchestrator';
const USER_SESSION_ORCHESTRATOR = 'user-session-orchestrator';
const USER_ONLINE_ORCHESTRATOR = 'user-online-orchestrator';
const NOTIFY_ORCHESTRATOR = 'notify-orchestrator';
const NOTIFY_USER_ORCHESTRATOR = 'notify-user-orchestrator';
const NOTIFY_TEMPLATE_ORCHESTRATOR = 'notify-template-orchestrator';

const STRUCT_ORCHESTRATORS = {
  BASE_ORCHESTRATOR,
  AUTH_ORCHESTRATOR,
  CONFIG_ORCHESTRATOR,
  HOME_ORCHESTRATOR,
  HEALTH_ORCHESTRATOR,
  ORGANIZATION_ORCHESTRATOR,
  PROJECT_ORCHESTRATOR,
  ROLE_ORCHESTRATOR,
  PERMISSION_ORCHESTRATOR,
  USER_ORCHESTRATOR,
  USER_SESSION_ORCHESTRATOR,
  USER_ONLINE_ORCHESTRATOR,
  NOTIFY_ORCHESTRATOR,
  NOTIFY_USER_ORCHESTRATOR,
  NOTIFY_TEMPLATE_ORCHESTRATOR
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
const ORGANIZATION_VALIDATOR = 'organization-validator';
const PROJECT_VALIDATOR = 'project-validator';
const ROLE_VALIDATOR = 'role-validator';
const PERMISSION_VALIDATOR = 'permission-validator';
const USER_VALIDATOR = 'user-validator';

const STRUCT_VALIDATORS = {
  AUTH_VALIDATOR,
  ORGANIZATION_VALIDATOR,
  PROJECT_VALIDATOR,
  ROLE_VALIDATOR,
  PERMISSION_VALIDATOR,
  USER_VALIDATOR
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
const USER_SESSION_TRANSFER = 'user-session-transfer';
const USER_ONLINE_TRANSFER = 'user--online-transfer';
const NOTIFY_TRANSFER = 'notify-transfer';
const NOTIFY_USER_TRANSFER = 'notify-user-transfer';
const NOTIFY_TEMPLATE_TRANSFER = 'notify-template-transfer';

const STRUCT_TRANSFERS = {
  AUTH_TRANSFER,
  ORGANIZATION_TRANSFER,
  PROJECT_TRANSFER,
  ROLE_TRANSFER,
  PERMISSION_TRANSFER,
  USER_TRANSFER,
  USER_SESSION_TRANSFER,
  USER_ONLINE_TRANSFER,
  NOTIFY_TRANSFER,
  NOTIFY_USER_TRANSFER,
  NOTIFY_TEMPLATE_TRANSFER
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
  MsgTypeConfig: 'CONFIG',
  MsgTypeHome: 'HOME',
  MsgTypeHealth: 'HEALTH',
  MsgTypeOrganization: 'ORGANIZATION',
  MsgTypeProject: 'PROJECT',
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
 * @description CONFIG ACTIONS
 */
const configActions = {
  MsgActionGetDataConfigJson: 'DATA_CONFIG_JSON'
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
  MsgActionRoleGetPermissions: 'ROLE_GET_PERMISSIONS'
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
  MsgActionUserSetPass: 'USER_SET_PASS',
  MsgActionUserResetPass: 'USER_RESET_PASS',
  MsgActionUserAddRoles: 'USER_ADD_ROLES'
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

/**
 * @description USER ONLINE ACTIONS
 */
const userOnlineActions = {
  MsgActionUserOnlineGetAll: 'USER_ONLINE_GET_ALL'
};

/**
 * @description NOTIFY ACTIONS
 */
const notifyActions = {
  MsgActionNotifyGetAll: 'NOTIFY_GET_ALL',
  MsgActionNotifyGet: 'NOTIFY_GET',
  MsgActionNotifyOfUserGetAll: 'NOTIFY_OF_USER_GET_ALL',
  MsgActionNotifyChangePasswordTemporary: 'NOTIFY_CHANGE_PASSWORD_TEMPORARY',
  MsgActionNotifyUpdateRead: 'NOTIFY_UPDATE_READ'
};

/**
 * @description NOTIFY USER ACTIONS
 */
const notifyUserActions = {
  MsgActionNotifyUserGetAll: 'NOTIFY_USER_GET_ALL',
  MsgActionNotifyUserGetId: 'NOTIFY_USER_GET_ID',
  MsgActionNotifyUserGetAllData: 'NOTIFY_USER_GET_ALL_DATA',
  MsgActionNotifyUserGetAllUnRead: 'NOTIFY_USER_GET_ALL_UNREAD'
};

/**
 * @description NOTIFY TEMPLATE ACTIONS
 */
const notifyTemplateActions = {
  MsgActionNotifyTemplateGetAll: 'NOTIFY_TEMPLATE_GET_ALL',
  MsgActionNotifyTemplateCreate: 'NOTIFY_TEMPLATE_CREATE'
};

/**
 * @description NOTIFY TYPES
 */
const notifyTypes = {
  NOTIFY_SYSTEM: 'a49ed2ae-b9ac-4dc3-9f1d-0d5d9387495a',
  NOTIFY_EVENT: '32f8fb40-b3a7-4fc9-beca-1fddde1ee80c',
  NOTIFY_WARNING: 'a153c32a-9413-4071-acb0-a0d5b4dc7e45',
  NOTIFY_IMPORTANT: 'c1026695-d5ff-4503-ac7a-ce45567fa772',
  NOTIFY_REMIND: '5ed78c94-5723-4231-a004-e6ba6a5f5b25',
  NOTIFY_REMIND_CHANGE_PASSWORD_TEMPORARY:
    '10e62b29-a4d3-4f77-8f5d-1effa2e18484'
};

/**
 * @description SENDER SYSTEM
 */
const senders = {
  SENDER_SYSTEM: 'SYSTEM'
};

const actions = {
  ...authActions,
  ...configActions,
  ...homeActions,
  ...HealthActions,
  ...organizationActions,
  ...projectActions,
  ...roleActions,
  ...permissionActions,
  ...userActions,
  ...userSessionActions,
  ...userOnlineActions,
  ...notifyActions,
  ...notifyUserActions,
  ...notifyTemplateActions
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
  SOCKET_EVENTS,
  notifyTypes,
  senders
};

export default constants;
