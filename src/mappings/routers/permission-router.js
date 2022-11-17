'use strict';

import { permissionController } from '../controllers';

/**
 * @description Permission router
 */
const permissionRouter = [
  {
    enable: true,
    pathName: '/permissions',
    method: 'GET',
    methodName: 'getAllPermission',
    controller: permissionController.getAllPermission
  },
  {
    enable: true,
    pathName: '/permissions',
    method: 'POST',
    methodName: 'createPermission',
    controller: permissionController.createPermission
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'GET',
    methodName: 'getPermissionByID',
    controller: permissionController.getPermissionByID
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'PATCH',
    methodName: 'editPermissionByID',
    controller: permissionController.editPermissionByID
  },
  {
    enable: true,
    pathName: '/permissions/:id',
    method: 'DELETE',
    methodName: 'deletePermissionByID',
    controller: permissionController.deletePermissionByID
  },
  {
    enable: true,
    pathName: '/permissions/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToPermissionByID',
    controller: permissionController.addRolesToPermissionByID
  }
];

export default permissionRouter;
