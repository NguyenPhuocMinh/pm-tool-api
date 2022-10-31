'use strict';

import constants from '../../constants';

import HomeOrchestrator from './home-orchestrator';
import OrganizationOrchestrator from './organization-orchestrator';
import ProjectOrchestrator from './project-orchestrator';

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
    orchestrator: OrganizationOrchestrator.Edit
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
 * BASE
 */
const orchestrators = [
  ...orchestratorHome,
  ...orchestratorOrganization,
  ...orchestratorProject
];

export default orchestrators;
