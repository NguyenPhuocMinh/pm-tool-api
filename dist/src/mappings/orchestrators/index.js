'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _constants = _interopRequireDefault(require("../../constants"));
var _testOrchestrator = _interopRequireDefault(require("./test-orchestrator"));
var _socketOrchestrator = _interopRequireDefault(require("./socket-orchestrator"));
var _authOrchestrator = _interopRequireDefault(require("./auth-orchestrator"));
var _configOrchestrator = _interopRequireDefault(require("./config-orchestrator"));
var _homeOrchestrator = _interopRequireDefault(require("./home-orchestrator"));
var _healthOrchestrator = _interopRequireDefault(require("./health-orchestrator"));
var _organizationOrchestrator = _interopRequireDefault(require("./organization-orchestrator"));
var _projectOrchestrator = _interopRequireDefault(require("./project-orchestrator"));
var _teamOrchestrator = _interopRequireDefault(require("./team-orchestrator"));
var _roleOrchestrator = _interopRequireDefault(require("./role-orchestrator"));
var _permissionOrchestrator = _interopRequireDefault(require("./permission-orchestrator"));
var _userOrchestrator = _interopRequireDefault(require("./user-orchestrator"));
var _userSessionOrchestrator = _interopRequireDefault(require("./user-session-orchestrator"));
var _userOnlineOrchestrator = _interopRequireDefault(require("./user-online-orchestrator"));
var _notifyOrchestrator = _interopRequireDefault(require("./notify-orchestrator"));
var _notifyUserOrchestrator = _interopRequireDefault(require("./notify-user-orchestrator"));
var _notifyTemplateOrchestrator = _interopRequireDefault(require("./notify-template-orchestrator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * TEST
 */
var orchestratorTest = [{
  type: _constants["default"].types.MsgTypeTest,
  action: _constants["default"].actions.MsgActionTestSendQueue,
  orchestrator: _testOrchestrator["default"].testSendQueue
}];

/**
 * SOCKET
 */
var orchestratorSocket = [{
  type: _constants["default"].types.MsgTypeSocket,
  action: _constants["default"].actions.MsgActionGetSocket,
  orchestrator: _socketOrchestrator["default"].getSocket
}, {
  type: _constants["default"].types.MsgTypeSocket,
  action: _constants["default"].actions.MsgActionPostSocket,
  orchestrator: _socketOrchestrator["default"].postSocket
}];

/**
 * AUTH
 */
var orchestratorAuth = [{
  type: _constants["default"].types.MsgTypeAuth,
  action: _constants["default"].actions.MsgActionSignIn,
  orchestrator: _authOrchestrator["default"].signIn,
  schema: 'signInSchema'
}, {
  type: _constants["default"].types.MsgTypeAuth,
  action: _constants["default"].actions.MsgActionSignOut,
  orchestrator: _authOrchestrator["default"].signOut
}, {
  type: _constants["default"].types.MsgTypeAuth,
  action: _constants["default"].actions.MsgActionWhoAmI,
  orchestrator: _authOrchestrator["default"].whoami
}, {
  type: _constants["default"].types.MsgTypeAuth,
  action: _constants["default"].actions.MsgActionRefreshToken,
  orchestrator: _authOrchestrator["default"].refreshToken,
  schema: 'refreshTokenSchema'
}, {
  type: _constants["default"].types.MsgTypeAuth,
  action: _constants["default"].actions.MsgActionRevokeToken,
  orchestrator: _authOrchestrator["default"].revokeToken
}];

/**
 * CONFIG
 */
var orchestratorConfig = [{
  type: _constants["default"].types.MsgTypeConfig,
  action: _constants["default"].actions.MsgActionGetDataConfigJson,
  orchestrator: _configOrchestrator["default"].getDataConfigJson
}];

/**
 * HOME
 */
var orchestratorHome = [{
  type: _constants["default"].types.MsgTypeHome,
  action: _constants["default"].actions.MsgActionHomePage,
  orchestrator: _homeOrchestrator["default"].homePage
}];

/**
 * HEALTH CHECK
 */
var orchestratorHealth = [{
  type: _constants["default"].types.MsgTypeHealth,
  action: _constants["default"].actions.MsgActionHealthCheck,
  orchestrator: _healthOrchestrator["default"].healthCheck
}];

/**
 * ORGANIZATION
 */
var orchestratorOrganization = [{
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationGetAll,
  orchestrator: _organizationOrchestrator["default"].getAllOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationCreate,
  orchestrator: _organizationOrchestrator["default"].createOrganization,
  schema: 'organizationSchema'
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationGet,
  orchestrator: _organizationOrchestrator["default"].getOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationUpdate,
  orchestrator: _organizationOrchestrator["default"].updateOrganization,
  schema: 'organizationSchema'
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationDelete,
  orchestrator: _organizationOrchestrator["default"].deleteOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationGetAllProjectInOrganization,
  orchestrator: _organizationOrchestrator["default"].getAllProjectInOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationGetAllProjectNotOnOrganization,
  orchestrator: _organizationOrchestrator["default"].getAllProjectNotOnOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationAddProjectsToOrganization,
  orchestrator: _organizationOrchestrator["default"].addProjectsToOrganization
}, {
  type: _constants["default"].types.MsgTypeOrganization,
  action: _constants["default"].actions.MsgActionOrganizationRemoveProjectsToOrganization,
  orchestrator: _organizationOrchestrator["default"].removeProjectsFromOrganization
}];

/**
 * PROJECT
 */
var orchestratorProject = [{
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectGetAll,
  orchestrator: _projectOrchestrator["default"].getAllProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectCreate,
  orchestrator: _projectOrchestrator["default"].createProject,
  schema: 'projectSchema'
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectGet,
  orchestrator: _projectOrchestrator["default"].getProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectUpdate,
  orchestrator: _projectOrchestrator["default"].updateProject,
  schema: 'projectSchema'
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectDelete,
  orchestrator: _projectOrchestrator["default"].deleteProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectGetAllTeamInProject,
  orchestrator: _projectOrchestrator["default"].getAllTeamInProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectGetAllTeamNotOnProject,
  orchestrator: _projectOrchestrator["default"].getAllTeamNotOnProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectAddTeamsToProject,
  orchestrator: _projectOrchestrator["default"].addTeamsToProject
}, {
  type: _constants["default"].types.MsgTypeProject,
  action: _constants["default"].actions.MsgActionProjectRemoveTeamsFromProject,
  orchestrator: _projectOrchestrator["default"].removeTeamsFromProject
}];

/**
 * TEAM
 */
var orchestratorTeam = [{
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamGetAll,
  orchestrator: _teamOrchestrator["default"].getAllTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamCreate,
  orchestrator: _teamOrchestrator["default"].createTeam,
  schema: 'teamSchema'
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamGet,
  orchestrator: _teamOrchestrator["default"].getTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamUpdate,
  orchestrator: _teamOrchestrator["default"].updateTeam,
  schema: 'teamSchema'
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamDelete,
  orchestrator: _teamOrchestrator["default"].deleteTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamGetAllMemberInTeam,
  orchestrator: _teamOrchestrator["default"].getAllMemberInTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamGetAllMemberNotOnTeam,
  orchestrator: _teamOrchestrator["default"].getAllMemberNotOnTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamAddMembersToTeam,
  orchestrator: _teamOrchestrator["default"].addMembersToTeam
}, {
  type: _constants["default"].types.MsgTypeTeam,
  action: _constants["default"].actions.MsgActionTeamRemoveMembersFromTeam,
  orchestrator: _teamOrchestrator["default"].removeMembersFromTeam
}];

/**
 * ROLE
 */
var orchestratorRole = [{
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleGetAll,
  orchestrator: _roleOrchestrator["default"].getAllRole
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleCreate,
  orchestrator: _roleOrchestrator["default"].createRole,
  schema: 'roleSchema'
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleGet,
  orchestrator: _roleOrchestrator["default"].getRole
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleUpdate,
  orchestrator: _roleOrchestrator["default"].updateRole,
  schema: 'roleSchema'
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleDelete,
  orchestrator: _roleOrchestrator["default"].deleteRole
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleGetUsers,
  orchestrator: _roleOrchestrator["default"].getUsersInRole
}, {
  type: _constants["default"].types.MsgTypeRole,
  action: _constants["default"].actions.MsgActionRoleGetPermissions,
  orchestrator: _roleOrchestrator["default"].getPermissionsInRole
}];

/**
 * PERMISSION
 */
var orchestratorPermission = [{
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionGetAll,
  orchestrator: _permissionOrchestrator["default"].getAllPermission
}, {
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionCreate,
  orchestrator: _permissionOrchestrator["default"].createPermission,
  schema: 'permissionSchema'
}, {
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionGet,
  orchestrator: _permissionOrchestrator["default"].getPermission
}, {
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionUpdate,
  orchestrator: _permissionOrchestrator["default"].updatePermission,
  schema: 'permissionSchema'
}, {
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionDelete,
  orchestrator: _permissionOrchestrator["default"].deletePermission
}, {
  type: _constants["default"].types.MsgTypePermission,
  action: _constants["default"].actions.MsgActionPermissionAddRoles,
  orchestrator: _permissionOrchestrator["default"].addRolesToPermission
}];

/**
 * USER
 */
var orchestratorUser = [{
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserGetAll,
  orchestrator: _userOrchestrator["default"].getAllUser
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserCreate,
  orchestrator: _userOrchestrator["default"].createUser,
  schema: 'userCreateSchema'
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserGet,
  orchestrator: _userOrchestrator["default"].getUser
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserUpdate,
  orchestrator: _userOrchestrator["default"].updateUser,
  schema: 'userEditSchema'
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserDelete,
  orchestrator: _userOrchestrator["default"].deleteUser
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserChangePass,
  orchestrator: _userOrchestrator["default"].changePassUser,
  schema: 'userChangePassSchema'
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserSetPass,
  orchestrator: _userOrchestrator["default"].setPassUser,
  schema: 'userSetPassSchema'
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserResetPass,
  orchestrator: _userOrchestrator["default"].resetPassUser,
  schema: 'userResetPassSchema'
}, {
  type: _constants["default"].types.MsgTypeUser,
  action: _constants["default"].actions.MsgActionUserAddRoles,
  orchestrator: _userOrchestrator["default"].addRolesToUser
}];

/**
 * USER SESSION
 */
var orchestratorUserSession = [{
  type: _constants["default"].types.MsgTypeUserSession,
  action: _constants["default"].actions.MsgActionUserSessionTimeline,
  orchestrator: _userSessionOrchestrator["default"].getUserTimelineSession
}, {
  type: _constants["default"].types.MsgTypeUserSession,
  action: _constants["default"].actions.MsgActionUserSessionCreate,
  orchestrator: _userSessionOrchestrator["default"].createUserSession
}, {
  type: _constants["default"].types.MsgTypeUserSession,
  action: _constants["default"].actions.MsgActionUserSessionUpdate,
  orchestrator: _userSessionOrchestrator["default"].updateUserSession
}, {
  type: _constants["default"].types.MsgTypeUserSession,
  action: _constants["default"].actions.MsgActionUserSessionDelete,
  orchestrator: _userSessionOrchestrator["default"].deleteUserSession
}];

/**
 * USER ONLINE
 */
var orchestratorUserOnline = [{
  type: _constants["default"].types.MsgTypeUserOnline,
  action: _constants["default"].actions.MsgActionUserOnlineGetAll,
  orchestrator: _userOnlineOrchestrator["default"].getAllUserOnline
}];

/**
 * NOTIFY
 */
var orchestratorNotify = [{
  type: _constants["default"].types.MsgTypeNotify,
  action: _constants["default"].actions.MsgActionNotifyGetAll,
  orchestrator: _notifyOrchestrator["default"].getAllNotify
}, {
  type: _constants["default"].types.MsgTypeNotify,
  action: _constants["default"].actions.MsgActionNotifyGet,
  orchestrator: _notifyOrchestrator["default"].getNotifyById
}, {
  type: _constants["default"].types.MsgTypeNotify,
  action: _constants["default"].actions.MsgActionNotifyOfUserGetAll,
  orchestrator: _notifyOrchestrator["default"].getAllNotifyOfUser
}, {
  type: _constants["default"].types.MsgTypeNotify,
  action: _constants["default"].actions.MsgActionNotifyChangePasswordTemporary,
  orchestrator: _notifyOrchestrator["default"].notifyChangePasswordTemporary
}];

/**
 * NOTIFY USER
 */
var orchestratorNotifyUser = [{
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserGetAll,
  orchestrator: _notifyUserOrchestrator["default"].getAllNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserGetId,
  orchestrator: _notifyUserOrchestrator["default"].getDetailNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserChangePasswordTemporary,
  orchestrator: _notifyUserOrchestrator["default"].changePasswordTemporary
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserGetAllData,
  orchestrator: _notifyUserOrchestrator["default"].getAllDataNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserGetAllUnRead,
  orchestrator: _notifyUserOrchestrator["default"].getAllUnReadNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserRead,
  orchestrator: _notifyUserOrchestrator["default"].readNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserReadAll,
  orchestrator: _notifyUserOrchestrator["default"].readAllNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserTrash,
  orchestrator: _notifyUserOrchestrator["default"].trashNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserTrashAll,
  orchestrator: _notifyUserOrchestrator["default"].trashAllNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserGetAllDataTrash,
  orchestrator: _notifyUserOrchestrator["default"].getAllDataTrashNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserRollBackDataTrash,
  orchestrator: _notifyUserOrchestrator["default"].rollBackNotifyUser
}, {
  type: _constants["default"].types.MsgTypeNotifyUser,
  action: _constants["default"].actions.MsgActionNotifyUserRollBackAllDataTrash,
  orchestrator: _notifyUserOrchestrator["default"].rollBackAllNotifyUser
}];

/**
 * NOTIFY TEMPLATE
 */
var orchestratorNotifyTemplate = [{
  type: _constants["default"].types.MsgTypeNotifyTemplate,
  action: _constants["default"].actions.MsgActionNotifyTemplateGetAll,
  orchestrator: _notifyTemplateOrchestrator["default"].getAllNotifyTemplate
}, {
  type: _constants["default"].types.MsgTypeNotifyTemplate,
  action: _constants["default"].actions.MsgActionNotifyTemplateCreate,
  orchestrator: _notifyTemplateOrchestrator["default"].createNotifyTemplate,
  schema: 'notifyTemplateSchema'
}];

/**
 * BASE
 */
var orchestrators = [].concat(orchestratorTest, orchestratorSocket, orchestratorAuth, orchestratorConfig, orchestratorHome, orchestratorHealth, orchestratorOrganization, orchestratorProject, orchestratorTeam, orchestratorRole, orchestratorPermission, orchestratorUser, orchestratorUserSession, orchestratorUserOnline, orchestratorNotify, orchestratorNotifyUser, orchestratorNotifyTemplate);
var _default = orchestrators;
exports["default"] = _default;