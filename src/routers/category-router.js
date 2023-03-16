'use strict';

import { categoryController } from '@mappings/controllers';

/**
 * @description Category router
 */
const categoryRouter = [
  {
    pathName: '/categories',
    method: 'GET',
    methodName: 'getAllCategory',
    controller: categoryController.getAllCategory
  },
  {
    pathName: '/categories',
    method: 'POST',
    methodName: 'createCategory',
    controller: categoryController.createCategory
  },
  {
    pathName: '/categories/:id',
    method: 'GET',
    methodName: 'getCategory',
    controller: categoryController.getCategory
  },
  {
    pathName: '/categories/:id',
    method: 'PATCH',
    methodName: 'updateCategory',
    controller: categoryController.updateCategory
  },
  {
    pathName: '/categories/:id',
    method: 'DELETE',
    methodName: 'deleteCategory',
    controller: categoryController.deleteCategory
  }
];

export default categoryRouter;
