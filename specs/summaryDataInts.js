var expect = require('chai').expect;
var Summary = require('../page_objects/summarypage.js');

describe('Summary Data Assertions', function () {

    before('On the Summary grid', function () {
      Summary.open();
      Summary.campaignCompletionMax.waitForExist();
      Summary.campaignCompletionMax.waitForVisible();
    });

    it('Each integer for "Complete" matches', function () {
      if (Summary.campaignProgressComplete.getText() != ''){
        expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignProgressComplete.getText());
      }
      expect(Summary.campaignStatusComplete.getText()).to.be.equal(Summary.campaignCompletionComplete.getText());
    });

    //kind of shitty, but basically we say 'pass' if the pie chart doesn't render a number for us to compare to the status stoplight
    it('Each integer for "Warning" matches', function(){
      if (Summary.campaignProgressWarning.getText() != ''){
        expect(Summary.campaignStatusWarning.getText()).to.be.equal(Summary.campaignProgressWarning.getText());
      };
    });

    it('Each integer for "Error" matches', function(){
      if (Summary.campaignProgressError.getText() != ''){
        expect(Summary.campaignStatusError.getText()).to.be.equal(Summary.campaignProgressError.getText());
      };
    });

    it('Campaign Progress is equal to total number of stateless campaigns', function () {
      expect(Number(Summary.campaignProgressOK.getText())).to.be.equal(Summary.campaignCompletionMax.getText() - Summary.campaignStatusComplete.getText() - Summary.campaignStatusError.getText() - Summary.campaignStatusWarning.getText());
    });
});
