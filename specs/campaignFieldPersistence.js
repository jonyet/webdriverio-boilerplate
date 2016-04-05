var expect = require('chai').expect;
var Campaign = require('../page_objects/campaignpage.js');

describe('Campaign Field Persistence', function () {

    before('On the Campaigns Page', function () {
      Campaign.open();
      Campaign.refreshData.waitForExist();
      Campaign.refreshData.waitForVisible();
    });

    it('Date and Filter persist upon search', function () {
      var date = Campaign.dateRange.getText();
      Campaign.search.keys('responder');
      expect(Campaign.dateRange.getText()).to.be.equal(date);
    });
});
