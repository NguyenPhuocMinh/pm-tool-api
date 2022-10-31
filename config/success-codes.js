'use strict';

const successCodes = {
  GetHomePageSuccess: {
    message: 'common.notifications.success.home',
    returnCode: 4000,
    statusCode: 200
  },
  GetTestPageSuccess: {
    message: 'common.notifications.success.test',
    returnCode: 4001,
    statusCode: 200
  },
  OrganizationGetListSuccess: {
    message: 'resources.organizations.notifications.success.list',
    returnCode: 4002,
    statusCode: 200
  },
  OrganizationCreateSuccess: {
    message: 'resources.organizations.notifications.success.create',
    returnCode: 4003,
    statusCode: 200
  },
  ProjectGetListSuccess: {
    message: 'resources.projects.notifications.success.list',
    returnCode: 4004,
    statusCode: 200
  },
  ProjectCreateSuccess: {
    message: 'resources.projects.notifications.success.create',
    returnCode: 4005,
    statusCode: 200
  }
};

export default successCodes;
