var expect = require('chai').expect;
var Home = require('../page_objects/amazonhomepage.js');
var Results = require('../page_objects/amazonresultspage.js');

describe('Amazon Search Assertion Demo', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('A user searches for "qa testing" and submits', function () {
      Home.searchBar.click();
      Home.searchBar.keys('qa testing');
      Home.submitSearch.click();
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
    });

});
//
//
// User = {
//   first: 'zach',
//   last: 'hern',
//   fingers: {
//     one: true,
//     two: false,
//     three: true,
//     ..
//   }
// }
//
// User.first = 'zach'
// User.fingers.two = false
//
