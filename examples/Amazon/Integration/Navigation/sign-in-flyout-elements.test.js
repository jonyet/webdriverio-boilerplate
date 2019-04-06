import Navigation from "../../component_objects/Navigation"

describe("Navigation : SignIn Tooltip", () => {
  it("reaches the homepage", () => {
    Navigation.open()
    Navigation.signInFlyout.waitForDisplayed(undefined, true)
    Navigation.reviveFlyout(Navigation.signInFlyout)
  })

  it("has a tooltip sign-in", () => {
    expect(Navigation.signInFlyout.isDisplayed()).to.be.equal(true)
  })

  it("has the button and the link", () => {
    expect(Navigation.signInTooltipButton.isDisplayed()).to.be.equal(true)
    expect(Navigation.signInTooltipLink.isDisplayed()).to.be.equal(true)
  })
})
