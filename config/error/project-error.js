'use strict';

export default {
  ProjectNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3008,
    statusCode: 400
  },
  DuplicateNameProject: {
    message: 'resources.projects.notifications.errors.duplicateName',
    returnCode: 3009,
    statusCode: 400
  },
  ProjectIDNotFound: {
    message: 'resources.projects.notifications.errors.idNotFound',
    returnCode: 3010,
    statusCode: 400
  }
};
