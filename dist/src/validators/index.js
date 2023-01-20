'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authValidator = require("./auth-validator");
var _organizationValidator = require("./organization-validator");
var _projectValidator = require("./project-validator");
var _teamValidator = require("./team-validator");
var _roleValidator = require("./role-validator");
var _permissionValidator = require("./permission-validator");
var _userValidator = require("./user-validator");
var _notifyTemplateValidator = require("./notify-template-validator");
var _default = {
  validatorLogin: _authValidator.validatorLogin,
  validatorOrganization: _organizationValidator.validatorOrganization,
  validatorAddProjectsToOrganization: _organizationValidator.validatorAddProjectsToOrganization,
  validatorProjectCreateOrUpdate: _projectValidator.validatorProjectCreateOrUpdate,
  validatorAddTeamsToProject: _projectValidator.validatorAddTeamsToProject,
  validatorTeamCreateOrUpdate: _teamValidator.validatorTeamCreateOrUpdate,
  validatorUser: _userValidator.validatorUser,
  validatorUserSetPass: _userValidator.validatorUserSetPass,
  validatorUserResetPass: _userValidator.validatorUserResetPass,
  validatorUserChangePass: _userValidator.validatorUserChangePass,
  validatorRole: _roleValidator.validatorRole,
  validatorPermission: _permissionValidator.validatorPermission,
  validatorNotifyTemplateCreate: _notifyTemplateValidator.validatorNotifyTemplateCreate,
  validatorAddMembersToTeam: _teamValidator.validatorAddMembersToTeam
};
exports["default"] = _default;