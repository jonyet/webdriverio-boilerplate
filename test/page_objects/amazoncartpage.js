import Page from './page';

class Cart extends Page {

    get cartSize()  { return browser.element('#sc-active-cart > div > h1'); }

    open() {
        super.open();
    }

}

export default new Cart();
