'use strict';

import { productController } from '@mappings/controllers';

/**
 * @description Product router
 */
const categoryRouter = [
  {
    pathName: '/products',
    method: 'GET',
    methodName: 'getAllProduct',
    controller: productController.getAllProduct
  },
  {
    pathName: '/products',
    method: 'POST',
    methodName: 'createProduct',
    controller: productController.createProduct
  },
  {
    pathName: '/products/:id',
    method: 'GET',
    methodName: 'getProduct',
    controller: productController.getProduct
  },
  {
    pathName: '/products/:id',
    method: 'PATCH',
    methodName: 'updateProduct',
    controller: productController.updateProduct
  },
  {
    pathName: '/products/:id',
    method: 'DELETE',
    methodName: 'deleteProduct',
    controller: productController.deleteProduct
  }
];

export default categoryRouter;
