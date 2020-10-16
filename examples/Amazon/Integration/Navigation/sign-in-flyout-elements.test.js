import Navigation from '../../component_objects/Navigation'

describe('Navigation : SignIn Tooltip', () => {
  it('reaches the homepage', () => {
    Navigation.open()
    Navigation.signInFlyout.waitForDisplayed(undefined, true)
    Navigation.reviveFlyout(Navigation.signInFlyout)
  })

  it('has a tooltip sign-in', () => {
    expect(Navigation.signInFlyout.isDisplayed()).to.be.equal(true)
  })

  it('has a sign in button', () => {
    expect(Navigation.signInTooltipButton.isDisplayed()).to.be.equal(true)
  })
})
