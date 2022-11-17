'use strict';

import { organizationController } from '../controllers';

/**
 * @description Organization router
 */
const organizationRouter = [
  {
    enable: true,
    pathName: '/organizations',
    method: 'GET',
    methodName: 'getAllOrganization',
    controller: organizationController.getAllOrganization
  },
  {
    enable: true,
    pathName: '/organizations',
    method: 'POST',
    methodName: 'createOrganization',
    controller: organizationController.createOrganization
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'GET',
    methodName: 'getOrganizationByID',
    controller: organizationController.getOrganizationByID
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'PATCH',
    methodName: 'editOrganizationByID',
    controller: organizationController.editOrganizationByID
  },
  {
    enable: true,
    pathName: '/organizations/:id',
    method: 'DELETE',
    methodName: 'deleteOrganizationByID',
    controller: organizationController.deleteOrganizationByID
  }
];

export default organizationRouter;
