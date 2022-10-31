'use strict';

const { OrganizationController } = require('../controllers');

/**
 * @description Organization router
 */
const OrganizationRouter = [
  {
    pathName: '/organizations',
    method: 'GET',
    methodName: 'GetList',
    controller: OrganizationController.GetList
  },
  {
    pathName: '/organizations',
    method: 'POST',
    methodName: 'Create',
    controller: OrganizationController.Create
  },
  {
    pathName: '/organizations/:id',
    method: 'GET',
    methodName: 'GetID',
    controller: OrganizationController.GetID
  },
  {
    pathName: '/organizations/:id',
    method: 'PATCH',
    methodName: 'Edit',
    controller: OrganizationController.Edit
  },
  {
    pathName: '/organizations/:id',
    method: 'DELETE',
    methodName: 'Delete',
    controller: OrganizationController.Delete
  }
];

export default OrganizationRouter;
