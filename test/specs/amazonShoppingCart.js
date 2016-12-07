'use strict';

var _amazonhomepage = require('../page_objects/amazonhomepage.js');

var _amazonhomepage2 = _interopRequireDefault(_amazonhomepage);

var _amazoncartpage = require('../page_objects/amazoncartpage.js');

var _amazoncartpage2 = _interopRequireDefault(_amazoncartpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Amazon Search Assertion Demo', function () {

  before('On the Amazon home page...', function () {
    _amazonhomepage2.default.open();
    _amazonhomepage2.default.searchBar.waitForExist();
    _amazonhomepage2.default.searchBar.waitForVisible();
  });

  it('A user clicks the shopping cart', function () {
    _amazonhomepage2.default.shoppingCart.click();
  });

  it('A user is taken to the shopping cart page', function () {
    _amazoncartpage2.default.cartSize.waitForExist();
    _amazoncartpage2.default.cartSize.waitForVisible();
    var size = _amazoncartpage2.default.cartSize.getText();
    expect(size).to.equal('Your Shopping Cart is empty.');
  });
});