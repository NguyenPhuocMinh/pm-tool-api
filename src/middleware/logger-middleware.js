'use strict';

import constants from '@constants';

// core
import loggerManager from '@core/logger';

const logger = loggerManager(
  constants.APP_NAME,
  constants.STRUCT_MIDDLEWARE.LOG_MIDDLEWARE
);

const loggerMiddleware = (tokens, req, res) => {
  const remoteAddr = tokens['remote-addr'](req);
  const remoteUser = tokens['remote-user'](req) || '-';
  const dateClf = tokens.date(req, res, 'clf');
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const protocol = req.protocol;
  const httpVersion = tokens['http-version'](req);
  const status = tokens.status(req, res) || '-';
  const contentLength = tokens.res(req, res, 'content-length') || '-';
  const resTime = tokens['response-time'](req, res) || '-';
  const referrer = tokens.referrer(req) || '-';
  const userAgent = tokens['user-agent'](req) || '-';
  const requestID = req.requestID;

  const messageLog = `[${requestID}] - ${remoteAddr} - ${remoteUser} [${dateClf}] "${method} ${url} ${protocol}/${httpVersion}" ${status} ${contentLength} "${referrer}" "${userAgent}" - ${resTime} ms`;

  switch (status) {
    case constants.HTTP_STATUS.BAD_REQUEST:
    case constants.HTTP_STATUS.UN_AUTHORIZATION:
    case constants.HTTP_STATUS.FORBIDDEN:
    case constants.HTTP_STATUS.NOT_FOUND:
      logger.warn(messageLog);
      break;
    case constants.HTTP_STATUS.INTERNAL_SERVER_ERROR:
      logger.error(messageLog);
      break;
    case constants.HTTP_STATUS.SUCCESS:
    case constants.HTTP_STATUS.CREATED:
    case constants.HTTP_STATUS.ACCEPTED:
      logger.info(messageLog);
      break;
    case constants.HTTP_STATUS.METHOD_NOT_ALLOW:
      logger.verbose(messageLog);
      break;
    case constants.HTTP_STATUS.DUPLICATE:
      logger.debug(messageLog);
      break;
    default:
      logger.silly(messageLog);
      break;
  }
};

export default loggerMiddleware;
