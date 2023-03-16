'use strict';

import { customerController } from '@mappings/controllers';

/**
 * @description Customer router
 */
const customerRouter = [
  {
    pathName: '/customers/register',
    method: 'POST',
    methodName: 'registerCustomer',
    controller: customerController.registerCustomer
  },
  {
    pathName: '/customers/login',
    method: 'POST',
    methodName: 'loginCustomer',
    controller: customerController.loginCustomer
  },
  {
    pathName: '/customers',
    method: 'GET',
    methodName: 'getAllCustomer',
    controller: customerController.getAllCustomer
  },
  {
    pathName: '/customers',
    method: 'POST',
    methodName: 'createCustomer',
    controller: customerController.createCustomer
  },
  {
    pathName: '/customers/:id',
    method: 'GET',
    methodName: 'getCustomer',
    controller: customerController.getCustomer
  },
  {
    pathName: '/customers/:id',
    method: 'PATCH',
    methodName: 'updateCustomer',
    controller: customerController.updateCustomer
  },
  {
    pathName: '/customers/:id',
    method: 'DELETE',
    methodName: 'deleteCustomer',
    controller: customerController.deleteCustomer
  }
];

export default customerRouter;
