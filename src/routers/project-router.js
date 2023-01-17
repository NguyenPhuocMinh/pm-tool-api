'use strict';

import { projectController } from '@mappings/controllers';

/**
 * @description Project router
 */
const projectRouter = [
  {
    pathName: '/projects',
    method: 'GET',
    methodName: 'getAllProject',
    controller: projectController.getAllProject
  },
  {
    pathName: '/projects',
    method: 'POST',
    methodName: 'createProject',
    controller: projectController.createProject
  },
  {
    pathName: '/projects/:id',
    method: 'GET',
    methodName: 'getProject',
    controller: projectController.getProject
  },
  {
    pathName: '/projects/:id',
    method: 'PUT',
    methodName: 'updateProject',
    controller: projectController.updateProject
  },
  {
    pathName: '/projects/:id',
    method: 'DELETE',
    methodName: 'deleteProject',
    controller: projectController.deleteProject
  },
  {
    pathName: '/projects/:id/teams-in-projects',
    method: 'GET',
    methodName: 'getAllTeamInProject',
    controller: projectController.getAllTeamInProject
  },
  {
    pathName: '/projects/:id/teams-not-on-projects',
    method: 'GET',
    methodName: 'getAllTeamNotOnProject',
    controller: projectController.getAllTeamNotOnProject
  },
  {
    pathName: '/projects/:id/add-teams-to-projects',
    method: 'PATCH',
    methodName: 'addTeamsToProject',
    controller: projectController.addTeamsToProject
  },
  {
    pathName: '/projects/:id/remove-teams-from-projects',
    method: 'PATCH',
    methodName: 'removeTeamsFromProject',
    controller: projectController.removeTeamsFromProject
  }
];

export default projectRouter;
