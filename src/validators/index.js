'use strict';

import { validatorLogin } from './auth-validator';
import { validatorOrganization } from './organization-validator';
import {
  validatorProjectCreateOrUpdate,
  validatorAddTeamsToProject
} from './project-validator';
import {
  validatorTeamCreateOrUpdate,
  validatorAddMembersToTeam
} from './team-validator';
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
  validatorProjectCreateOrUpdate,
  validatorAddTeamsToProject,
  validatorTeamCreateOrUpdate,
  validatorUser,
  validatorUserSetPass,
  validatorUserResetPass,
  validatorUserChangePass,
  validatorRole,
  validatorPermission,
  validatorNotifyTemplateCreate,
  validatorAddMembersToTeam
};
