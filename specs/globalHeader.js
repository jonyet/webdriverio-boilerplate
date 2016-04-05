var expect = require('chai').expect;
var moment = require('moment');
var Summary = require('../page_objects/summarypage.js');
var Campaigns = require('../page_objects/campaignpage.js');
var Systems = require('../page_objects/systemspage.js');
var Reports = require('../page_objects/reportspage.js');

describe('Global Header Tests', function () {

    before('Upon reaching C3PO', function () {
      Summary.open();
      Summary.campaignCompletionMax.waitForExist();
    });

    it('The Global Header is loaded', function () {
      Summary.campaignCompletionMax.waitForVisible();
      // expect(Summary.unresolvedIssues.getText()).to.not.equal('');
    });

    it('Successfully links to Campaigns', function () {
      browser.click('#selectorGoesHere');
      Campaigns.refreshData.waitForExist();
      Campaigns.refreshData.waitForVisible();
      expect(Campaigns.globalHeader.getUrl()).to.be.equal('https://yourwebsite.com/campaign');
    });

    it('Successfully appends a date query string', function () {
      browser.pause(1000); //wait for the query to be appended, else it will fall onto the systems url and fail both tests
      var startDate = moment(moment({hour: 4})).format('YYYY-MM-DDThh:mm:ss.SSS') + 'Z'; // 2015-05-03T08:47:26Z (mongo format)
      var endDate = moment(moment({hour: 4})).add(23, 'hours').add(59, 'minutes').add(59, 'seconds').add(999, 'milliseconds').format('YYYY-MM-DDThh:mm:ss.SSS') + 'Z'; // 2015-05-03T08:47:26Z (mongo format)
      expect(Campaigns.globalHeader.getUrl()).to.be.equal('https://yourwebsite.com/campaign?processFilter=&orderBy=name&reverse=false&date.startDate=' + startDate + '&date.endDate=' + endDate);
    });

    it('Successfully links to Systems', function () {
      browser.click('#selectorGoesHere');
      Systems.summaryView.waitForExist();
      Systems.summaryView.waitForVisible();
      expect(Systems.summaryView.getUrl()).to.be.equal('https://yourwebsite.com/systems');
    });

    it('Logo-nav successfully links to Summary', function () {
      browser.click('#selectorGoesHere');
      Summary.campaignCompletionMax.waitForExist();
      Summary.campaignCompletionMax.waitForVisible();
      expect(Summary.globalHeader.getUrl()).to.be.equal('https://yourwebsite.com/summary');
    });

    it('Successfully links to Reports', function () {
      browser.click('#selectorGoesHere');
      Reports.reportsView.waitForExist();
      Reports.reportsView.waitForVisible();
      expect(Reports.globalHeader.getUrl()).to.be.equal('https://yourwebsite.com/reports');
    });

    it('Successfully links to Summary', function () {
      browser.click('#selectorGoesHere');
      Summary.campaignCompletionMax.waitForExist();
      Summary.campaignCompletionMax.waitForVisible();
      expect(Summary.globalHeader.getUrl()).to.be.equal('https://yourwebsite.com/summary');
    });
});
