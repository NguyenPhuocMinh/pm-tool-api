'use strict';

import CategoryModel from './category-model';
import ProductModel from './product-model';
import OrderModel from './order-model';
import CustomerModel from './customer-model';
import ReviewerModel from './reviewer-model';
import OrganizationModel from './organization-model';
import ProjectModel from './project-model';
import TeamModel from './team-model';
import RoleModel from './role-model';
import PermissionModel from './permission-model';
import UserModel from './user-model';
import UserSessionModel from './user-session-model';
import NotifyModel from './notify-model';
import NotifyConfigModel from './notify-config-model';
import NotifyTemplateModel from './notify-template-model';

const models = [
  CategoryModel,
  ProductModel,
  OrderModel,
  CustomerModel,
  ReviewerModel,
  OrganizationModel,
  ProjectModel,
  TeamModel,
  RoleModel,
  PermissionModel,
  UserModel,
  UserSessionModel,
  NotifyModel,
  NotifyConfigModel,
  NotifyTemplateModel
];

export default models;
