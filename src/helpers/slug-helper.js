'use strict';

import slugify from 'slugify';

const slugHelper = (input = '', locale = 'en') => {
  return slugify(input, { locale, lower: true });
};

export default slugHelper;
