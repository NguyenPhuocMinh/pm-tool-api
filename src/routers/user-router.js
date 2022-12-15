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
    methodName: 'changePassUser',
    controller: userController.changePassUser
  },
  {
    pathName: '/users/:id/set-password',
    method: 'PATCH',
    methodName: 'setPassUser',
    controller: userController.setPassUser
  },
  {
    pathName: '/users/:id/reset-password',
    method: 'PATCH',
    methodName: 'resetPassUser',
    controller: userController.resetPassUser
  },
  {
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToUser',
    controller: userController.addRolesToUser
  }
];

export default userRouter;
