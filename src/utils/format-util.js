'use strict';

import utils from '@utils';

export const formatLabelLog = (appName, structName) => {
  return `${appName}:${structName}`;
};

export const formatInfoLog = (info) => {
  const { label, level, message, timestamp, args } = info;

  const { levelLog, labelLog, messageLog, timestampLog } = utils.convertLogMsg(
    level,
    label,
    message,
    timestamp
  );

  const { argsLog } = utils.convertLogArgs(level, args);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

export const formatErrorMsg = (error) => {
  return {
    name: error?.name || 'Error',
    message: error?.message || 'Internal Server Error'
  };
};

export const formatFullName = (firstName = '-', lastName = '-') => {
  return `${lastName} ${firstName}`;
};
