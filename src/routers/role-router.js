'use strict';

const { RoleController } = require('../controllers');

/**
 * @description Role router
 */
const RoleRouter = [
  {
    pathName: '/roles',
    method: 'GET',
    methodName: 'GetList',
    controller: RoleController.GetList
  },
  {
    pathName: '/roles',
    method: 'POST',
    methodName: 'Create',
    controller: RoleController.Create
  },
  {
    pathName: '/roles/:id',
    method: 'GET',
    methodName: 'GetID',
    controller: RoleController.GetID
  },
  {
    pathName: '/roles/:id',
    method: 'PATCH',
    methodName: 'Edit',
    controller: RoleController.Edit
  },
  {
    pathName: '/roles/:id',
    method: 'DELETE',
    methodName: 'Delete',
    controller: RoleController.Delete
  }
];

export default RoleRouter;
