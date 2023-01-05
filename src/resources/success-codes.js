'use strict';

import testSuccess from './success/test-success';
import authSuccess from './success/auth-success';
import commonSuccess from './success/common-success';
import organizationSuccess from './success/organization-success';
import projectSuccess from './success/project-success';
import roleSuccess from './success/role-success';
import permissionSuccess from './success/permission-success';
import userSuccess from './success/user-success';
import userSessionSuccess from './success/user-session-success';
import userOnlineSuccess from './success/user-online-success';
import notifySuccess from './success/notify-success';
import notifyUserSuccess from './success/notify-user-success';
import notifyTemplateSuccess from './success/notify-template-success';

const successCodes = {
  ...testSuccess,
  ...authSuccess,
  ...commonSuccess,
  ...organizationSuccess,
  ...projectSuccess,
  ...roleSuccess,
  ...permissionSuccess,
  ...userSuccess,
  ...userSessionSuccess,
  ...userOnlineSuccess,
  ...notifySuccess,
  ...notifyUserSuccess,
  ...notifyTemplateSuccess
};

export default successCodes;
