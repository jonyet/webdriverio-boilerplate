'use strict';

var _amazonhomepage = require('../page_objects/amazonhomepage.js');

var _amazonhomepage2 = _interopRequireDefault(_amazonhomepage);

var _amazonresultspage = require('../page_objects/amazonresultspage.js');

var _amazonresultspage2 = _interopRequireDefault(_amazonresultspage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Amazon Search Assertion Demo', function () {

  before('On the Amazon home page...', function () {
    _amazonhomepage2.default.open();
    _amazonhomepage2.default.searchBar.waitForExist();
    _amazonhomepage2.default.searchBar.waitForVisible();
  });

  it('A user searches for "qa testing" and submits', function () {
    _amazonhomepage2.default.searchBar.click();
    _amazonhomepage2.default.searchBar.keys('qa testing');
    _amazonhomepage2.default.submitSearch.click();
  });

  it('Shows a positive number of results', function () {
    _amazonresultspage2.default.resultsCount.waitForExist();
    _amazonresultspage2.default.resultsCount.waitForVisible();
    var results = _amazonresultspage2.default.resultsCount.getText();
    var integers = results.split(" ").filter(function (int) {
      return int.match(/\d+/g);
    });
    var cleanInteger = integers[1].replace(/,/g, "");
    expect(parseInt(cleanInteger)).to.be.above(0);
  });
});