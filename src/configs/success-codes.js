'use strict';

import authSuccess from './success/auth-success';
import commonSuccess from './success/common-success';
import organizationSuccess from './success/organization-success';
import projectSuccess from './success/project-success';
import roleSuccess from './success/role-success';
import permissionSuccess from './success/permission-success';
import userSuccess from './success/user-success';

const successCodes = {
  ...authSuccess,
  ...commonSuccess,
  ...organizationSuccess,
  ...projectSuccess,
  ...roleSuccess,
  ...permissionSuccess,
  ...userSuccess
};

export default successCodes;
