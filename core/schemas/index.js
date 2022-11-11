'use strict';

import { organizationSchema } from './organization-schema';
import { projectSchema } from './project-schema';
import { roleSchema } from './role-schema';
import { permissionSchema } from './permission-schema';
import {
  userCreateSchema,
  userEditSchema,
  userChangePassSchema,
  userSetPassSchema
} from './user-schema';

const schemas = {
  organizationSchema,
  projectSchema,
  roleSchema,
  permissionSchema,
  userCreateSchema,
  userEditSchema,
  userChangePassSchema,
  userSetPassSchema
};

export default schemas;
