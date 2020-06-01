import Navigation from "../../component_objects/Navigation"

describe("Navigation : hamburger open/close", () => {
  it("reaches the homepage", () => {
    Navigation.open()
  })

  it("lands with the nav closed", () => {
    expect(Navigation.expandedNav.isDisplayed()).to.be.equal(false)
  })

  it("clicks on the logo, expanding the nav", () => {
    Navigation.hamburger.click()
    Navigation.hamburger.waitForDisplayed(undefined, true)
    Navigation.closeExpandedNav.waitForDisplayed()
    expect(Navigation.expandedNav.isDisplayed()).to.be.equal(true)
  })

  it("closes again when clicked", () => {
    Navigation.closeExpandedNav.click()
    Navigation.closeExpandedNav.waitForDisplayed(undefined, true)
    Navigation.hamburger.waitForDisplayed()
    browser.pause(500)
    expect(Navigation.expandedNav.isDisplayed()).to.be.equal(false)
  })
})
