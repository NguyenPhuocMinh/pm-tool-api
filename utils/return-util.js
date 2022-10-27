'use strict';

const returnErrorMessage = (error) => {
  return {
    name: error.name,
    message: error.message
  };
};

const returnUtils = {
  returnErrorMessage
};

export default returnUtils;
