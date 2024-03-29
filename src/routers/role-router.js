'use strict';

import { roleController } from '@mappings/controllers';

/**
 * @description Role router
 */
const roleRouter = [
  {
    pathName: '/roles',
    method: 'GET',
    methodName: 'getAllRole',
    controller: roleController.getAllRole
  },
  {
    pathName: '/roles',
    method: 'POST',
    methodName: 'createRole',
    controller: roleController.createRole
  },
  {
    pathName: '/roles/:id',
    method: 'GET',
    methodName: 'getRole',
    controller: roleController.getRole
  },
  {
    pathName: '/roles/:id',
    method: 'PATCH',
    methodName: 'updateRole',
    controller: roleController.updateRole
  },
  {
    pathName: '/roles/:id',
    method: 'DELETE',
    methodName: 'deleteRole',
    controller: roleController.deleteRole
  },
  {
    pathName: '/roles/:id/users',
    method: 'GET',
    methodName: 'getUsersInRole',
    controller: roleController.getUsersInRole
  },
  {
    pathName: '/roles/:id/permissions',
    method: 'GET',
    methodName: 'getPermissionsInRole',
    controller: roleController.getPermissionsInRole
  }
];

export default roleRouter;
