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
    method: 'PATCH',
    methodName: 'updateOrganization',
    controller: organizationController.updateOrganization
  },
  {
    pathName: '/organizations/:id',
    method: 'DELETE',
    methodName: 'deleteOrganization',
    controller: organizationController.deleteOrganization
  }
];

export default organizationRouter;
