'use strict';

import constants from '@constants';

import authOrchestrator from './auth-orchestrator';
import configOrchestrator from './config-orchestrator';
import homeOrchestrator from './home-orchestrator';
import healthOrchestrator from './health-orchestrator';
import organizationOrchestrator from './organization-orchestrator';
import projectOrchestrator from './project-orchestrator';
import roleOrchestrator from './role-orchestrator';
import permissionOrchestrator from './permission-orchestrator';
import userOrchestrator from './user-orchestrator';
import userSessionOrchestrator from './user-session-orchestrator';
import notifyOrchestrator from './notify-orchestrator';
import notifyUserOrchestrator from './notify-user-orchestrator';
import notifyTemplateOrchestrator from './notify-template-orchestrator';

/**
 * AUTH
 */
const orchestratorAuth = [
  {
    type: constants.types.MsgTypeAuth,
    action: constants.actions.MsgActionSignIn,
    orchestrator: authOrchestrator.signIn,
    schema: 'signInSchema'
  },
  {
    type: constants.types.MsgTypeAuth,
    action: constants.actions.MsgActionSignOut,
    orchestrator: authOrchestrator.signOut
  },
  {
    type: constants.types.MsgTypeAuth,
    action: constants.actions.MsgActionWhoAmI,
    orchestrator: authOrchestrator.whoami
  },
  {
    type: constants.types.MsgTypeAuth,
    action: constants.actions.MsgActionRefreshToken,
    orchestrator: authOrchestrator.refreshToken,
    schema: 'refreshTokenSchema'
  },
  {
    type: constants.types.MsgTypeAuth,
    action: constants.actions.MsgActionRevokeToken,
    orchestrator: authOrchestrator.revokeToken
  }
];

/**
 * CONFIG
 */
const orchestratorConfig = [
  {
    type: constants.types.MsgTypeConfig,
    action: constants.actions.MsgActionGetDataConfigJson,
    orchestrator: configOrchestrator.getDataConfigJson
  }
];

/**
 * HOME
 */
const orchestratorHome = [
  {
    type: constants.types.MsgTypeHome,
    action: constants.actions.MsgActionHomePage,
    orchestrator: homeOrchestrator.homePage
  }
];

/**
 * HEALTH CHECK
 */
const orchestratorHealth = [
  {
    type: constants.types.MsgTypeHealth,
    action: constants.actions.MsgActionHealthCheck,
    orchestrator: healthOrchestrator.healthCheck
  }
];

/**
 * ORGANIZATION
 */
const orchestratorOrganization = [
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationGetAll,
    orchestrator: organizationOrchestrator.getAllOrganization
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationCreate,
    orchestrator: organizationOrchestrator.createOrganization,
    schema: 'organizationSchema'
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationGet,
    orchestrator: organizationOrchestrator.getOrganization
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationUpdate,
    orchestrator: organizationOrchestrator.updateOrganization,
    schema: 'organizationSchema'
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationDelete,
    orchestrator: organizationOrchestrator.deleteOrganization
  }
];

/**
 * PROJECT
 */
const orchestratorProject = [
  {
    type: constants.types.MsgTypeProject,
    action: constants.actions.MsgActionProjectGetAll,
    orchestrator: projectOrchestrator.getAllProject
  },
  {
    type: constants.types.MsgTypeProject,
    action: constants.actions.MsgActionProjectCreate,
    orchestrator: projectOrchestrator.createProject,
    schema: 'projectSchema'
  }
];

/**
 * ROLE
 */
const orchestratorRole = [
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetAll,
    orchestrator: roleOrchestrator.getAllRole
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleCreate,
    orchestrator: roleOrchestrator.createRole,
    schema: 'roleSchema'
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGet,
    orchestrator: roleOrchestrator.getRole
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleUpdate,
    orchestrator: roleOrchestrator.updateRole,
    schema: 'roleSchema'
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleDelete,
    orchestrator: roleOrchestrator.deleteRole
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetUsers,
    orchestrator: roleOrchestrator.getUsersInRole
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetPermissions,
    orchestrator: roleOrchestrator.getPermissionsInRole
  }
];

/**
 * PERMISSION
 */
const orchestratorPermission = [
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionGetAll,
    orchestrator: permissionOrchestrator.getAllPermission
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionCreate,
    orchestrator: permissionOrchestrator.createPermission,
    schema: 'permissionSchema'
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionGet,
    orchestrator: permissionOrchestrator.getPermission
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionUpdate,
    orchestrator: permissionOrchestrator.updatePermission,
    schema: 'permissionSchema'
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionDelete,
    orchestrator: permissionOrchestrator.deletePermission
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionAddRoles,
    orchestrator: permissionOrchestrator.addRolesToPermission
  }
];

/**
 * USER
 */
