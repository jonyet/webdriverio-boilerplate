var expect = require('chai').expect;
var Home = require('../../page_objects/amazonPageObjects/amazonhomepage.js');
var Results = require('../../page_objects/amazonPageObjects/amazonresultspage.js');

describe('Amazon Search Assertion Demo', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('A user searches for "qa testing" and submits', function () {
      browser.click('#twotabsearchtextbox');
      Home.searchBar.keys('qa testing');
      browser.click('#nav-search > form > div.nav-right > div > input');
    });

    it('Shows a positive number of results', function(){
      Results.resultsCount.waitForExist();
      Results.resultsCount.waitForVisible();
      var results = Results.resultsCount.getText();
      var integers = results.split(" ").filter(function(int) {
        return int.match(/\d+/g);
      });
      var cleanInteger = integers[1].replace(/,/g, "");
      expect(parseInt(cleanInteger)).to.be.above(0);
      //replace the above expect() with the below code to see what a failure looks like
      // expect(parseInt(cleanInteger)).to.be.below(0);
    });

});
