var expect = require('chai').expect;
var Home = require('../page_objects/amazonPageObjects/amazonhomepage.js');
var Resembler = require('../lib/Resembler');
var resemble = new Resembler();

describe('Amazon Homepage CSS checks', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('The Navigation Bar looks correct', function () {
      browser.waitUntil(function(){
        return resemble.assertElementLayout('navbar', Home.navbar, true);
      });
    });

});
