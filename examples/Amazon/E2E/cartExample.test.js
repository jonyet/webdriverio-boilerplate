import Navigation from '../component_objects/Navigation.js'

describe('Shopping Cart : New Session, no login', () => {

    it('reaches the homepage', () => {
      Navigation.open()
    })

    it('clicks the shopping cart', () => {
      Navigation.shoppingCart.click()
    })

    it('has an empty shopping cart', () => {
      const cartSize = $('[class="a-row sc-cart-header"]')
      expect(cartSize.getText()).to.equal('Your Shopping Cart is empty.')
    })

})
