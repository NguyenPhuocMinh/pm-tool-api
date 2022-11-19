'use strict';

export const validateEmail = (input) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(input);
};

export const validateStringLength = (input, length, operator) => {
  let isValid = true;

  switch (operator) {
    case 'min':
      if (input.length < length) {
        isValid = false;
      }
      break;
    case 'max':
      if (input.length > length) {
        isValid = false;
      }
      break;
  }

  return isValid;
};
