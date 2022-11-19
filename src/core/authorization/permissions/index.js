'use strict';

import organizationPermission from './organization-permission';
import projectPermission from './project-permission';

import userPermission from './user-permission';
import rolePermission from './role-permission';
import perPermission from './per-permission';

const permissions = {
  admin: {
    organizations: organizationPermission,
    projects: projectPermission,
    users: userPermission,
    roles: rolePermission,
    permissions: perPermission
  }
};

export default permissions;
