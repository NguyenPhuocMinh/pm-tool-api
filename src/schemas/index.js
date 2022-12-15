'use strict';

import { signInSchema, signOutSchema, refreshTokenSchema } from './auth-schema';
import { organizationSchema } from './organization-schema';
import { projectSchema } from './project-schema';
import { roleSchema } from './role-schema';
import { permissionSchema } from './permission-schema';
import {
  userCreateSchema,
  userEditSchema,
  userChangePassSchema,
  userSetPassSchema,
  userResetPassSchema
} from './user-schema';
import { notifyTemplateSchema } from './notify-template-schema';

const schemas = {
  signInSchema,
  signOutSchema,
  refreshTokenSchema,
  organizationSchema,
  projectSchema,
  roleSchema,
  permissionSchema,
  userCreateSchema,
  userEditSchema,
  userChangePassSchema,
  userSetPassSchema,
  userResetPassSchema,
  notifyTemplateSchema
};

export default schemas;
