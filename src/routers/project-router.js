'use strict';

const { projectController } = require('../controllers');

/**
 * @description Project router
 */
const ProjectRouter = [
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

export default ProjectRouter;