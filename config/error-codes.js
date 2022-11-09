'use strict';

import commonError from './error/common-error';
import tokenError from './error/token-error';
import organizationError from './error/organization-error';
import projectError from './error/project-error';
import roleError from './error/role-error';
import permissionError from './error/permission-error';
import userError from './error/user-error';

const errorCodes = {
  ...commonError,
  ...tokenError,
  ...organizationError,
  ...projectError,
  ...roleError,
  ...permissionError,
  ...userError
};

export default errorCodes;
