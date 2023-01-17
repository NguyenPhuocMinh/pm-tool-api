'use strict';

const APP_NAME = 'pm-tool-api';

const STRUCT_NAME_SERVER = 'server';
const STRUCT_NAME_ROUTER = 'router';
const STRUCT_NAME_DATABASE = 'database';
const STRUCT_NAME_ORCHESTRATOR = 'orchestrator';
const STRUCT_NAME_PUBLISHER = 'publisher';

/**
 * @description MIDDLEWARE
 */
const LOG_MIDDLEWARE = 'log-middleware';
const AUTH_MIDDLEWARE = 'auth-middleware';
const ROUTER_MIDDLEWARE = 'router-middleware';
const ERROR_MIDDLEWARE = 'error-middleware';
const SOCKET_MIDDLEWARE = 'socket-middleware';

const STRUCT_MIDDLEWARE = {
  LOG_MIDDLEWARE,
  AUTH_MIDDLEWARE,
  ROUTER_MIDDLEWARE,
  ERROR_MIDDLEWARE,
  SOCKET_MIDDLEWARE
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
const TEST_CONTROLLER = 'test-controller';
const SOCKET_CONTROLLER = 'socket-controller';
const AUTH_CONTROLLER = 'auth-controller';
const CONFIG_CONTROLLER = 'config-controller';
const HOME_CONTROLLER = 'home-controller';
const HEALTH_CONTROLLER = 'health-controller';
const ORGANIZATION_CONTROLLER = 'organization-controller';
const PROJECT_CONTROLLER = 'project-controller';
const TEAM_CONTROLLER = 'team-controller';
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
  TEST_CONTROLLER,
  SOCKET_CONTROLLER,
  AUTH_CONTROLLER,
  CONFIG_CONTROLLER,
  HOME_CONTROLLER,
  HEALTH_CONTROLLER,
  ORGANIZATION_CONTROLLER,
  PROJECT_CONTROLLER,
  TEAM_CONTROLLER,
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
const TEST_ORCHESTRATOR = 'test-orchestrator';
const SOCKET_ORCHESTRATOR = 'socket-orchestrator';
const AUTH_ORCHESTRATOR = 'auth-orchestrator';
const CONFIG_ORCHESTRATOR = 'config-orchestrator';
const HOME_ORCHESTRATOR = 'home-orchestrator';
const HEALTH_ORCHESTRATOR = 'health-orchestrator';
const ORGANIZATION_ORCHESTRATOR = 'organization-orchestrator';
const PROJECT_ORCHESTRATOR = 'project-orchestrator';
const TEAM_ORCHESTRATOR = 'team-orchestrator';
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
  TEST_ORCHESTRATOR,
  SOCKET_ORCHESTRATOR,
  AUTH_ORCHESTRATOR,
  CONFIG_ORCHESTRATOR,
  HOME_ORCHESTRATOR,
  HEALTH_ORCHESTRATOR,
  ORGANIZATION_ORCHESTRATOR,
  PROJECT_ORCHESTRATOR,
  TEAM_ORCHESTRATOR,
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
 * @description VALIDATORS
 */
const AUTH_VALIDATOR = 'auth-validator';
const ORGANIZATION_VALIDATOR = 'organization-validator';
const PROJECT_VALIDATOR = 'project-validator';
const TEAM_VALIDATOR = 'team-validator';
const ROLE_VALIDATOR = 'role-validator';
const PERMISSION_VALIDATOR = 'permission-validator';
const USER_VALIDATOR = 'user-validator';

const STRUCT_VALIDATORS = {
  AUTH_VALIDATOR,
  ORGANIZATION_VALIDATOR,
  PROJECT_VALIDATOR,
  TEAM_VALIDATOR,
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
const TEAM_TRANSFER = 'team-transfer';
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
  TEAM_TRANSFER,
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
const CRON_ADAPTER = 'cron-adapter';
const AMQP_ADAPTER = 'amqp-adapter';

const STRUCT_ADAPTERS = {
  REDIS_ADAPTER,
  SOCKET_ADAPTER,
  CRON_ADAPTER,
  AMQP_ADAPTER
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
const CRON_WORKER = 'cron-worker';

const STRUCT_WORKER = {
  SOCKET_WORKER,
  CRON_WORKER
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

/**
 * @description QUEUE
 */
const AMQP_QUEUES = {
  TEST_QUEUE: 'TEST_QUEUE',
  SEND_NOTIFY_CHANGE_PASSWORD_QUEUE: 'SEND_NOTIFY_CHANGE_PASSWORD_QUEUE'
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

const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  HTTP: 'http',
  VERBOSE: 'verbose',
  DEBUG: 'debug',
  SILLY: 'silly',
  DATA: 'data'
};

const CRON_EXPRESSIONS = {
  MINUTES: {
    TEN: '*/10 * * * *', // At every 30 minutes
    THIRTY: '*/30 * * * *' // At every 30 minutes
  },
  HOURS: {
    ONE: '* 00 1 * * *' // At every 1 hour
  }
};

/**
 * @description TYPES
 */
const types = {
  MsgTypeTest: 'TEST',
  MsgTypeSocket: 'SOCKET',
  MsgTypeAuth: 'AUTH',
  MsgTypeConfig: 'CONFIG',
  MsgTypeHome: 'HOME',
  MsgTypeHealth: 'HEALTH',
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
const testActions = {
  MsgActionTestSendQueue: 'TEST_SEND_QUEUE'
};

/**
 * @description SOCKET ACTIONS
 */
const socketActions = {
  MsgActionGetSocket: 'GET_SOCKET',
  MsgActionPostSocket: 'POST_SOCKET'
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
  MsgActionOrganizationDelete: 'ORGANIZATION_DELETE',
  MsgActionOrganizationGetProjects: 'ORGANIZATION_GET_PROJECT'
};

/**
 * @description PROJECT ACTIONS
 */
const projectActions = {
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
const teamActions = {
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
  MsgActionNotifyChangePasswordTemporary: 'NOTIFY_CHANGE_PASSWORD_TEMPORARY'
};

/**
 * @description NOTIFY USER ACTIONS
 */
const notifyUserActions = {
  MsgActionNotifyUserGetAll: 'NOTIFY_USER_GET_ALL',
  MsgActionNotifyUserGetId: 'NOTIFY_USER_GET_ID',
  MsgActionNotifyUserChangePasswordTemporary:
    'NOTIFY_USER_CHANGE_PASSWORD_TEMPORARY',
  MsgActionNotifyUserGetAllData: 'NOTIFY_USER_GET_ALL_DATA',
  MsgActionNotifyUserGetAllUnRead: 'NOTIFY_USER_GET_ALL_UNREAD',
  MsgActionNotifyUserRead: 'NOTIFY_USER_READ',
  MsgActionNotifyUserReadAll: 'NOTIFY_USER_READ_ALL',
  MsgActionNotifyUserTrash: 'NOTIFY_USER_TRASH',
  MsgActionNotifyUserTrashAll: 'NOTIFY_USER_TRASH_ALL',
  MsgActionNotifyUserGetAllDataTrash: 'NOTIFY_USER_GET_ALL_DATA_TRASH',
  MsgActionNotifyUserRollBackDataTrash: 'NOTIFY_USER_ROLL_BACK_DATA_TRASH',
  MsgActionNotifyUserRollBackAllDataTrash:
    'NOTIFY_USER_ROLL_BACK_ALL_DATA_TRASH'
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
  ...testActions,
  ...socketActions,
  ...authActions,
  ...configActions,
  ...homeActions,
  ...HealthActions,
  ...organizationActions,
  ...projectActions,
  ...teamActions,
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
  LOG_LEVELS,
  APP_NAME,
  STRUCT_NAME_SERVER,
  STRUCT_NAME_ROUTER,
  STRUCT_NAME_DATABASE,
  STRUCT_NAME_ORCHESTRATOR,
  STRUCT_NAME_PUBLISHER,
  STRUCT_MIDDLEWARE,
  STRUCT_BUILDS,
  STRUCT_CONTROLLERS,
  STRUCT_ORCHESTRATORS,
  STRUCT_VALIDATORS,
  STRUCT_COMMON,
  STRUCT_ADAPTERS,
  STRUCT_TRANSFERS,
  STRUCT_LAYERS,
  STRUCT_WORKER,
  STRUCT_SHARES,
  SOCKET_EVENTS,
  AMQP_QUEUES,
  CRON_EXPRESSIONS,
  notifyTypes,
  senders
};

export default constants;
