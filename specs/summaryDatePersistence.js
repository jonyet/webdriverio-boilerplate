var expect = require('chai').expect;
var moment = require('moment'); //example of how you can use other modules as needed 
var Summary = require('../page_objects/summarypage.js');

describe('Summary Page Date Defines Charts', function () {

    before('On the Summary grid', function () {
      Summary.open();
      Summary.campaignCompletionMax.waitForExist();
      Summary.campaignCompletionMax.waitForVisible();
    });

    it('Opt-in and Campaign Completion Ranges to be Today', function () {
      expect(browser.getText('#selectorGoesHere'));
      expect(browser.getText('#selectorGoesHere')).to.be.equal((moment().format('MMMM Do YYYY') + ' to ' + moment().format('MMMM Do YYYY')));
    });

    it('Each integer for "Complete" matches', function () {
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignProgressComplete.getText());
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignCompletionComplete.getText());
    });

    it('Campaign Progress is equal to total number of stateless campaigns', function () {
      expect(Number(Summary.campaignProgressOK.getText())).to.be.equal(Summary.campaignCompletionMax.getText() - Summary.campaignStatusComplete.getText() - Summary.campaignStatusError.getText() - Summary.campaignStatusWarning.getText());
    });

    it('Opt-in and Campaign Completion Ranges to become Yesterday', function () {
      browser.click('#selectorGoesHere')
      browser.click('#selectorGoesHere')
      Summary.campaignCompletionMax.waitForExist('#selectorGoesHere');
      Summary.campaignCompletionMax.waitForVisible('#selectorGoesHere');
      expect(browser.getText('#selectorGoesHere')).to.be.equal((moment().subtract(24, 'hours').format('MMMM Do YYYY') + ' to ' + moment().subtract(24, 'hours').format('MMMM Do YYYY')));
      expect(browser.getText('#selectorGoesHere')).to.be.equal((moment().subtract(24, 'hours').format('MMMM Do YYYY') + ' to ' + moment().subtract(24, 'hours').format('MMMM Do YYYY')));
    });

    it('Each integer for "Complete" matches', function () {
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignProgressComplete.getText());
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignCompletionComplete.getText());
    });

    it('Campaign Progress is equal to total number of stateless campaigns', function () {
      expect(Number(Summary.campaignProgressOK.getText())).to.be.equal(Summary.campaignCompletionMax.getText() - Summary.campaignStatusComplete.getText() - Summary.campaignStatusError.getText() - Summary.campaignStatusWarning.getText());
    });

    it('Opt-in and Campaign Completion Ranges to become Last 7 Days', function () {
      browser.click('#selectorGoesHere')
      browser.click('#selectorGoesHere')
      Summary.campaignCompletionMax.waitForExist('#selectorGoesHere');
      Summary.campaignCompletionMax.waitForVisible('#selectorGoesHere');
      expect(browser.getText('#selectorGoesHere')).to.be.equal((moment().subtract(7, 'days').format('MMMM Do YYYY') + ' to ' + moment().format('MMMM Do YYYY')));
      expect(browser.getText('#selectorGoesHere')).to.be.equal((moment().subtract(7, 'days').format('MMMM Do YYYY') + ' to ' + moment().format('MMMM Do YYYY')));
    });

    it('Each integer for "Complete" matches', function () {
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignProgressComplete.getText());
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignCompletionComplete.getText());
    });

    it('Campaign Progress is equal to total number of stateless campaigns', function () {
      expect(Number(Summary.campaignProgressOK.getText())).to.be.equal(Summary.campaignCompletionMax.getText() - Summary.campaignStatusComplete.getText() - Summary.campaignStatusError.getText() - Summary.campaignStatusWarning.getText());
    });
});
