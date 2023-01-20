'use strict';

import { organizationController } from '@mappings/controllers';

/**
 * @description Organization router
 */
const organizationRouter = [
  {
    pathName: '/organizations',
    method: 'GET',
    methodName: 'getAllOrganization',
    controller: organizationController.getAllOrganization
  },
  {
    pathName: '/organizations',
    method: 'POST',
    methodName: 'createOrganization',
    controller: organizationController.createOrganization
  },
  {
    pathName: '/organizations/:id',
    method: 'GET',
    methodName: 'getOrganization',
    controller: organizationController.getOrganization
  },
  {
    pathName: '/organizations/:id',
    method: 'PUT',
    methodName: 'updateOrganization',
    controller: organizationController.updateOrganization
  },
  {
    pathName: '/organizations/:id',
    method: 'DELETE',
    methodName: 'deleteOrganization',
    controller: organizationController.deleteOrganization
  },
  {
    pathName: '/organizations/:id/projects-in-organizations',
    method: 'GET',
    methodName: 'getAllProjectInOrganization',
    controller: organizationController.getAllProjectInOrganization
  },
  {
    pathName: '/organizations/:id/projects-not-on-organizations',
    method: 'GET',
    methodName: 'getAllProjectNotOnOrganization',
    controller: organizationController.getAllProjectNotOnOrganization
  },
  {
    pathName: '/organizations/:id/add-projects-to-organizations',
    method: 'PATCH',
    methodName: 'addProjectsToOrganization',
    controller: organizationController.addProjectsToOrganization
  },
  {
    pathName: '/organizations/:id/remove-projects-from-organizations',
    method: 'PATCH',
    methodName: 'removeProjectsFromProject',
    controller: organizationController.removeProjectsFromProject
  }
];

export default organizationRouter;
