'use strict';

import { signInSchema, signOutSchema, refreshTokenSchema } from './auth-schema';
import { productSchema } from './product-schema';
import { customerRegisterSchema } from './customer-schema';
import { organizationSchema } from './organization-schema';
import { projectSchema } from './project-schema';
import { teamSchema } from './team-schema';
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
  productSchema,
  customerRegisterSchema,
  organizationSchema,
  projectSchema,
  teamSchema,
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
