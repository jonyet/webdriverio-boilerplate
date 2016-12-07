'use strict';

var _amazonhomepage = require('../page_objects/amazonhomepage.js');

var _amazonhomepage2 = _interopRequireDefault(_amazonhomepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = './src/screenshots/Amazon/Home/';
var parentShot = root + '_amazonHomepage.png';

describe('Amazon Homepage CSS checks', function () {

  before('On the Amazon home page...', function () {
    _amazonhomepage2.default.open();
    _amazonhomepage2.default.searchBar.waitForExist();
    _amazonhomepage2.default.searchBar.waitForVisible();
    browser.saveScreenshot(parentShot);
  });

  it('The Navigation Bar looks correct', function () {
    browser.assertElementLayout(root, parentShot, 'navbar', _amazonhomepage2.default.navbar, 2);
  });
});