'use strict';

import { notifyTemplateController } from '@mappings/controllers';

/**
 * @description Notify Template router
 */
const notifyTemplateRouter = [
  {
    pathName: '/notifyTemplates',
    method: 'GET',
    methodName: 'getAllNotifyTemplate',
    controller: notifyTemplateController.getAllNotifyTemplate
  },
  {
    pathName: '/notifyTemplates',
    method: 'POST',
    methodName: 'createNotifyTemplate',
    controller: notifyTemplateController.createNotifyTemplate
  }
];

export default notifyTemplateRouter;
