'use strict';

import { userController } from '@mappings/controllers';

/**
 * @description User router
 */
const userRouter = [
  {
    pathName: '/users',
    method: 'GET',
    methodName: 'getAllUser',
    controller: userController.getAllUser
  },
  {
    pathName: '/users',
    method: 'POST',
    methodName: 'createUser',
    controller: userController.createUser
  },
  {
    pathName: '/users/:id',
    method: 'GET',
    methodName: 'getUser',
    controller: userController.getUser
  },
  {
    pathName: '/users/:id',
    method: 'PUT',
    methodName: 'updateUser',
    controller: userController.updateUser
  },
  {
    pathName: '/users/:id',
    method: 'DELETE',
    methodName: 'deleteUser',
    controller: userController.deleteUser
  },
  {
    pathName: '/users/:id/change-password',
    method: 'PATCH',
    methodName: 'changePasswordUserByID',
    controller: userController.changePasswordUserByID
  },
  {
    pathName: '/users/:id/set-password',
    method: 'PATCH',
    methodName: 'setPasswordByUserID',
    controller: userController.setPasswordByUserID
  },
  {
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToUserByUserID',
    controller: userController.addRolesToUserByUserID
  },
  {
    pathName: '/users/:id/reset-password',
    method: 'PATCH',
    methodName: 'resetPasswordUser',
    controller: userController.resetPasswordUser
  }
];

export default userRouter;
