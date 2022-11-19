'use strict';

import { isEmpty, isEqual } from 'lodash';
import { validateEmail, validateStringLength } from '@utils';

// core
import { buildNewError } from '@core/common';

const validateUserCreate = ({ firstName, lastName, email }) => {
  switch (true) {
    case isEmpty(firstName):
      throw buildNewError('UserFirstNameIsRequired');
    case isEmpty(lastName):
      throw buildNewError('UserLastNameIsRequired');
    case isEmpty(email):
      throw buildNewError('UserEmailIsRequired');
    default:
      break;
  }

  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    throw buildNewError('UserEmailIsNotFormat');
  }
};

const validateUserUpdate = ({ firstName, lastName, email }) => {
  switch (true) {
    case isEmpty(firstName):
      throw buildNewError('UserFirstNameIsRequired');
    case isEmpty(lastName):
      throw buildNewError('UserLastNameIsRequired');
    case isEmpty(email):
      throw buildNewError('UserEmailIsRequired');
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
      throw buildNewError('UserCurrentPasswordIsRequired');
    case isEmpty(newPassword):
      throw buildNewError('UserNewPasswordIsRequired');
    case isEmpty(newPasswordConfirm):
      throw buildNewError('UserNewPasswordConfirmIsRequired');
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
      throw buildNewError('UserPasswordIsRequired');
    case isEmpty(passwordConfirm):
      throw buildNewError('UserPasswordConfirmIsRequired');
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
  const isValidPasswordLength = validateStringLength(password, 8, 'min');

  if (!isValidPasswordLength) {
    throw buildNewError('UserPasswordIsValidLength');
  }

  const isValidPasswordConfirmLength = validateStringLength(
    passwordConfirm,
    8,
    'min'
  );

  if (!isValidPasswordConfirmLength) {
    throw buildNewError('UserPasswordConfirmIsValidLength');
  }
};

const validateComparePassword = ({ password, passwordConfirm }, message) => {
  if (!isEqual(password, passwordConfirm)) {
    throw buildNewError(message);
  }
};

export {
  validateUserCreate,
  validateUserUpdate,
  validateUserChangePass,
  validateUserSetPass
};
