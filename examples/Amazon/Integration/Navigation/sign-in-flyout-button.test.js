import Navigation from '../../component_objects/Navigation'

describe('Navigation : SignIn Tooltip', () => {
  it('reaches the homepage', () => {
    Navigation.open()
    Navigation.signInFlyout.waitForDisplayed(undefined, true)
    Navigation.reviveFlyout(Navigation.signInFlyout)
  })

  it('Sign-in Button takes you to the Sign-in page', () => {
    Navigation.signInTooltipButton.click()
    expect(browser.getUrl()).to.be.equal(
      'https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&'
    )
  })
})
