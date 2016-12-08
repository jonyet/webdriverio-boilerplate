import Home from '../page_objects/amazonhomepage.js';

const root = './test/screenshots/Amazon/Home/';
const parentShot = `${root}_amazonHomepage.png`;

describe('Amazon Homepage CSS checks', () => {

    before('On the Amazon home page...', () => {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
      browser.saveDocumentScreenshot(parentShot);
    });

    it('The Navigation Bar looks correct', () => {
      browser.assertElementLayout(root, parentShot, 'navbar', Home.navbar, 2);
    });

});
