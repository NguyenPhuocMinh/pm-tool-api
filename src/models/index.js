'use strict';

import OrganizationModel from './organization-model';
import ProjectModel from './project-model';
import TeamModel from './team-model';
import RoleModel from './role-model';
import PermissionModel from './permission-model';
import UserModel from './user-model';
import UserSessionModel from './user-session-model';
import NotifyModel from './notify-model';
import NotifyConfigModel from './notify-config-model';
import NotifyTemplateModel from './notify-template-model';

const models = [
  OrganizationModel,
  ProjectModel,
  TeamModel,
  RoleModel,
  PermissionModel,
  UserModel,
  UserSessionModel,
  NotifyModel,
  NotifyConfigModel,
  NotifyTemplateModel
];

export default models;
