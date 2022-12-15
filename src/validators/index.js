'use strict';

import { validatorLogin } from './auth-validator';
import { validatorOrganization } from './organization-validator';
import { validatorProject } from './project-validator';
import { validatorRole } from './role-validator';
import { validatorPermission } from './permission-validator';
import {
  validatorUser,
  validatorUserSetPass,
  validatorUserResetPass,
  validatorUserChangePass
} from './user-validator';
import { validatorNotifyTemplateCreate } from './notify-template-validator';

export default {
  validatorLogin,
  validatorOrganization,
  validatorProject,
  validatorUser,
  validatorUserSetPass,
  validatorUserResetPass,
  validatorUserChangePass,
  validatorRole,
  validatorPermission,
  validatorNotifyTemplateCreate
};
