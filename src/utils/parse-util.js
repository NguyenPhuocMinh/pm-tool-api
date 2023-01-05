'use strict';

export const parseError = (error) => {
  return {
    errName: error?.name || 'Error',
    errMessage: error?.message || 'Internal Server Error'
  };
};
