'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _yargs = require('yargs');

var _seleniumDefaults = require('./selenium-defaults');

var _seleniumDefaults2 = _interopRequireDefault(_seleniumDefaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var brow = void 0;

_yargs.argv.browser ? brow = _yargs.argv.browser : brow = 'chrome';

if (_yargs.argv.remote) {
  var services = ['browserstack'];
  var user = process.env.REMOTE_USER;
  var key = process.env.REMOTE_PASSWORD;
  var capabilities = [{
    project: 'Amazon Test Demo: ' + brow,
    browserName: brow,
    'browserstack.debug': true,
    'browser': brow,
    'resolution': JSON.parse(process.env.DEFAULT_VIEWPORT).width + 'x' + JSON.parse(process.env.DEFAULT_VIEWPORT).height
  }];
} else {
  services = ['selenium-standalone'], capabilities = [{
    browserName: brow
  }];
}

var config = exports.config = {

  // browserstack credentials
  user: user,
  key: key,

  services: services,
  seleniumArgs: _seleniumDefaults2.default,
  seleniumInstallArgs: _seleniumDefaults2.default, //remove these when 3.0.1 is new default

  updateJob: false,

  // use of wdio-browserstack-service for automated local tunneling
  browserstackLocal: true,

  specs: ['./test/specs/*.js'],
  // Patterns to exclude.
  exclude: [
    // './test/specs/amazonSearchTest.js',
    // './test/specs/amazonShoppingCart.js'
  ],

  capabilities: capabilities,

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
  reporters: ['dot' /*, 'sumologic'*/],
  reporterOptions: {
    sumologic: {
      syncInterval: 100,
      sourceAddress: process.env.SUMO_SOURCE_ADDRESS
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
  onPrepare: function onPrepare() {
    // do something
  },


  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before: function before() {
    browser.setViewportSize(JSON.parse(process.env.DEFAULT_VIEWPORT));
    var Resembler = require('../lib/Resembler');
    var resemble = new Resembler();
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();

    browser.addCommand("assertElementLayout", function async(rootdir, fullscreen, fileName, selector, threshold) {
      return browser.waitUntil(function () {
        return resemble.assertElementLayout(rootdir, fullscreen, fileName, selector, threshold);
      }, 55000, "Promise wasn't returned within 60 seconds", 65000);
    });
  },


  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after: function after() {
    // do something
  },


  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete: function onComplete() {
    // do something
  }
};