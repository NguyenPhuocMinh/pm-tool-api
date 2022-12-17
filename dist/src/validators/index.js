'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authValidator = require("./auth-validator");
var _organizationValidator = require("./organization-validator");
var _projectValidator = require("./project-validator");
var _roleValidator = require("./role-validator");
var _permissionValidator = require("./permission-validator");
var _userValidator = require("./user-validator");
var _notifyTemplateValidator = require("./notify-template-validator");
var _default = {
  validatorLogin: _authValidator.validatorLogin,
  validatorOrganization: _organizationValidator.validatorOrganization,
  validatorProject: _projectValidator.validatorProject,
  validatorUser: _userValidator.validatorUser,
  validatorUserSetPass: _userValidator.validatorUserSetPass,
  validatorUserResetPass: _userValidator.validatorUserResetPass,
  validatorUserChangePass: _userValidator.validatorUserChangePass,
  validatorRole: _roleValidator.validatorRole,
  validatorPermission: _permissionValidator.validatorPermission,
  validatorNotifyTemplateCreate: _notifyTemplateValidator.validatorNotifyTemplateCreate
};
exports["default"] = _default;