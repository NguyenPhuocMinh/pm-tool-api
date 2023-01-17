'use strict';

import moment from 'moment';
import { isEmpty } from 'lodash';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const loggerFactory = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_TRANSFERS.PROJECT_TRANSFER
);

const projectTransfer = (data) => {
  loggerFactory.data('Func projectTransfer has been start');
  const response = {};

  if (!isEmpty(data)) {
    data = data.toJSON();

    const {
      _id,
      name,
      description,
      startDay,
      endDay,
      organization,
      teams,
      activated,
      createdAt
    } = data;

    response.id = _id;
    response.name = name;
    response.description = description;
    response.startDay = moment(startDay);
    response.endDay = moment(endDay);
    response.activated = activated;
    response.organizationId = convertData(organization).id;
    response.organizationName = convertData(organization).name;
    response.teams = !isEmpty(teams)
      ? teams.map((team) => convertData(team))
      : [];
    response.createdAt = createdAt;

    loggerFactory.data('Func projectTransfer has data');

    return response;
  }

  loggerFactory.data('Func projectTransfer without data');
  return response;
};

const convertData = (data) => {
  return {
    id: data?._id ?? '-',
    name: data?.name ?? '-'
  };
};

export default projectTransfer;
