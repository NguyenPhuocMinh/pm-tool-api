'use strict';

import { projectController } from '@mappings/controllers';

/**
 * @description Project router
 */
const projectRouter = [
  {
    pathName: '/projects',
    method: 'GET',
    methodName: 'getAllProject',
    controller: projectController.getAllProject
  },
  {
    pathName: '/projects',
    method: 'POST',
    methodName: 'createProject',
    controller: projectController.createProject
  }
];

export default projectRouter;
