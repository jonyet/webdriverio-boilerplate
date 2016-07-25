var expect = require('chai').expect;
var Home = require('../page_objects/amazonPageObjects/amazonhomepage.js');

describe('Amazon Homepage CSS checks', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('The Navigation Bar looks correct', function () {
      browser.assertElementLayout('navbar', Home.navbar);
    });

    it('The Footer Bar has not changed', function () {
      browser.assertElementLayout('footCol1', Home.footColOne);
      browser.assertElementLayout('footCol2', Home.footColTwo);
    });

    it('The Gridwall content looks correct (omitting column 3)', function () {
      browser.assertElementLayout('gwCol1', Home.gwColOne);
      browser.assertElementLayout('gwCol2', Home.gwColTwo);
      browser.assertElementLayout('gwCol4', Home.gwColFour);
    });

});
