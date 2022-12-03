'use strict';

import moment from 'moment';
import 'moment-timezone';
import constants from '@constants';
import { isEmpty } from 'lodash';

const attributeHelper = (req, data = {}, action) => {
  const { holderID } = req;

  const owner = !isEmpty(holderID) ? holderID : constants.DEFAULT_SYSTEM;

  const nowMoment = moment()
    .add(7, 'hours')
    .tz(constants.TIMEZONE_DEFAULT)
    .utc()
    .format();

  if (action === 'create') {
    data.createdAt = nowMoment;
    data.createdBy = owner;
    data.updatedAt = nowMoment;
    data.updatedBy = owner;
  }

  data.updatedAt = nowMoment;
  data.updatedBy = owner;

  return data;
};

export default attributeHelper;
