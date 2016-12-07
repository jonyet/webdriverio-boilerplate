import dotenv from 'dotenv'
dotenv.config()
import {argv} from 'yargs';
import seleniumArgs from './selenium-defaults';

if (argv.remote){
  var services = ['browserstack'];
  var user = process.env.REMOTE_USER;
  var key = process.env.REMOTE_PASSWORD;
} else {
  services = ['selenium-standalone'];
}

export const config = {

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
      './test/specs_css/*.js'
  ],
  // Patterns to exclude.
  exclude: [
  ],

  capabilities: [{
    project: 'Amazon Test Demo',
    'browserstack.debug': true,
    'browserstack.local': true,
    'os': 'OS X',
    'os_version': 'El Capitan',
    'browser': 'Firefox',
    'browser_version': '47.0',
    'resolution': `${JSON.parse(process.env.DEFAULT_VIEWPORT).width}x${JSON.parse(process.env.DEFAULT_VIEWPORT).height}`
  }],

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
  reporters: ['dot'/*, 'sumologic'*/],
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
  onPrepare() {
      // do something
  },

  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before() {
    browser.setViewportSize(JSON.parse(process.env.DEFAULT_VIEWPORT));
    const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    const Resembler = require('../lib/Resembler');
    const resemble = new Resembler();

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