const orchestratorUser = [
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserGetAll,
    orchestrator: userOrchestrator.getAllUser
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserCreate,
    orchestrator: userOrchestrator.createUser,
    schema: 'userCreateSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserGet,
    orchestrator: userOrchestrator.getUser
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserUpdate,
    orchestrator: userOrchestrator.updateUser,
    schema: 'userEditSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserDelete,
    orchestrator: userOrchestrator.deleteUser
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserChangePass,
    orchestrator: userOrchestrator.changePassUser,
    schema: 'userChangePassSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserSetPass,
    orchestrator: userOrchestrator.setPassUser,
    schema: 'userSetPassSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserResetPass,
    orchestrator: userOrchestrator.resetPassUser,
    schema: 'userResetPassSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserAddRoles,
    orchestrator: userOrchestrator.addRolesToUser
  }
];

/**
 * USER SESSION
 */
const orchestratorUserSession = [
  {
    type: constants.types.MsgTypeUserSession,
    action: constants.actions.MsgActionUserSessionTimeline,
    orchestrator: userSessionOrchestrator.getUserTimelineSession
  },
  {
    type: constants.types.MsgTypeUserSession,
    action: constants.actions.MsgActionUserSessionCreate,
    orchestrator: userSessionOrchestrator.createUserSession
  },
  {
    type: constants.types.MsgTypeUserSession,
    action: constants.actions.MsgActionUserSessionUpdate,
    orchestrator: userSessionOrchestrator.updateUserSession
  },
  {
    type: constants.types.MsgTypeUserSession,
    action: constants.actions.MsgActionUserSessionDelete,
    orchestrator: userSessionOrchestrator.deleteUserSession
  }
];

/**
 * NOTIFY
 */
const orchestratorNotify = [
  {
    type: constants.types.MsgTypeNotify,
    action: constants.actions.MsgActionNotifyGetAll,
    orchestrator: notifyOrchestrator.getAllNotify
  },
  {
    type: constants.types.MsgTypeNotify,
    action: constants.actions.MsgActionNotifyGet,
    orchestrator: notifyOrchestrator.getNotifyById
  },
  {
    type: constants.types.MsgTypeNotify,
    action: constants.actions.MsgActionNotifyOfUserGetAll,
    orchestrator: notifyOrchestrator.getAllNotifyOfUser
  },
  {
    type: constants.types.MsgTypeNotify,
    action: constants.actions.MsgActionNotifyChangePasswordTemporary,
    orchestrator: notifyOrchestrator.notifyChangePasswordTemporary
  },
  {
    type: constants.types.MsgTypeNotify,
    action: constants.actions.MsgActionNotifyUpdateRead,
    orchestrator: notifyOrchestrator.notifyUpdateRead
  }
];

/**
 * NOTIFY USER
 */
const orchestratorNotifyUser = [
  {
    type: constants.types.MsgTypeNotifyUser,
    action: constants.actions.MsgActionNotifyUserGetAll,
    orchestrator: notifyUserOrchestrator.getAllNotifyUser
  },
  {
    type: constants.types.MsgTypeNotifyUser,
    action: constants.actions.MsgActionNotifyUserGetId,
    orchestrator: notifyUserOrchestrator.getDetailNotifyUser
  },
  {
    type: constants.types.MsgTypeNotifyUser,
    action: constants.actions.MsgActionNotifyUserGetAllData,
    orchestrator: notifyUserOrchestrator.getAllDataNotifyUser
  },
  {
    type: constants.types.MsgTypeNotifyUser,
    action: constants.actions.MsgActionNotifyUserGetAllUnRead,
    orchestrator: notifyUserOrchestrator.getAllUnReadNotifyUser
  }
];

/**
 * NOTIFY TEMPLATE
 */
const orchestratorNotifyTemplate = [
  {
    type: constants.types.MsgTypeNotifyTemplate,
    action: constants.actions.MsgActionNotifyTemplateGetAll,
    orchestrator: notifyTemplateOrchestrator.getAllNotifyTemplate
  },
  {
    type: constants.types.MsgTypeNotifyTemplate,
    action: constants.actions.MsgActionNotifyTemplateCreate,
    orchestrator: notifyTemplateOrchestrator.createNotifyTemplate,
    schema: 'notifyTemplateSchema'
  }
];

/**
 * BASE
 */
const orchestrators = [
  ...orchestratorAuth,
  ...orchestratorConfig,
  ...orchestratorHome,
  ...orchestratorHealth,
  ...orchestratorOrganization,
  ...orchestratorProject,
  ...orchestratorRole,
  ...orchestratorPermission,
  ...orchestratorUser,
  ...orchestratorUserSession,
  ...orchestratorNotify,
  ...orchestratorNotifyUser,
  ...orchestratorNotifyTemplate
];

export default orchestrators;