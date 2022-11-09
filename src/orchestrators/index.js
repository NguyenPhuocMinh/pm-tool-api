'use strict';

import constants from '../../constants';

import homeOrchestrator from './home-orchestrator';
import organizationOrchestrator from './organization-orchestrator';
import projectOrchestrator from './project-orchestrator';
import roleOrchestrator from './role-orchestrator';
import permissionOrchestrator from './permission-orchestrator';
import userOrchestrator from './user-orchestrator';

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
    action: constants.actions.MsgActionOrganizationGetID,
    orchestrator: organizationOrchestrator.getOrganizationByID
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationEdit,
    orchestrator: organizationOrchestrator.editOrganizationByID,
    schema: 'organizationSchema'
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationDelete,
    orchestrator: organizationOrchestrator.deleteOrganizationByID
  }
];

/**
 * PROJECT
 */
const orchestratorProject = [
  {
    type: constants.types.MsgTypeProject,
    action: constants.actions.MsgActionProjectGetList,
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
    action: constants.actions.MsgActionRoleGetID,
    orchestrator: roleOrchestrator.getRoleByID
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleEdit,
    orchestrator: roleOrchestrator.editRoleByID,
    schema: 'roleSchema'
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleDelete,
    orchestrator: roleOrchestrator.deleteRoleByID
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetPermissions,
    orchestrator: roleOrchestrator.getPermissionsByRoleID
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleAddPermissions,
    orchestrator: roleOrchestrator.addPermissionsToRoleByID
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
    action: constants.actions.MsgActionPermissionGetID,
    orchestrator: permissionOrchestrator.getPermissionByID
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionEdit,
    orchestrator: permissionOrchestrator.editPermissionByID,
    schema: 'permissionSchema'
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionDelete,
    orchestrator: permissionOrchestrator.deletePermissionByID
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionAddRoles,
    orchestrator: permissionOrchestrator.addRolesToPermissionByID
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
    action: constants.actions.MsgActionUserGetID,
    orchestrator: userOrchestrator.getUserByID
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserEdit,
    orchestrator: userOrchestrator.editUserByID,
    schema: 'userEditSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserDelete,
    orchestrator: userOrchestrator.deleteUserByID
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserChangePass,
    orchestrator: userOrchestrator.changePasswordUserByID,
    schema: 'userChangePassSchema'
  },
  {
    type: constants.types.MsgTypeUser,
    action: constants.actions.MsgActionUserAddRoles,
    orchestrator: userOrchestrator.addRolesToUserByUserID
  }
];

/**
 * BASE
 */
const orchestrators = [
  ...orchestratorHome,
  ...orchestratorOrganization,
  ...orchestratorProject,
  ...orchestratorRole,
  ...orchestratorPermission,
  ...orchestratorUser
];

export default orchestrators;
