'use strict';

import baseController from './base-controller';

import constants from '../../constants';
import logUtils from '../../utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.HOME_CONTROLLER
);

/**
 * @description Home Page Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const homePage = (req, res, next) => {
  loggerFactory.info(`Function homePage Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeHome,
    constants.actions.MsgActionHomePage
  );
  loggerFactory.info(`Function homePage Controller has been end`);
};

const homeController = {
  homePage
};

export default homeController;
