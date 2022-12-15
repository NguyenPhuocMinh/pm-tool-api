'use strict';

import { notifyTemplateController } from '@mappings/controllers';

/**
 * @description Notify Template router
 */
const notifyTemplateRouter = [
  {
    pathName: '/notify-templates',
    method: 'GET',
    methodName: 'getAllNotifyTemplate',
    controller: notifyTemplateController.getAllNotifyTemplate
  },
  {
    pathName: '/notify-templates',
    method: 'POST',
    methodName: 'createNotifyTemplate',
    controller: notifyTemplateController.createNotifyTemplate
  }
];

export default notifyTemplateRouter;
