'use strict';

import constants from '../../constants';

import HomeOrchestrator from './home-orchestrator';
import OrganizationOrchestrator from './organization-orchestrator';
import ProjectOrchestrator from './project-orchestrator';
import RoleOrchestrator from './role-orchestrator';
import PermissionOrchestrator from './permission-orchestrator';

/**
 * HOME
 */
const orchestratorHome = [
  {
    type: constants.types.MsgTypeHome,
    action: constants.actions.MsgActionHomePage,
    orchestrator: HomeOrchestrator.HomePage
  }
];

/**
 * ORGANIZATION
 */
const orchestratorOrganization = [
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationGetList,
    orchestrator: OrganizationOrchestrator.GetList
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationCreate,
    orchestrator: OrganizationOrchestrator.Create,
    schema: 'organizationSchema'
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationGetID,
    orchestrator: OrganizationOrchestrator.GetID
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationEdit,
    orchestrator: OrganizationOrchestrator.Edit,
    schema: 'organizationSchema'
  },
  {
    type: constants.types.MsgTypeOrganization,
    action: constants.actions.MsgActionOrganizationDelete,
    orchestrator: OrganizationOrchestrator.Delete
  }
];

/**
 * PROJECT
 */
const orchestratorProject = [
  {
    type: constants.types.MsgTypeProject,
    action: constants.actions.MsgActionProjectGetList,
    orchestrator: ProjectOrchestrator.GetList
  },
  {
    type: constants.types.MsgTypeProject,
    action: constants.actions.MsgActionProjectCreate,
    orchestrator: ProjectOrchestrator.Create,
    schema: 'projectSchema'
  }
];

/**
 * ROLE
 */
const orchestratorRole = [
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetList,
    orchestrator: RoleOrchestrator.GetList
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleCreate,
    orchestrator: RoleOrchestrator.Create,
    schema: 'roleSchema'
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleGetID,
    orchestrator: RoleOrchestrator.GetID
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleEdit,
    orchestrator: RoleOrchestrator.Edit,
    schema: 'roleSchema'
  },
  {
    type: constants.types.MsgTypeRole,
    action: constants.actions.MsgActionRoleDelete,
    orchestrator: RoleOrchestrator.Delete
  }
];

/**
 * ROLE
 */
const orchestratorPermission = [
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionGetList,
    orchestrator: PermissionOrchestrator.GetList
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionCreate,
    orchestrator: PermissionOrchestrator.Create,
    schema: 'permissionSchema'
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionGetID,
    orchestrator: PermissionOrchestrator.GetID
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionEdit,
    orchestrator: PermissionOrchestrator.Edit,
    schema: 'permissionSchema'
  },
  {
    type: constants.types.MsgTypePermission,
    action: constants.actions.MsgActionPermissionDelete,
    orchestrator: PermissionOrchestrator.Delete
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
  ...orchestratorPermission
];

export default orchestrators;
