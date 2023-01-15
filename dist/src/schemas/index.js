'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _authSchema = require("./auth-schema");
var _organizationSchema = require("./organization-schema");
var _projectSchema = require("./project-schema");
var _teamSchema = require("./team-schema");
var _roleSchema = require("./role-schema");
var _permissionSchema = require("./permission-schema");
var _userSchema = require("./user-schema");
var _notifyTemplateSchema = require("./notify-template-schema");
var schemas = {
  signInSchema: _authSchema.signInSchema,
  signOutSchema: _authSchema.signOutSchema,
  refreshTokenSchema: _authSchema.refreshTokenSchema,
  organizationSchema: _organizationSchema.organizationSchema,
  projectSchema: _projectSchema.projectSchema,
  teamSchema: _teamSchema.teamSchema,
  roleSchema: _roleSchema.roleSchema,
  permissionSchema: _permissionSchema.permissionSchema,
  userCreateSchema: _userSchema.userCreateSchema,
  userEditSchema: _userSchema.userEditSchema,
  userChangePassSchema: _userSchema.userChangePassSchema,
  userSetPassSchema: _userSchema.userSetPassSchema,
  userResetPassSchema: _userSchema.userResetPassSchema,
  notifyTemplateSchema: _notifyTemplateSchema.notifyTemplateSchema
};
var _default = schemas;
exports["default"] = _default;