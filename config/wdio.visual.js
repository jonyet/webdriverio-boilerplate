var argv = require('yargs').argv;

exports.config = {

  // Comment in the user/key with valid credentials to leverage BS API
  // user: 'browserstackUsername',
  // key: 'browserstackPassword',

  services: ['selenium-standalone'],
  updateJob: false,

  specs: [
      './specs.css/*.js'
  ],
  // Patterns to exclude.
  exclude: [
  ],

  capabilities: [{
      browserName: 'chrome',
      'browserstack.debug': true,
  }],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errScreens',
  baseUrl: 'https://zombo.com',
  waitforTimeout: 20000,
  // maxInstances: 3,

  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  plugins: {
    'wdio-screenshot': {}
    // webdrivercss: {
    //     screenshotRoot: 'my-shots',
    //     failedComparisonsRoot: 'diffs',
    //     misMatchTolerance: 0.05,
    //     screenWidth: [320,480,640,1024]
    // },
    // webdriverrtc: {},
    // browserevent: {}
  },

  framework: 'mocha',
  reporters: ['dot', /*'allure'*/],

  mochaOpts: {
      ui: 'bdd',
      timeout: 60000
  },

  //
  // =====
  // Hooks
  // =====
  // Gets executed before all workers get launched.
  onPrepare: function() {
      // do something
  },

  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before: function() {
      // do something
  },

  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after: function() {
      // do something
  },

  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete: function() {
      // do something
  }
};
