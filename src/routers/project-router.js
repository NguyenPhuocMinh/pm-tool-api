'use strict';

const { ProjectController } = require('../controllers');

/**
 * @description Project router
 */
const ProjectRouter = [
  {
    pathName: '/projects',
    method: 'GET',
    methodName: 'GetList',
    controller: ProjectController.GetList
  },
  {
    pathName: '/projects',
    method: 'POST',
    methodName: 'Create',
    controller: ProjectController.Create
  }
];

export default ProjectRouter;
