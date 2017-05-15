import Home from '../page_objects/amazonhomepage.js';
import Cart from '../page_objects/amazoncartpage.js';

describe('Amazon Shopping Cart Assertion Demo', () => {

    before('On the Amazon home page...', () => {
      Home.open();
      Home.searchBar.waitForExist();
      Home.searchBar.waitForVisible();
    });

    it('A user clicks the shopping cart', () => {
      Home.shoppingCart.click();
    });

    it('A user is taken to the shopping cart page', () => {
      Cart.cartSize.waitForExist();
      Cart.cartSize.waitForVisible();
      const size = Cart.cartSize.getText();
      expect(size).to.equal('Your Shopping Cart is empty.');
    });

});
