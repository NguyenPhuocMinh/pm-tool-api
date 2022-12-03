'use strict';

import fs from 'fs';
import path from 'path';
import utils from '@utils';
import { get } from 'lodash';

export const getDataJsonHelper = () => {
  const configurePath = path.join(process.cwd(), './src/data/secret.json');

  const json = fs.readFileSync(configurePath);
  const configure = JSON.parse(json.toString());

  return configure;
};

export const getSecretJsonHelper = () => {
  const secret = getDataJsonHelper();

  const privateKey = get(secret, 'privateKey');
  const publicKey = get(secret, 'publicKey');

  const privateSecret = utils.convertSecretKey(privateKey, 'private');
  const publicSecret = utils.convertSecretKey(publicKey, 'public');

  return {
    privateSecret,
    publicSecret
  };
};

export const getDataConfigJsonHelper = () => {
  const configurePath = path.join(process.cwd(), './src/data/data.json');

  const json = fs.readFileSync(configurePath);
  const jsonConfigs = JSON.parse(json.toString());

  return jsonConfigs;
};
