'use strict';

import testSuccess from './success/test-success';
import socketSuccess from './success/socket-success';
import authSuccess from './success/auth-success';
import commonSuccess from './success/common-success';
import categorySuccess from './success/category-success';
import productSuccess from './success/product-success';
import organizationSuccess from './success/organization-success';
import projectSuccess from './success/project-success';
import teamSuccess from './success/team-success';
import roleSuccess from './success/role-success';
import permissionSuccess from './success/permission-success';
import userSuccess from './success/user-success';
import userSessionSuccess from './success/user-session-success';
import userOnlineSuccess from './success/user-online-success';
import notifySuccess from './success/notify-success';
import notifyUserSuccess from './success/notify-user-success';
import notifyTemplateSuccess from './success/notify-template-success';
import customerSuccess from './success/customer-success';

const successCodes = {
  ...testSuccess,
  ...socketSuccess,
  ...authSuccess,
  ...commonSuccess,
  ...categorySuccess,
  ...productSuccess,
  ...organizationSuccess,
  ...projectSuccess,
  ...teamSuccess,
  ...roleSuccess,
  ...permissionSuccess,
  ...userSuccess,
  ...userSessionSuccess,
  ...userOnlineSuccess,
  ...notifySuccess,
  ...notifyUserSuccess,
  ...notifyTemplateSuccess,
  ...customerSuccess
};

export default successCodes;
