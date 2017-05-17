import Home from '../page_objects/amazonhomepage.js';
import Results from '../page_objects/amazonresultspage.js';

describe('Amazon Search Assertion Demo', () => {

    before('On the Amazon home page...', () => {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('A user searches for "qa testing"', () => {
      Home.searchBar.click();
      Home.searchBar.setValue('qa testing');
      Home.submitSearch.click();
    });

    it('Shows a positive number of results', () => {
      Results.resultsCount.waitForExist();
      Results.resultsCount.waitForVisible();
      //regex drags nums out of results text and pushes to an array
      const regex = /\d\s*\-\s*(\d+){1}\s*(?:of)?(\s*\d+)?\s*.*/g
      const nums = regex.exec(Results.resultsCount.getText());
      expect(parseInt(nums[1])).to.be.above(0);
    });

});
