'use strict';

import { socketController } from '@mappings/controllers';

/**
 * @description Socket router
 */
const socketRouter = [
  {
    pathName: '/socket.io',
    method: 'GET',
    methodName: 'getSocket',
    controller: socketController.getSocket
  },
  {
    pathName: '/socket.io',
    method: 'POST',
    methodName: 'postSocket',
    controller: socketController.postSocket
  }
];

export default socketRouter;
