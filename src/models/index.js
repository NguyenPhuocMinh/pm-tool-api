'use strict';

import OrganizationModel from './organization-model';
import ProjectModel from './project-model';
import RoleModel from './role-model';
import PermissionModel from './permission-model';
import UserModel from './user-model';
import UserSessionModel from './user-session-model';
import NotificationModel from './notification-model';
import NotificationTemplateModel from './notification-template-model';

const models = [
  OrganizationModel,
  ProjectModel,
  RoleModel,
  PermissionModel,
  UserModel,
  UserSessionModel,
  NotificationModel,
  NotificationTemplateModel
];

export default models;
