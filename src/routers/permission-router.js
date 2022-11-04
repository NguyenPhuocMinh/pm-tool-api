'use strict';

const { PermissionController } = require('../controllers');

/**
 * @description Permission router
 */
const PermissionRouter = [
  {
    pathName: '/permissions',
    method: 'GET',
    methodName: 'GetList',
    controller: PermissionController.GetList
  },
  {
    pathName: '/permissions',
    method: 'POST',
    methodName: 'Create',
    controller: PermissionController.Create
  },
  {
    pathName: '/permissions/:id',
    method: 'GET',
    methodName: 'GetID',
    controller: PermissionController.GetID
  },
  {
    pathName: '/permissions/:id',
    method: 'PATCH',
    methodName: 'Edit',
    controller: PermissionController.Edit
  },
  {
    pathName: '/permissions/:id',
    method: 'DELETE',
    methodName: 'Delete',
    controller: PermissionController.Delete
  }
];

export default PermissionRouter;
