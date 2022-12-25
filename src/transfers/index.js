'use strict';

import authTransfer from './auth-transfer';
import organizationTransfer from './organization-transfer';
import projectTransfer from './project-transfer';
import roleTransfer from './role-transfer';
import permissionTransfer from './permission-transfer';
import userTransfer from './user-transfer';
import userSessionTransfer from './user-session-transfer';
import userOnlineTransfer from './user-online-transfer';
import notifyTransfer from './notify-transfer';
import notifyUserTransfer from './notify-user-transfer';
import notifyTemplateTransfer from './notify-template-transfer';

export default {
  authTransfer,
  organizationTransfer,
  projectTransfer,
  roleTransfer,
  permissionTransfer,
  userTransfer,
  userSessionTransfer,
  userOnlineTransfer,
  notifyTransfer,
  notifyUserTransfer,
  notifyTemplateTransfer
};
