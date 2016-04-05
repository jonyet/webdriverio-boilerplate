var expect = require('chai').expect;
var Summary = require('../page_objects/summarypage.js');
var cheerio = require('cheerio');
var _ = require('underscore');

describe('Summary Unresolved Issues', function () {

    before('On the Summary grid', function () {
      Summary.open();
      Summary.campaignCompletionMax.waitForExist();
      Summary.campaignCompletionMax.waitForVisible();
    });

    it('Displays Unresolved Issues', function () {
      expect(Summary.unresolvedIssues.getText()).to.not.equal('');
    });

    /* getHTML(); is currently broken - once done
    use cheerio to ensure the hrefs are good */

    it('The Issues link to JIRA', function () {
      console.log("getHTML() is broken, we aren't actually testing issue links yet");
    //   var links = [];
    //   var data = Summary.unresolvedIssues.getHTML();
    //   var $ = cheerio.load(data);
    //   var a = $('a');
    //   _.each(a, function(tag){
    //     var href = $(tag).attr('href');
    //     links.push(href)
    //   })
    //   //validate the links
    });
});
