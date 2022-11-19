'use strict';

import { permissionController } from '../controllers';

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
    methodName: 'getPermissionByID',
    controller: permissionController.getPermissionByID
  },
  {
    pathName: '/permissions/:id',
    method: 'PATCH',
    methodName: 'editPermissionByID',
    controller: permissionController.editPermissionByID
  },
  {
    pathName: '/permissions/:id',
    method: 'DELETE',
    methodName: 'deletePermissionByID',
    controller: permissionController.deletePermissionByID
  },
  {
    pathName: '/permissions/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToPermissionByID',
    controller: permissionController.addRolesToPermissionByID
  }
];

export default permissionRouter;
