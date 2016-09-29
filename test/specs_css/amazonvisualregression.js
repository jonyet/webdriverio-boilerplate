var Home = require('../page_objects/amazonhomepage.js');

var root = './test/screenshots/Amazon/Home/'
var parentShot = root + '_amazonHomepage.png';

describe('Amazon Homepage CSS checks', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
      browser.saveScreenshot(parentShot);
    });

    it('The Navigation Bar looks correct', function () {
      browser.assertElementLayout(root, parentShot, 'navbar', Home.navbar, 2);
    });

});
