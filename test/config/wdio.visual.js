require('dotenv').config();
var argv = require('yargs').argv;

if (argv.remote){
  var services = ['selenium-standalone', 'browserstack'];
  var user = process.env.REMOTE_USER;
  var key = process.env.REMOTE_PASSWORD;
} else {
  services = ['selenium-standalone'];
};

exports.config = {

  // Comment in the user/key with valid credentials to leverage BS API
  user: user,
  key: key,

  services: services,
  updateJob: false,

  // use of wdio-browserstack-service for automated local tunneling (required for amc work)
  // browserstackLocal: true,

  specs: [
      './test/specs_css/*.js'
  ],
  // Patterns to exclude.
  exclude: [
  ],

  capabilities: [{
      project: 'Amazon Test Demo',
      browserName: 'firefox',
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
  reporters: ['dot'],
    reporterOptions: {
        allure: {
            outputDir: './test/reports/allure-results/'
        }
    },

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
    browser.setViewportSize(JSON.parse(process.env.DEFAULT_VIEWPORT));
    var Resembler = require('../lib/Resembler');
    var resemble = new Resembler();
    var chai = require('chai'); //eslint-disable-line no-var
        global.expect = chai.expect;
        chai.Should();

    browser.addCommand("assertElementLayout", function async (rootdir, fullscreen, fileName, selector, threshold) {
      return browser.waitUntil(function(){
        return resemble.assertElementLayout(rootdir, fullscreen, fileName, selector, threshold);
      }, 55000, "Promise wasn't returned within 60 seconds", 65000);
    });
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
