'use strict';

import * as Sentry from '@sentry/node';
import configs from '../../configs';

Sentry.init({
  dsn: configs.sentryDsn,
  tracesSampleRate: 1.0
});

const sentryCommon = Sentry;

export default sentryCommon;
