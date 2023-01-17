'use strict';

import moment from 'moment';
import 'moment-timezone';
import constants from '@constants';

export const parseError = (error) => {
  return {
    errName: error?.name || 'Error',
    errMessage: error?.message || 'Internal Server Error'
  };
};

export const parseDateTime = (dateTime) => {
  return moment(dateTime)
    .add(7, 'hours')
    .tz(constants.TIMEZONE_DEFAULT)
    .utc()
    .format();
};
