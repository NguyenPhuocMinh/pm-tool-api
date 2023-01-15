'use strict';

import authError from './error/auth-error';
import commonError from './error/common-error';
import organizationError from './error/organization-error';
import projectError from './error/project-error';
import teamError from './error/team-error';
import roleError from './error/role-error';
import permissionError from './error/permission-error';
import userError from './error/user-error';
import userSessionError from './error/user-session-error';
import notifyError from './error/notify-error';
import notifyUserError from './error/notify-user-error';
import notifyTemplateError from './error/notify-template-error';

const errorCodes = {
  ...authError,
  ...commonError,
  ...organizationError,
  ...projectError,
  ...teamError,
  ...roleError,
  ...permissionError,
  ...userError,
  ...userSessionError,
  ...notifyError,
  ...notifyUserError,
  ...notifyTemplateError
};

export default errorCodes;
