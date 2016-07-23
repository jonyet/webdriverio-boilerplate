var expect = require('chai').expect;
var Home = require('../page_objects/amazonPageObjects/amazonhomepage.js');
var Cart = require('../page_objects/amazonPageObjects/amazoncartpage.js');

describe('Amazon Search Assertion Demo', function () {

    before('On the Amazon home page...', function () {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('A user clicks the shopping cart', function () {
      Home.shoppingCart.click();
    });

    it('A user is taken to the shopping cart page', function(){
      Cart.cartSize.waitForExist();
      Cart.cartSize.waitForVisible();
      var size = Cart.cartSize.getText();
      expect(size).to.equal('Your Shopping Cart is empty.');
    });

});
