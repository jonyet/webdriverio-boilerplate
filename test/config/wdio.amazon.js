require('dotenv').config();
var argv = require('yargs').argv;
var seleniumArgs = require('./selenium-defaults');

let brow, services, user, key, capabilities

(argv.browser) ? (brow = argv.browser) : (brow = 'chrome');

if (argv.remote){
  services = ['browserstack'];
  user = process.env.REMOTE_USER;
  key = process.env.REMOTE_PASSWORD;
  capabilities = [{
      project: `Amazon Test Demo: ${brow}`,
      browserName: brow,
      chromeOptions: { args: ['disable-infobars'] },
      'browserstack.debug': true,
      'browser': brow,
      'resolution': `${JSON.parse(process.env.DEFAULT_VIEWPORT).width}x${JSON.parse(process.env.DEFAULT_VIEWPORT).height}`
  }]
} else {
  services = ['selenium-standalone'],
  capabilities = [{
      browserName: brow,
      chromeOptions: { args: ['disable-infobars'] }
  }]
}

exports.config = {

  // browserstack credentials
  user,
  key,

  services,
  seleniumArgs,
  seleniumInstallArgs: seleniumArgs, //remove these when 3.0.1 is new default

  updateJob: false,

  // use of wdio-browserstack-service for automated local tunneling
  browserstackLocal: true,

  specs: [
      './test/specs/*.js'
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/amazonSearchTest.js',
    // './test/specs/amazonShoppingCart.js'
  ],

  capabilities,

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errScreens',
  baseUrl: 'https://www.amazon.com',
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
  reporters: ['spec'/*, 'sumologic'*/],
    reporterOptions: {
        sumologic: {
          syncInterval: 100,
          sourceAddress: process.env.SUMO_SOURCE_ADDRESS
        }
    },

  mochaOpts: {
      ui: 'bdd',
      compilers: ['js:babel-register'],
      timeout: 60000
  },

  //
  // =====
  // Hooks
  // =====
  // Gets executed before all workers get launched.
  onPrepare() {
      // do something
  },

  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before() {
    browser.setViewportSize(JSON.parse(process.env.DEFAULT_VIEWPORT));
    const Resembler = require('../lib/Resembler');
    const resemble = new Resembler();
    const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();

    browser.addCommand("assertElementLayout", function async (rootdir, fullscreen, fileName, selector, threshold) {
      return browser.waitUntil(() => resemble.assertElementLayout(rootdir, fullscreen, fileName, selector, threshold), 55000, "Promise wasn't returned within 60 seconds", 65000);
    });
  },

  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after() {
      // do something
  },

  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete() {
      // do something
  }
};
