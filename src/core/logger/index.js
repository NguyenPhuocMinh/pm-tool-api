'use strict';

import winston from 'winston';

import options from '@conf/options';
import constants from '@constants';
import { formatUtils } from '@core/utils';

const createLogger = (appName = '-', structName = '-') => {
  const logger = winston.createLogger({
    levels: options.loggerOptions.levels,
    format: winston.format.combine(
      winston.format((info) => ({
        ...info,
        level: info.level.toUpperCase()
      }))(),
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({ format: constants.DATE_TIMESTAMP_FORMAT }),
      winston.format.label({
        label: formatUtils.formatLabelLog(appName, structName)
      }),
      winston.format.printf((info) => formatUtils.formatInfoLog(info))
    ),
    transports: [new winston.transports.Console({ level: 'data' })]
  });
  return logger;
};

const logError = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.error(message, meta);
};

const logWarn = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.warn(message, meta);
};

const logInfo = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.info(message, meta);
};

const logDebug = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.debug(message, meta);
};

const logHttp = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.http(message, meta);
};

const logVerbose = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.verbose(message, meta);
};

const logSilly = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.silly(message, meta);
};

const logData = (appName, structName, message, meta) => {
  const logger = createLogger(appName, structName);
  return logger.data(message, meta);
};

const logger = {
  createLogger,
  error: logError,
  warn: logWarn,
  info: logInfo,
  debug: logDebug,
  http: logHttp,
  verbose: logVerbose,
  silly: logSilly,
  data: logData
};

export default logger;
