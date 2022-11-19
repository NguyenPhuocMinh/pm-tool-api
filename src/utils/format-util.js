'use strict';

import slugify from 'slugify';
import { convertLogMessage, convertLogArgs } from '@utils';

export const formatLabelLog = (appName, structName) => {
  return `${appName}:${structName}`;
};

export const formatInfoLog = (info) => {
  const { label, level, message, timestamp, args } = info;

  const { levelLog, labelLog, messageLog, timestampLog } = convertLogMessage(
    level,
    label,
    message,
    timestamp
  );

  const { argsLog } = convertLogArgs(level, args);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

export const formatErrorMessage = (error) => {
  return {
    name: error?.name || 'Error',
    message: error?.message || 'Internal Server Error'
  };
};

export const formatSlug = (input, locale = 'en') => {
  return slugify(input, { locale, lower: true });
};

export const formatFullName = (firstName = '-', lastName = '-') => {
  return `${lastName} ${firstName}`;
};
