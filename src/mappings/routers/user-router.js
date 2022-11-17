'use strict';

import { userController } from '../controllers';

/**
 * @description User router
 */
const userRouter = [
  {
    enable: true,
    pathName: '/users',
    method: 'GET',
    methodName: 'getAllUser',
    controller: userController.getAllUser
  },
  {
    enable: true,
    pathName: '/users',
    method: 'POST',
    methodName: 'createUser',
    controller: userController.createUser
  },
  {
    enable: true,
    pathName: '/users/:id',
    method: 'GET',
    methodName: 'getUserByID',
    controller: userController.getUserByID
  },
  {
    enable: true,
    pathName: '/users/:id',
    method: 'PUT',
    methodName: 'editUserByID',
    controller: userController.editUserByID
  },
  {
    enable: true,
    pathName: '/users/:id',
    method: 'DELETE',
    methodName: 'deleteUserByID',
    controller: userController.deleteUserByID
  },
  {
    enable: true,
    pathName: '/users/:id/change-password',
    method: 'PATCH',
    methodName: 'changePasswordUserByID',
    controller: userController.changePasswordUserByID
  },
  {
    enable: true,
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToUserByUserID',
    controller: userController.addRolesToUserByUserID
  },
  {
    enable: true,
    pathName: '/users/:id/set-password',
    method: 'PATCH',
    methodName: 'setPasswordByUserID',
    controller: userController.setPasswordByUserID
  }
];

export default userRouter;
