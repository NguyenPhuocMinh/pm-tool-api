'use strict';

import { isEmpty, isEqual } from 'lodash';

import errorCommon from '../core/common/error-common';
import validateUtils from '../utils/validate-util';

const validateUserCreate = ({ firstName, lastName, email }) => {
  switch (true) {
    case isEmpty(firstName):
      throw errorCommon.BuildNewError('UserFirstNameIsRequired');
    case isEmpty(lastName):
      throw errorCommon.BuildNewError('UserLastNameIsRequired');
    case isEmpty(email):
      throw errorCommon.BuildNewError('UserEmailIsRequired');
    default:
      break;
  }

  const isValidEmail = validateUtils.validateEmail(email);
  if (!isValidEmail) {
    throw errorCommon.BuildNewError('UserEmailIsNotFormat');
  }
};

const validateUserUpdate = ({ firstName, lastName, email }) => {
  switch (true) {
    case isEmpty(firstName):
      throw errorCommon.BuildNewError('UserFirstNameIsRequired');
    case isEmpty(lastName):
      throw errorCommon.BuildNewError('UserLastNameIsRequired');
    case isEmpty(email):
      throw errorCommon.BuildNewError('UserEmailIsRequired');
    default:
      break;
  }
};

const validateUserChangePass = ({
  currentPassword,
  newPassword,
  newPasswordConfirm
}) => {
  switch (true) {
    case isEmpty(currentPassword):
      throw errorCommon.BuildNewError('UserCurrentPasswordIsRequired');
    case isEmpty(newPassword):
      throw errorCommon.BuildNewError('UserNewPasswordIsRequired');
    case isEmpty(newPasswordConfirm):
      throw errorCommon.BuildNewError('UserNewPasswordConfirmIsRequired');
    default:
      break;
  }

  // validate length
  validatePasswordLength(newPassword, newPasswordConfirm);

  // validate compare
  validateComparePassword(
    { password: newPassword, passwordConfirm: newPasswordConfirm },
    'UserNewPasswordConfirmNotMatches'
  );
};

const validateUserSetPass = ({ password, passwordConfirm }) => {
  switch (true) {
    case isEmpty(password):
      throw errorCommon.BuildNewError('UserPasswordIsRequired');
    case isEmpty(passwordConfirm):
      throw errorCommon.BuildNewError('UserPasswordConfirmIsRequired');
    default:
      break;
  }

  // validate length
  validatePasswordLength(password, passwordConfirm);

  // validate compare
  validateComparePassword(
    { password: password, passwordConfirm: passwordConfirm },
    'UserPasswordConfirmNotMatches'
  );
};

const validatePasswordLength = (password, passwordConfirm) => {
  const isValidPasswordLength = validateUtils.validateStringLength(
    password,
    8,
    'min'
  );

  if (!isValidPasswordLength) {
    throw errorCommon.BuildNewError('UserPasswordIsValidLength');
  }

  const isValidPasswordConfirmLength = validateUtils.validateStringLength(
    passwordConfirm,
    8,
    'min'
  );

  if (!isValidPasswordConfirmLength) {
    throw errorCommon.BuildNewError('UserPasswordConfirmIsValidLength');
  }
};

const validateComparePassword = ({ password, passwordConfirm }, message) => {
  if (!isEqual(password, passwordConfirm)) {
    throw errorCommon.BuildNewError(message);
  }
};

export {
  validateUserCreate,
  validateUserUpdate,
  validateUserChangePass,
  validateUserSetPass
};
