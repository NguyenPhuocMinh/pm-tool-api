'use strict';

import organizationSuccess from './success/organization-success';
import projectSuccess from './success/project-success';
import roleSuccess from './success/role-success';
import permissionSuccess from './success/permission-success';

const successCodes = {
  GetHomePageSuccess: {
    message: 'common.notifications.success.home',
    returnCode: 4000,
    statusCode: 200
  },
  ...organizationSuccess,
  ...projectSuccess,
  ...roleSuccess,
  ...permissionSuccess
};

export default successCodes;
