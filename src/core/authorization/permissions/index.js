'use strict';

import userPermission from './user-permission';
import rolePermission from './role-permission';

const permissions = {
  admin: {
    ...userPermission,
    ...rolePermission
  }
};

export default permissions;
