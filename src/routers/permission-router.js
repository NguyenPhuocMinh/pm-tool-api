'use strict';

import { permissionController } from '@mappings/controllers';

/**
 * @description Permission router
 */
const permissionRouter = [
  {
    pathName: '/permissions',
    method: 'GET',
    methodName: 'getAllPermission',
    controller: permissionController.getAllPermission
  },
  {
    pathName: '/permissions',
    method: 'POST',
    methodName: 'createPermission',
    controller: permissionController.createPermission
  },
  {
    pathName: '/permissions/:id',
    method: 'GET',
    methodName: 'getPermission',
    controller: permissionController.getPermission
  },
  {
    pathName: '/permissions/:id',
    method: 'PATCH',
    methodName: 'updatePermission',
    controller: permissionController.updatePermission
  },
  {
    pathName: '/permissions/:id',
    method: 'DELETE',
    methodName: 'deletePermission',
    controller: permissionController.deletePermission
  },
  {
    pathName: '/permissions/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToPermissionByID',
    controller: permissionController.addRolesToPermissionByID
  }
];

export default permissionRouter;
