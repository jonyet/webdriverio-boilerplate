const fs = require('fs')
const path = './.env'

try {
  if (fs.existsSync(path)) {
    require('dotenv').config()
  }
} catch (err) {
  console.log('No .env file found')
}

exports.config = {
  services: ['selenium-standalone', 'chromedriver'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['disable-infobars'],
      },
    },
  ],
  updateJob: false,
  specs: [],
  exclude: [],
  suites: {},
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './error/screenshots',
  waitforTimeout: 30000,
  deprecationWarnings: false,
  plugins: {
    'wdio-screenshot': {},
  },
  framework: 'mocha',
  reporters: ['dot'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60 * 1000,
  },

  // Gets executed before all workers get launched.
  onPrepare() {},
  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before() {
    const chai = require('chai')
    global.expect = chai.expect
  },
  after() {},
  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete() {},
}
