import Navigation from '../component_objects/Navigation.js'

describe('Shopping Cart : New Session, no login', () => {
  it('reaches the homepage', () => {
    Navigation.open()
  })

  it('clicks the shopping cart', () => {
    Navigation.shoppingCart.click()
  })

  it('has an empty shopping cart', () => {
    const cartSize = $('div.a-row.sc-your-amazon-cart-is-empty')
    expect(cartSize.getText()).to.equal('Your Amazon Cart is empty')
  })
})
