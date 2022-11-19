'use strict';

import { roleController } from '../controllers';

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
    methodName: 'getRolByID',
    controller: roleController.getRolByID
  },
  {
    pathName: '/roles/:id',
    method: 'PATCH',
    methodName: 'editRoleByID',
    controller: roleController.editRoleByID
  },
  {
    pathName: '/roles/:id',
    method: 'DELETE',
    methodName: 'deleteRoleByID',
    controller: roleController.deleteRoleByID
  },
  {
    pathName: '/roles/:id/users',
    method: 'GET',
    methodName: 'getUsersByRoleID',
    controller: roleController.getUsersByRoleID
  },
  {
    pathName: '/roles/:id/permissions',
    method: 'GET',
    methodName: 'getPermissionsByRoleID',
    controller: roleController.getPermissionsByRoleID
  },
  {
    pathName: '/roles/:id/add-permissions',
    method: 'PATCH',
    methodName: 'addPermissionsToRoleByRoleID',
    controller: roleController.addPermissionsToRoleByRoleID
  }
];

export default roleRouter;
