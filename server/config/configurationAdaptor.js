import nconf from 'nconf';
import _ from 'lodash';

const loadSettings = (settingsPath) => new Promise((resolve, reject) => {
  try {
    if (_.isEmpty(settingsPath)) {
      throw new Error('Configuration settings path is required.');
    }
    nconf.file({
      file: settingsPath,
      logicalSeparator: '.',
    });
    resolve();
  } catch (err) {
    reject(err);
  }
});

module.exports.loadSettings = loadSettings;
