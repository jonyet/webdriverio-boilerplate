import Page from './Page'

class Navigation extends Page {
  get searchBar() {
    return $('#twotabsearchtextbox')
  }
  get submitSearch() {
    return $('[aria-label="Go"]')
  }
  get shoppingCart() {
    return $('#nav-cart')
  }
  get hamburger() {
    return $('#nav-hamburger-menu')
  }
  get expandedNav() {
    return $('#hmenu-canvas')
  }
  get closeExpandedNav() {
    return $('[class="nav-sprite hmenu-close-icon"]')
  }
  get signInFlyout() {
    return $('[class="nav-signin-tt nav-flyout"]')
  }
  get signInTooltip() {
    return $('#nav-signin-tooltip')
  }
  get signInTooltipButton() {
    return $('[data-nav-ref="nav_custrec_signin"]')
  }

  open(path) {
    super.open(path)
  }
}

export default new Navigation()
