'use strict';

import authPermission from './auth-permission';
import organizationPermission from './organization-permission';
import projectPermission from './project-permission';
import teamPermission from './team-permission';
import rolePermission from './role-permission';
import perPermission from './per-permission';
import userPermission from './user-permission';
import userSessionPermission from './user-session-permission';
import userOnlinePermission from './user-online-permission';
import notifyTemplatePermission from './notify-template-permission';

const permissions = {
  admin: {
    auth: authPermission,
    organizations: organizationPermission,
    projects: projectPermission,
    teams: teamPermission,
    roles: rolePermission,
    permissions: perPermission,
    users: userPermission,
    userSessions: userSessionPermission,
    userOnlines: userOnlinePermission,
    notifyTemplates: notifyTemplatePermission
  }
};

export default permissions;
