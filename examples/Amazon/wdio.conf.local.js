const master = require('../../wdio.conf')

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.amazon.com/',
  specs: ['./examples/Amazon/**/*.test.js'],
  logLevel: 'error',
  suites: {
    dev: ['./examples/Amazon/Integration/Navigation/nav-expander.test.js'],
    integration: ['./examples/Amazon/Integration/**/*.test.js'],
    e2e: ['./examples/Amazon/E2E/*.test.js'],
  },
  reporters: ['spec'],
  maxInstances: 2,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['disable-infobars'],
      },
    },
    // {
    //   browserName: 'firefox'
    // }
  ],
})
