import 'regenerator-runtime/runtime';

import nconf from 'nconf';
import dotenv from 'dotenv';
import server from './server';
import { loadSettings } from './config/configurationAdaptor';
import db from './src/db';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const appSettingsFilePath = process.env.APP_SETTINGS_FILE_PATH;

console.log('appSettingsFilePath', appSettingsFilePath);

loadSettings(appSettingsFilePath)
  .then(() => {
    const dbOptions = {
      ...nconf.get('db'),
    };
    db.connect(dbOptions);

    const serverOptions = {
      ...nconf.get('server'),
    };
    server.createServer(serverOptions);
  })
  .catch((err) => {
    console.log(err);
  });
