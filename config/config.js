import { devConfig } from './dev';
import { testConfig } from './test';
import { prodConfig } from './prod';

const config = {
  development: 'dev',
  testing: 'test',
  production: 'prod',
  port: process.env.PORT || 3000,
  secrets: {
    jwt: process.env.JWT || 'exaltedapisecret'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

let envConfig;

try {
  switch (config.env) {
  case 'prod':
    envConfig = prodConfig;
    break;
  case 'test':
    envConfig = testConfig;
    break;
  default:
    envConfig = devConfig;
    break;
  }
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

export default Object.assign(config, envConfig);
