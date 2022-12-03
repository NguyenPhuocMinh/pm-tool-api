'use strict';

import { projectController } from '@mappings/controllers';

/**
 * @description Project router
 */
const projectRouter = [
  {
    enable: true,
    pathName: '/projects',
    method: 'GET',
    methodName: 'getAllProject',
    controller: projectController.getAllProject
  },
  {
    enable: true,
    pathName: '/projects',
    method: 'POST',
    methodName: 'createProject',
    controller: projectController.createProject
  }
];

export default projectRouter;
