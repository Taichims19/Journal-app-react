

require('whatwg-fetch');
require('setimmediate');

require('dotenv').config({
  path: '.env.test'
});

jest.mock('./src/helpers/getEnviroments', () => ({
  getEnviroments: () => ({...process.env})
  
}));
