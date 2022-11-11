'use strict';

const { userController } = require('../controllers');

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
    methodName: 'getUserByID',
    controller: userController.getUserByID
  },
  {
    pathName: '/users/:id',
    method: 'PUT',
    methodName: 'editUserByID',
    controller: userController.editUserByID
  },
  {
    pathName: '/users/:id',
    method: 'DELETE',
    methodName: 'deleteUserByID',
    controller: userController.deleteUserByID
  },
  {
    pathName: '/users/:id/change-password',
    method: 'PATCH',
    methodName: 'changePasswordUserByID',
    controller: userController.changePasswordUserByID
  },
  {
    pathName: '/users/:id/add-roles',
    method: 'PATCH',
    methodName: 'addRolesToUserByUserID',
    controller: userController.addRolesToUserByUserID
  },
  {
    pathName: '/users/:id/set-password',
    method: 'PATCH',
    methodName: 'setPasswordByUserID',
    controller: userController.setPasswordByUserID
  }
];

export default userRouter;
