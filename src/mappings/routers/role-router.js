'use strict';

import { roleController } from '../controllers';

/**
 * @description Role router
 */
const roleRouter = [
  {
    enable: true,
    pathName: '/roles',
    method: 'GET',
    methodName: 'getAllRole',
    controller: roleController.getAllRole
  },
  {
    enable: true,
    pathName: '/roles',
    method: 'POST',
    methodName: 'createRole',
    controller: roleController.createRole
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'GET',
    methodName: 'getRolByID',
    controller: roleController.getRolByID
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'PATCH',
    methodName: 'editRoleByID',
    controller: roleController.editRoleByID
  },
  {
    enable: true,
    pathName: '/roles/:id',
    method: 'DELETE',
    methodName: 'deleteRoleByID',
    controller: roleController.deleteRoleByID
  },
  {
    enable: true,
    pathName: '/roles/:id/permissions',
    method: 'GET',
    methodName: 'getPermissionsByRoleID',
    controller: roleController.getPermissionsByRoleID
  },
  {
    enable: true,
    pathName: '/roles/:id/add-permissions',
    method: 'PATCH',
    methodName: 'addPermissionsToRoleByRoleID',
    controller: roleController.addPermissionsToRoleByRoleID
  }
];

export default roleRouter;
