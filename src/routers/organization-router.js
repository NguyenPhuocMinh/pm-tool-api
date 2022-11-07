'use strict';

const { organizationController } = require('../controllers');

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
    methodName: 'getOrganizationByID',
    controller: organizationController.getOrganizationByID
  },
  {
    pathName: '/organizations/:id',
    method: 'PATCH',
    methodName: 'editOrganizationByID',
    controller: organizationController.editOrganizationByID
  },
  {
    pathName: '/organizations/:id',
    method: 'DELETE',
    methodName: 'deleteOrganizationByID',
    controller: organizationController.deleteOrganizationByID
  }
];

export default organizationRouter;
