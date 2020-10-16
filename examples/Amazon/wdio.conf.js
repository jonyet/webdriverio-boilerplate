const master = require('../../wdio.conf')

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.amazon.com/',
  specs: ['./examples/Amazon/**/*.test.js'],
  logLevel: 'error',
  suites: {
    dev: ['./examples/Amazon/E2E/searchExample.test.js'],
    integration: ['./examples/Amazon/Integration/**/*.test.js'],
    e2e: ['./examples/Amazon/E2E/*.test.js'],
  },
  reporters: ['spec'],
  maxInstances: 6,
  services: ['browserstack'],
  capabilities: [
    {
      project: `Amazon Example`,
      'browserstack.debug': true,
      browser: 'chrome',
      'goog:chromeOptions': {
        args: ['disable-infobars'],
      },
      resolution: '1280x1024',
      os: 'Windows',
      os_version: '10',
      'browserstack.geoLocation': 'US',
      'browserstack.console': 'errors',
      'browserstack.networkLogs': true,
    },
  ],
  //browserstack credentials
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
})
