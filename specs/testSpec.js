var expect = require('chai').expect;
var Home = require('../page_objects/testPageObject.js');
var cheerio = require('cheerio');

describe('Cheerio Example', function () {

    before('On the Home Page', function () {
      Home.open();
      Home.homie.waitForExist();
      Home.homie.waitForVisible();
    });

    it('should have the storefront and device-desktop classes', function() {
     var body = browser.getHTML('.pt_storefront');
     var $ = cheerio.load(body);
     expect($('body').hasClass('pt_storefront')).to.be.true;
     expect($('body').hasClass('device-desktop')).to.be.true;
   });
});
