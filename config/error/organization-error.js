'use strict';

export default {
  OrganizationNameIsRequired: {
    message: 'resources.organizations.notifications.errors.requiredName',
    returnCode: 3005,
    statusCode: 400
  },
  DuplicateNameOrganization: {
    message: 'resources.organizations.notifications.errors.duplicateName',
    returnCode: 3006,
    statusCode: 400
  },
  OrganizationIDNotFound: {
    message: 'resources.organizations.notifications.errors.idNotFound',
    returnCode: 3007,
    statusCode: 400
  }
};
